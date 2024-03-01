import clsx from 'clsx'
import React from 'react'
import { GithubIcon, GoogleIcon } from '@/components/icons'

type Props = {
	children: React.ReactNode
	type?: 'submit' | 'reset' | 'button'
	color?: 'default' | 'blue'
	icon?: 'google' | 'github' | 'send'
	size?: 'default' | 'sm'
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}
export default function Button({
	children,
	type,
	onClick,
	color,
	size,
	icon,
}: Props) {
	return (
		<button
			type={type}
			className={clsx(
				'flex justify-center items-center space-x-3 bg-button px-4 py-2 rounded-lg  hover:bg-hover active:bg-active',
				color == 'blue' && 'bg-blue-500 hover:bg-blue-600 active:bg-blue-800',
				size == 'sm' ? 'w-fit' : 'w-full',
				(icon == 'google' || icon == 'github') &&
					'bg-white hover:bg-white active:bg-white'
			)}
			onClick={onClick}
		>
			{icon == 'google' && <GoogleIcon />}
			{icon == 'github' && <GithubIcon />}
			<h5
				className={clsx(
					(icon == 'google' || icon == 'github') && 'text-active'
				)}
			>
				{children}
			</h5>
		</button>
	)
}
