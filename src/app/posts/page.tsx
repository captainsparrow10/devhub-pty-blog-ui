'use client'
import { tags } from '@/lib/const/navigation'
import clsx from 'clsx'
import React, { useState } from 'react'
import profileImage from '/public/profile.jpg'
import Image from 'next/image'
import { OptionIcon } from '@/components/icons'

export default function PostPage() {
	const [tagSelected, setTagSelected] = useState('react')
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
		<div title="my post" className="flex flex-col gap-12 w-full h-fit">
			<div title="header" className="flex h-fit space-x-3">
				<h3>My Posts</h3>
				<div className="bg-aside px-3 w-fit flex items-center rounded-xl">
					<h4>3</h4>
				</div>
			</div>
			<div className="flex flex-col p-6 gap-6 bg-aside rounded-xl sm:flex-row h-full">
				<div
					title="tags"
					className="flex w-full overflow-hidden sm:max-w-[150px] h-fit"
				>
					<div className="flex gap-3 w-full overflow-x-scroll sm:flex-col sm:overflow-x-hidden">
						{tags.map((tag, index) => (
							<h5
								className={clsx(
									'px-4 py-3 w-fit h-fit rounded-xl cursor-pointer sm:w-full capitalize',
									tag.title == tagSelected
										? 'bg-active'
										: 'body2 hover:bg-hover'
								)}
								key={index.toString()}
								onClick={() => setTagSelected(tag.title)}
							>
								{tag.title}
							</h5>
						))}
					</div>
				</div>
				<div title="posts" className="flex flex-col gap-6 w-full max-w-[600px] h-full">
					<div
						title="post"
						className="bg-button rounded-xl p-6 gap-6 flex flex-col"
					>
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
							<OptionIcon />
						</div>
						<div title="post-body" className="flex flex-col gap-2">
							<h4>How to become a developer in 2024</h4>
							<div
								title="post-body-tags"
								className="flex gap-x-3 gap-y-2 flex-wrap"
							>
								{postTags.map((tag, index) => (
									<p
										className="px-4 py-1 w-fit h-fit bg-background rounded-xl"
										key={index.toString()}
									>
										{tag.title}
									</p>
								))}
							</div>
						</div>
					</div>
					<div
						title="post"
						className="bg-button rounded-xl p-6 gap-6 flex flex-col"
					>
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
							<OptionIcon />
						</div>
						<div title="post-body" className="flex flex-col gap-2">
							<h4>How to become a developer in 2024</h4>
							<div
								title="post-body-tags"
								className="flex gap-x-3 gap-y-2 flex-wrap"
							>
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
					<div
						title="post"
						className="bg-button rounded-xl p-6 gap-6 flex flex-col"
					>
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
							<OptionIcon />
						</div>
						<div title="post-body" className="flex flex-col gap-2">
							<h4>How to become a developer in 2024</h4>
							<div
								title="post-body-tags"
								className="flex gap-x-3 gap-y-2 flex-wrap"
							>
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
				</div>
			</div>
		</div>
	)
}
