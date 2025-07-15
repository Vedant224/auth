import Particles from "@/components/ui/Particles";
import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children:ReactNode;
}
const AuthLayout : FC<AuthLayoutProps> = ({children}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 w-full max-w-md p-8 mt-4 bg-zinc-100 rounded-xl">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
