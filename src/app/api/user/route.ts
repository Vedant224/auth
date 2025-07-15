import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from 'zod';

//define schema for input validation
const userSchema = z
    .object({
        username: z.string().min(1, 'Username is required').max(50),
        email: z.string().min(1, 'Email is required').email('Invalid email'),
        password: z.string().min(1, 'Password is required').min(8, 'Passsword must have more than 8 character'),
    })

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = userSchema.parse(body);

        //checking email already exist
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });

        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "User with this email already exist" }, { status: 409 })
        };

        //checking username already exist
        const existingUserByUsername = await db.user.findUnique({
            where: { username: username }
        });

        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: "User with username already exist" }, { status: 409 })
        };


        const hashedPassword = await hash(password, 10);

        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        })

        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({ user: rest, message: "User created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error,message: "Something went Wrong!" }, { status: 500 });
    }
}