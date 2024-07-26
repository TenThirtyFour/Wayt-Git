import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="wrapper flex items-center justify-between p-4">
        <Link href="/" className="w-36">
          <Image 
            src="/assets/images/WaytLogo.png" 
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
