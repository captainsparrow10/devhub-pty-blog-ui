'use client'
import clsx from 'clsx'
import React, { useState } from 'react'

export default function FilterPost() {
	const [active, setActive] = useState('recent')
	const topics = [
		{
			title: 'recent',
		},
		{
			title: 'following',
		},
		{
			title: 'top',
		},
		{
			title: 'all',
		},
	]
	return (
		<div title="topics" className="flex space-x-6 items-center">
			{topics.map((topic) => (
				<h4
					key={topic.title}
					className={clsx(
						'capitalize cursor-pointer',
						active !== topic.title && 'body1 text-body'
					)}
					onClick={() => setActive(topic.title)}
				>
					{topic.title}
				</h4>
			))}
		</div>
	)
}
