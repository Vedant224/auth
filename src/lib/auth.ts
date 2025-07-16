import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions , User, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions  = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await db.user.findUnique({
          where: { email: credentials.email }
        });

        if (!existingUser) {
          return null;
        }

        if (existingUser.password) {
          const passwordMatch = await compare(credentials.password, existingUser.password);

          if (!passwordMatch) {
            return null;
          }
        }

        return {
          id: existingUser.id,
          username: existingUser.username,
          email: existingUser.email,
          name: existingUser.name || existingUser.username,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        return {
          ...token,
          username: user.username
        };
      }
      return token;
    },
    
    async session({ session, token }: { session: Session; token: JWT }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub!,
          username: token.username
        }
      };
    },
  }
};