import React from 'react'
import Image from 'next/image'
import profileImage from '/public/profile.jpg'
import { ArchiveIcon, CommentIcon, StarIcon } from '@icons'

export default function Post() {
	const tags = [
		{
			title: 'react',
		},
		{
			title: 'nextjs',
		},
		{
			title: 'angular',
		},
		{
			title: 'js',
		},
	]
	return (
		<div
			title="post"
			className="px-6 lg:px-12 py-6 w-full h-fit bg-button rounded-xl flex flex-col space-y-6 hover:bg-hover active:bg-active cursor-pointer"
		>
			<div title="post-header" className="flex justify-between items-center">
				<div title="user" className="flex space-x-3 items-center">
					<div className="relative h-6 w-6 lg:h-12 lg:w-12 rounded-full overflow-hidden shrink-0">
						<Image src={profileImage} alt="profile" fill />
					</div>
					<div className="flex flex-col">
						<h4>Javier Acosta Tullock</h4>
						<p>@captainsparrow10</p>
					</div>
				</div>
				<p className="flex shrink-0">10 days ago</p>
			</div>
			<div title="post-body" className="flex flex-col space-y-6">
				<h2 title="post-body-title">How to became a developer in 2024</h2>
				<p className="body2 text-justify" title="post-body-description">
					Enthusiastic and detail-oriented aspiring developer seeking a
					challenging role to leverage my programming skills and passion for
					technology. Eager to contribute to dynamic projects, grow
					professionally, and embrace continuous learning in the rapidly
					evolving field of software development.
				</p>
				<div title="post-body-tags" className="flex gap-x-4 gap-y-2 flex-wrap">
					{tags.map((tag) => (
						<p
							className="px-4 py-1 w-fit h-fit bg-background rounded-xl"
							key={tag.title}
						>
							{tag.title}
						</p>
					))}
				</div>
			</div>
			<div
				title="post-footer"
				className="flex justify-between items-center w-full"
			>
				<div className="flex space-x-6 items-center">
					<div className="flex space-x-2 items-center cursor-pointer group ">
						<StarIcon className="group-hover:fill-header group-hover:stroke-header" />
						<p className="body2 group-hover:text-white ">24 stars</p>
					</div>
					<div className="flex space-x-2 items-center cursor-pointer group ">
						<CommentIcon className="shrink-0 group-hover:fill-header group-hover:stroke-header" />
						<p className="body2 group-hover:text-white ">24 comments</p>
					</div>
				</div>
				<div className="flex items-center">
					<ArchiveIcon />
				</div>
			</div>
		</div>
	)
}
