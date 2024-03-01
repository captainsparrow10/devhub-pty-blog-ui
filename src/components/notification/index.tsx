import React from 'react'
import profileImage from '/public/profile.jpg'
import Image from 'next/image'
import { CircleIcon } from '../icons'

type Props = {
	option: 'like' | 'follow' | 'post'
}

export default function NotificationMessage({ option }: Props) {
	const currentDate = new Date()
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	}

	const formattedDate = currentDate.toLocaleString('en-US', options)

	const notificationStructureMessage = {
		like: {
			user: '@captainsparrow',
			message: 'liked your post',
			date: formattedDate,
			view: true,
		},
		follow: {
			user: '@captainsparrow',
			message: 'followed you',
			date: formattedDate,
			view: true,
		},
		comments: {
			user: '@captainsparrow',
			message: 'commented on your post',
			titlePost: 'How to become a developer in 2024',
			date: formattedDate,
			view: true,
			comment:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
	}
	return (
		<div title="notifications-message" className="w-full h-fit flex gap-3">
			<div
				title="user"
				className="relative h-9 w-9 lg:h-12 lg:w-12 rounded-full shrink-0 overflow-hidden"
			>
				<Image src={profileImage} alt="profile" fill />
			</div>
			{option == 'like' && (
				<div
					title="message"
					className="w-full h-fit rounded-lg bg-background p-3 sm:p-6"
				>
					<div className="flex flex-col w-full">
						<div className="flex gap-6 justify-between">
							<p>
								<span className="h5">
									{notificationStructureMessage.like.user}
								</span>{' '}
								{notificationStructureMessage.like.message}
							</p>
							{notificationStructureMessage.follow.view && <CircleIcon />}
						</div>
						<p className="span">{notificationStructureMessage.like.date}</p>
					</div>
				</div>
			)}
			{option == 'follow' && (
				<div
					title="message"
					className="w-full h-fit rounded-lg bg-background p-3 flex justify-between gap-6 sm:p-6"
				>
					<div className="flex flex-col w-full">
						<p>
							<span className="h5">
								{notificationStructureMessage.follow.user}
							</span>{' '}
							{notificationStructureMessage.follow.message}
						</p>
						<p className="span">{notificationStructureMessage.follow.date}</p>
					</div>
					{notificationStructureMessage.follow.view && <CircleIcon />}
				</div>
			)}
			{option == 'post' && (
				<div
					title="message"
					className="w-full h-fit rounded-lg bg-background p-3 sm:p-6"
				>
					<div className="flex flex-col w-full gap-3">
						<div className="flex flex-col w-full">
							<div className="flex gap-6 justify-between">
								<p>
									<span className="h5">
										{notificationStructureMessage.comments.user}
									</span>{' '}
									{notificationStructureMessage.comments.message}
									<span className="h5">
										{' '}
										{notificationStructureMessage.comments.titlePost}
									</span>
								</p>
								{notificationStructureMessage.follow.view && <CircleIcon />}
							</div>
							<p className="span">{notificationStructureMessage.like.date}</p>
						</div>
						<p>{notificationStructureMessage.comments.comment}</p>
					</div>
				</div>
			)}
		</div>
	)
}
