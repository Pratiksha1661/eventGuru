import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
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
        <div className="text-black">
          <Image
            className="rounded-lg object-contain origin-center max-h-[70vh]"
            src="/hero-1.jpg"
            alt="A Banner Image"
            width={1100}
            height={1100}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
