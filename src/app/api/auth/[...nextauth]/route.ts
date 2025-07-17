import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";
import type { NextAuthOptions } from "next-auth";

const extendedAuthOptions: NextAuthOptions & { trustHost: boolean } = {
  ...authOptions,
  trustHost: true,
};

const handler = NextAuth(extendedAuthOptions);

export { handler as GET, handler as POST };
