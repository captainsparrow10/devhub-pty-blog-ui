import React from 'react'
import { NewPostIcon, SearchIcon } from '@icons'

export default function SearchPost() {
	return (
		<div
			title="search"
			className="w-full h-fit flex justify-between items-center rounded-xl bg-button px-4 py-3 space-x-6"
		>
			<div className="flex items-center space-x-3 w-full">
				<SearchIcon />
				<input
					className="text-body body2 focus:text-header w-full bg-transparent"
					placeholder="What do you search today?"
				/>
			</div>
			<div className="px-4 py-2 bg-hover hover:bg-active flex space-x-2 rounded-xl shrink-0 cursor-pointer group">
				<NewPostIcon className="group-hover:fill-header group-hover:stroke-header" />
				<p className="body2 group-hover:text-white text-body">New Post</p>
			</div>
		</div>
	)
}
