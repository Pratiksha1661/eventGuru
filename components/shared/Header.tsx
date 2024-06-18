import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full flex justify-between my-7 px-7">
      <div>
        <h1 className="font-variable text-2xl font-bold text-accent">
          <Link href="/">EventGuru</Link>
        </h1>
      </div>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button>
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
