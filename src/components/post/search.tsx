import React from 'react'
import { NewPostIcon, SearchIcon } from '@icons'
import Link from 'next/link'

export default function SearchPost() {
	return (
		<div
			title="search"
			className="w-full h-fit flex justify-between items-center rounded-xl bg-button px-4 py-3 space-x-3"
		>
			<div className="flex items-center space-x-3 w-full">
				<SearchIcon />
				<input
					className="text-body body2 focus:text-header w-full bg-transparent whitespace-normal"
					placeholder="What do you search today?"
				/>
			</div>
			<Link href="/newpost" className='flex shrink-0'>
				<div className="px-4 py-1 bg-hover hover:bg-active flex space-x-2 rounded-xl shrink-0 cursor-pointer group items-center">
					<NewPostIcon className="group-hover:fill-header group-hover:stroke-header" />
					<p className="group-hover:text-white">New Post</p>
				</div>
			</Link>
		</div>
	)
}
