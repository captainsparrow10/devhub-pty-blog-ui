import NavBar from "@/components/aside/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex h-full w-full flex-col bg-background md:flex-row">
      <NavBar />
      <div className="flex h-screen w-full items-start justify-center overflow-hidden">
        <div className="flex h-full w-full flex-col space-y-12">
          {children}
        </div>
      </div>
    </main>
  );
}
