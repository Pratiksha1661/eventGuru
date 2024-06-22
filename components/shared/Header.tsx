import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="w-full flex justify-between my-5 px-10 transition-all duration-200">
      <div className="flex gap-8 items-center transition-all duration-200">
        <h1 className="font-variable md:text-2xl text-xl font-bold text-accent transition-all duration-200">
          <Link href="/">EventGuru</Link>
        </h1>
        <div className="md:block hidden">
          <NavLinks />
        </div>
      </div>
      <div>
        <SignedIn>
          <div className="flex gap-5 items-center">
            <MobileNav />
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex gap-5 items-center">
            <Button>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <MobileNav />
          </div>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
