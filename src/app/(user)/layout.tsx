import NavBar from '@/components/aside/navbar'

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className="bg-background w-full h-full flex relative flex-col md:flex-row">
			<NavBar />
			<div className="flex justify-center items-start w-full h-full overflow-hidden overflow-y-scroll">
				<div className="flex flex-col space-y-12 w-full h-fit max-w-[900px] p-6  py-12 sm:p-12 xl:p-24">
					{children}
				</div>
			</div>
		</main>
	)
}
