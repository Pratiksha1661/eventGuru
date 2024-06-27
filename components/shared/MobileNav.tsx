import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import { Separator } from "../ui/separator";
import NavLinks from "./NavLinks";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const MobileNav = () => {
  return (
    <nav className="lg:hidden transition-all duration-200 h-fit">
      <Sheet>
        <SheetTrigger>
          <RiMenu3Fill className="pt-[5px]" size={22} />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-8">
          <h1 className="font-variable text-2xl font-bold text-accent">
            <Link href="/">EventGuru</Link>
          </h1>
          <Separator />
          <NavLinks />
          <SheetFooter>
            <SignedOut>
              <Button className="w-full">
                <Link className="w-full" href="/sign-in">
                  Sign in
                </Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
