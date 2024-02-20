'use client'
import NavBar from '@/components/aside/navbar'
import profileImage from '/public/profile.jpg'
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'
import NotificationMessage from '@/components/notification'
import NotificationBar from '@/components/notification/bar'
import { CheckDoubleIcon } from '@/components/icons'

export default function NotificationsPage() {
	return (
		<div title="my notifications" className="flex flex-col gap-12 w-full h-fit">
			<div
				title="header"
				className="flex h-fit justify-between flex-wrap w-full"
			>
				<div className="flex h-fit space-x-3">
					<h3>My Notifications</h3>
					<div className="bg-aside px-3 w-fit flex items-center rounded-xl">
						<h4>3</h4>
					</div>
				</div>
				<div className="flex items-center  gap-2">
					<CheckDoubleIcon />
					<p className="body2 hidden sm:flex">Mark all as read</p>
				</div>
			</div>
			<div
				title="body"
				className="bg-aside h-full w-full rounded-xl p-3 py-6 lg:py-12 md:px-6 flex gap-6 flex-col"
			>
				<NotificationBar />
				<div className="flex justify-center">
					<div
						title="notifications-messages"
						className="flex flex-col gap-3 w-full max-w-[600px]"
					>
						<NotificationMessage option="like" />
						<NotificationMessage option="post" />
						<NotificationMessage option="follow" />
					</div>
				</div>
			</div>
		</div>
	)
}
