import CollectionCard from "@/components/shared/CollectionCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="md:my-10 my-9 lg:mx-40 mx-10">
        <div className="flex gap-12 lg:flex-row flex-col">
          <div>
            <h1 className="text-4xl md:text-5xl md:mt-6 font-bold">
              Create, Organize, Host and Manage Events with EventGuru
            </h1>
            <p className="mt-4">
              EventGuru is a platform for creating, organizing, hosting, and
              managing events. Sign up today and start planning your next event
              with EventGuru!
            </p>

            <div className="mt-4">
              <Button
                variant="default"
                className="w-full md:w-auto transition-all duration-200"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="text-black -z-10">
            <Image
              className="rounded-lg object-contain max-h-[70vh] skew-y-6 origin-left"
              src="/hero-1.jpg"
              alt="A Banner Image"
              width={1100}
              height={1100}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <Separator className="mt-24" />
      <section className="md:my-6 my-5 lg:mx-40 mx-10">
        <div className="text-center">
          <h3 className="font-bold text-2xl">Some Hosted Events</h3>
        </div>
        <div className="flex gap-4 md:justify-between justify-center flex-wrap mt-1">
          <Link href="/events/6681ec97226737b3b74a8f85">
            <CollectionCard
              title="Event 1"
              startDateTime="2024-12-12 12:00 PM"
              endDateTime="2024-12-12 12:00 PM"
              location="Mumbai, Maharashtra"
              category="Tech"
              isFree={true}
              imgUrl="/hero-2.jpg"
            />
          </Link>
          <Link href="/events/6681f29fbb3319cd18f438ce">
            <CollectionCard
              title="Event 1"
              startDateTime="2024-12-12 12:00 PM"
              endDateTime="2024-12-12 12:00 PM"
              location="Mumbai, Maharashtra"
              category="Tech"
              isFree={true}
              imgUrl="/hero-2.jpg"
            />
          </Link>
        </div>
      </section>
      <Separator />
    </>
  );
}
