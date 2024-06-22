import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Separator } from "@/components/ui/separator";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Separator className="my-0" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
