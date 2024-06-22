import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import { Separator } from "../ui/separator";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  return (
    <nav className="md:hidden transition-all duration-200">
      <Sheet>
        <SheetTrigger>
          <RiMenu3Fill size={24} />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-8">
          <h1 className="font-variable text-2xl font-bold text-accent">
            <Link href="/">EventGuru</Link>
          </h1>
          <Separator />
          <NavLinks />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
