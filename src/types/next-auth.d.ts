import "next-auth";

declare module "next-auth" {
  interface User {
    username?: string | null;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub?: string;
    username?: string | null;
  }
}