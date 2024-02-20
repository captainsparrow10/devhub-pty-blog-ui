'use client'
import clsx from 'clsx'
import React, { useState } from 'react'

export default function NotificationBar() {
	const [optionSelected, setOptionSelected] = useState('view all')
	const notificationOption = [
		{
			title: 'view all',
			amount: 11,
		},
		{
			title: 'mentions',
			amount: 8,
		},
		{
			title: 'followers',
			amount: 3,
		},
	]
	return (
		<div className="flex justify-center items-end w-full h-fit">
			<div
				title="notification-navbar"
				className=" bg-background rounded-lg p-2  overflow-hidden w-full max-w-[450px]"
			>
				<div className="w-full flex divide-x">
					{notificationOption.map((notification, index) => (
						<div
							key={index.toString()}
							className={clsx(
								'px-3 py-2 w-1/3 flex gap-2 items-center cursor-pointer justify-center',
								notification.title == 'view all' && 'rounded-s-lg',
								notification.title == 'followers' && 'rounded-e-lg',
								notification.title == optionSelected
									? 'bg-active'
									: 'hover:bg-hover bg-aside'
							)}
							onClick={() => setOptionSelected(notification.title)}
						>
							<h6
								className={clsx(
									'capitalize',
									notification.title !== optionSelected && 'text-body'
								)}
							>
								{notification.title}
							</h6>
							<h6 className=" bg-changes px-1 rounded-xl">
								{notification.amount}
							</h6>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
