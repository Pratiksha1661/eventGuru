import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-transparent backdrop-blur-sm">
        <div className="w-full flex justify-between my-5 lg:px-40 px-10 transition-all duration-200 items-center">
          <div className="flex gap-8 items-center transition-all duration-200">
            <h1 className="font-variable md:text-2xl text-xl font-bold text-accent transition-all duration-200">
              <Link href="/">EventGuru</Link>
            </h1>
            <div className="lg:block hidden">
              <NavLinks />
            </div>
          </div>
          <div>
            <SignedIn>
              <div className="flex lg:gap-5 gap-2 items-center">
                <UserButton afterSignOutUrl="/" />
                <MobileNav />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex gap-5 items-center">
                <Button>
                  <Link className="w-full" href="/sign-in">
                    Sign in
                  </Link>
                </Button>
                <MobileNav />
              </div>
            </SignedOut>
          </div>
        </div>
        <Separator className="my-0" />
      </header>
    </>
  );
};

export default Header;
