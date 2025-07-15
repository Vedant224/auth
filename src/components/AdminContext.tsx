"use client";

import Particles from "@/components/ui/Particles";

interface Props {
  isLoggedIn: boolean;
  username?: string;
}

const AdminContent = ({ isLoggedIn, username }: Props) => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4">
      {/* 🔴 Background */}
      <Particles
        particleColors={["#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* ⚪ Foreground */}
      <div className="relative z-10 text-center text-white text-2xl">
        {isLoggedIn ? (
          <div>Admin Page {username}</div>
        ) : (
          <h2>Login to admin page</h2>
        )}
      </div>
    </div>
  );
};

export default AdminContent;
