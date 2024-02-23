import NavBar from "@/components/aside/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex h-full w-full flex-col bg-background md:flex-row">
      <NavBar />
      <div className="flex h-full w-full items-start justify-center overflow-hidden overflow-y-scroll p-6 py-12 xl:p-24">
        <div className="flex h-fit w-full max-w-[900px] flex-col space-y-12 ">
          {children}
        </div>
      </div>
    </main>
  );
}
