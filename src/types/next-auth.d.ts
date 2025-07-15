import NextAuth from "next-auth"

declare module "next-auth" {

    interface User{
        username: string  | null
    }

  interface Session {
    user: {
      username: ReactNode
      address: string
    }
    token:{
        username: string
    }
  }
}