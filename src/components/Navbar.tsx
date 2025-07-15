
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { MapPin } from "lucide-react"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserAccountnav from "./UserAccountnav";


const Navbar = async () => {

  const session = await getServerSession(authOptions);
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-11 top-0">
      <div className="p-[1rem] flex justify-between items-center">
        <Link className="flex flex-row text-black" href='/'><MapPin />Auth</Link>
        {session?.user ? (
          <UserAccountnav / >
        ):(
          <Link className={buttonVariants({ variant: "secondary" })}  href='/sign-in'>Sign in</Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
