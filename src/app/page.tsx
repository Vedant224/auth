import { buttonVariants } from "@/components/ui/button";
import Particles from "@/components/ui/Particles";
import Link from "next/link";


export default async function Home() {

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={1000}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={true}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome Home</h1>
        <Link className={buttonVariants()} href="/admin">
          Open my Admin
        </Link>
{/* 
        <h2 className="text-lg font-medium">Client</h2>
        <User /> */}
      </div>
    </div>
  );
}
