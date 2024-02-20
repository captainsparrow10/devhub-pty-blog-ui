'use client'
import Image from 'next/image'
import profileImage from '/public/profile.jpg'
import { useState } from 'react'
import {
	ArchiveIcon,
	MenuIcon,
	ConfigIcon,
	HomeIcon,
	PostIcon,
	NotificationIcon,
	DevIcon,
	RulesIcon,
	PrivateIcon,
	TermsIcon,
} from '@icons'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

export default function NavBar() {
	const pathname = usePathname()
	const [open, setOpen] = useState(false)

	const navigationIcons = [
		{
			icon: HomeIcon,
			title: 'Home',
			route: '/',
		},
		{
			icon: PostIcon,
			title: 'My Posts',
			route: '/posts',
		},
		{
			icon: NotificationIcon,
			title: 'Notifications',
			route: '/notifications',
		},
		{
			icon: ArchiveIcon,
			title: 'Archive',
			route: '/archive',
		},
		{
			icon: DevIcon,
			title: 'About',
			route: '/about',
		},
		{
			icon: RulesIcon,
			title: 'Rules',
			route: '/rules',
		},
		{
			icon: PrivateIcon,
			title: 'Privacy Policy',
			route: '/private',
		},
		{
			icon: TermsIcon,
			title: 'Terms of use',
			route: '/terms',
		},
	]
	return (
		<div className=" h-full w-fit shrink-0">
			<div
				className={clsx(
					'px-3 py-3 hover:bg-active rounded-xl overflow-hidden sticky top-12 w-fit h-fit left-6 lg:hidden',
					open ? 'hidden' : 'flex'
				)}
				onClick={() => setOpen(!open)}
			>
				<MenuIcon />
			</div>
			<div
				className={clsx(
					'h-full  max-w-[350px] bg-aside flex-col transition-all   ease-in-out duration-500 overflow-hidden',
					open ? 'w-full flex' : 'w-24 hidden lg:flex'
				)}
				title="aside"
			>
				<div title="navbar" className="px-6 py-12 lg:py-24 h-full w-full">
					<div
						className="flex items-center justify-between h-full max-h-12"
						title="navbar-title"
					>
						<h4
							className={clsx(
								'shrink-0 h-full items-center',
								open ? 'flex' : 'hidden'
							)}
						>
							DevHub PTY
						</h4>

						<div
							className={clsx(
								'px-3 py-3 hover:bg-active rounded-xl overflow-hidden group'
							)}
							onClick={() => setOpen(!open)}
						>
							<MenuIcon />
						</div>
					</div>
					<div
						title="navbar-option"
						className="h-full w-full flex items-center"
					>
						<div
							className="flex flex-col space-y-3 w-full h-fit"
							title="navbar-profile"
						>
							{navigationIcons.map((item) => (
								<>
									<Link href={item.route} key={item.title}>
										<div
											className={clsx(
												'px-3 py-3  flex justify-between items-center rounded-xl cursor-pointer group relative',
												pathname == item.route ? 'bg-active' : 'hover:bg-hover'
											)}
										>
											<div className="flex space-x-4 items-center">
												<item.icon
													className={
														pathname == item.route
															? 'icon-active'
															: 'group-hover:fill-header group-hover:stroke-header'
													}
												/>
												<p
													className={clsx(
														'body2 text-body group-hover:text-header shrink-0',
														pathname == item.route && 'text-header',
														!open && 'hidden'
													)}
												>
													{item.title}
												</p>
											</div>
											{item.title == 'Notifications' && (
												<h6
													className={clsx(
														'rounded-full bg-changes header px-2',
														open ? 'flex' : 'absolute top-2 left-6'
													)}
												>
													5
												</h6>
											)}
										</div>
									</Link>
									{item.title == 'Archive' && (
										<div className="bg-header w-full h-[1px]" />
									)}
								</>
							))}
						</div>
					</div>
				</div>
				<div
					className="bg-active p-6 flex justify-between items-center w-full h-fit gap-6"
					title="profile"
				>
					<div title="user" className="flex space-x-3 items-center ">
						<div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0">
							<Image src={profileImage} alt="profile" fill />
						</div>
						{open && (
							<div className="flex flex-col space-y-1 shrink-0">
								<h5>John Doe</h5>
								<p className="span">your&apos;e the hero in your own story</p>
							</div>
						)}
					</div>
					{open && (
						<div title="config">
							<ConfigIcon />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
