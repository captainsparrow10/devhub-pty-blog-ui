'use client'
import React from 'react'
import profileImage from '/public/profile.jpg'
import Image from 'next/image'
import { OptionIcon, TrashIcon } from '@/components/icons'
import { usePathname } from 'next/navigation'

export default function OwnPost() {
	const pathname = usePathname()
	const path = pathname.match('archives')
	const postTags = [
		{
			title: 'react',
		},
		{
			title: 'nextjs',
		},
		{
			title: 'angular',
		},
	]
	return (
		<div title="post" className="bg-button rounded-xl p-6 gap-6 flex flex-col">
			<div title="post-header" className="flex justify-between">
				<div title="user" className="flex space-x-3 items-center">
					<div className="relative h-9 w-9 lg:h-12 lg:w-12 rounded-full overflow-hidden shrink-0">
						<Image src={profileImage} alt="profile" fill />
					</div>
					<div className="flex flex-col">
						<h5>Javier Acosta Tullock</h5>
						<p>@captainsparrow10</p>
					</div>
				</div>
				{path !== null ? <TrashIcon /> : <OptionIcon />}
			</div>
			<div title="post-body" className="flex flex-col gap-2">
				<h4>How to become a developer in 2024</h4>
				<div title="post-body-tags" className="flex gap-x-3 gap-y-2 flex-wrap">
					{postTags.map((tag) => (
						<p
							className="px-4 py-1 w-fit h-fit bg-background rounded-xl"
							key={tag.title}
						>
							{tag.title}
						</p>
					))}
				</div>
			</div>
		</div>
	)
}
