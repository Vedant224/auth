declare module "next-auth" {
  interface User {
    username: string | null;
  }

  interface Session {
    user: {
      name?: string;             // from OAuth or database
      email?: string;
      username?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string | null;
  }
}
