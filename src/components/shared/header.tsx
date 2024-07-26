"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const Header = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`w-full border-b shadow-sm ${mounted && theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="wrapper flex items-center justify-between p-4">
        <Link href="/" className="w-36">
          <Image 
            src="/WaytLogo.png" 
            width={128} 
            height={38} 
            alt="Wayt logo" 
            priority
          />
        </Link>

        <nav className="hidden md:flex w-full max-w-xs justify-between">
          <Link href="/events" className="nav-link">Events</Link>
          <Link href="/venues" className="nav-link">Venues</Link>
        </nav>

        <div className="flex items-center space-x-3">
          {mounted && <ModeToggle />}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
