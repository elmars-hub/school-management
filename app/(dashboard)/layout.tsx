import Menu from "@/components/layout/Menu";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-white">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} priority />
          <span className="hidden lg:block">School</span>
        </Link>

        <Menu />
      </div>

      {/* Right */}
      <main className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll text-black">
        <NavBar />
        {children}
      </main>
    </div>
  );
}
