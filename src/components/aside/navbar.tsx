'use client'
import Image from 'next/image'
import profileImage from '/public/profile.jpg'
import React, { useState } from 'react'
import { MenuIcon, ConfigIcon } from '@icons'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { configIcons, navigationIcons } from '@/lib/const/navigation'
import { usePreviewUrl } from '@/lib/store/previewUrl'

export default function NavBar() {
	const pathname = usePathname()
	const saveUrl = usePreviewUrl((state) => state.saveUrl)
	const url = usePreviewUrl((state) => state.previewUrl)
	const [open, setOpen] = useState(false)
	const router = useRouter()

	return (
		<>
			<div className="w-full h-fit sticky p-3 pt-6 sm:px-12 md:hidden">
				<div
					className={clsx(
						'px-3 py-3 hover:bg-active rounded-xl overflow-hidden  w-fit h-fit'
					)}
					onClick={() => setOpen(!open)}
				>
					<MenuIcon />
				</div>
			</div>
			<div className="h-full w-fit shrink-0 absolute md:relative z-50">
				<div
					className={clsx(
						' bg-aside flex-col transition-all overflow-hidden h-full',
						open
							? 'w-[350px] flex z-50 ease-in duration-300 '
							: 'md:w-24 md:flex ease-out duration-300 w-0'
					)}
					title="aside"
				>
					<div
						title="navbar"
						className="px-6 py-6 sm:py-12 lg:py-24 flex flex-col h-full w-full"
					>
						<div
							className="flex items-center justify-between h-full max-h-12"
							title="navbar-title"
						>
							<h4
								className={clsx(
									'shrink-0 items-center',
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
								{pathname.match('/config')
									? configIcons.map((item, index) => (
											<div
												key={index.toString()}
												onClick={()=> {
													if (item.title == "back") {
														router.push(url)
													}
												}}
												className={clsx(
													'px-3 py-3  flex justify-between items-center rounded-xl cursor-pointer group relative',
													item.title == 'profile'
														? 'bg-active'
														: 'hover:bg-hover'
												)}
											>
												<div className="flex space-x-4 items-center">
													<item.icon
														className={
															item.title == 'profile'
																? 'icon-active'
																: 'group-hover:fill-header group-hover:stroke-header'
														}
													/>
													<p
														className={clsx(
															'body2 text-body group-hover:text-header shrink-0 capitalize',
															item.title == 'profile' && 'text-header',
															!open && 'hidden'
														)}
													>
														{item.title}
													</p>
												</div>
											</div>
									  ))
									: navigationIcons.map((item, index) => (
											<React.Fragment key={index.toString()}>
												<Link href={item.route}>
													<div
														className={clsx(
															'px-3 py-3  flex justify-between items-center rounded-xl cursor-pointer group relative',
															pathname.match(item.route)
																? 'bg-active'
																: 'hover:bg-hover'
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
											</React.Fragment>
									  ))}
							</div>
						</div>
					</div>
					<div
						className="bg-active p-6 flex justify-between items-center w-full h-fit gap-6"
						title="profile"
					>
						<Link href="/profile">
							<div
								title="user"
								className="flex space-x-3 items-center cursor-pointer"
							>
								<div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0">
									<Image src={profileImage} alt="profile" fill />
								</div>
								{open && (
									<div className="flex flex-col space-y-1 shrink-0">
										<h5>John Doe</h5>
										<p className="span">
											your&apos;e the hero in your own story
										</p>
									</div>
								)}
							</div>
						</Link>
						{open && (
							<Link href="/config" onClick={() => saveUrl(pathname)}>
								<div title="config">
									<ConfigIcon />
								</div>
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
