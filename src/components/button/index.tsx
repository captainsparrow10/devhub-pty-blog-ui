import clsx from 'clsx'
import React from 'react'
import { GithubIcon, GoogleIcon } from '@/components/icons'

type Props = {
	children: React.ReactNode
	type?: 'submit' | 'reset' | 'button'
	color?: 'default' | 'blue'
	icon?: 'google' | 'github' | 'send'
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}
export default function Button({
	children,
	type,
	onClick,
	color,
	icon,
}: Props) {
	return (
		<button
			type={type}
			className={clsx(
				'w-full flex justify-center items-center space-x-3 bg-button px-6 py-3 rounded-xl  hover:bg-hover active:bg-active',
				color == 'blue' && 'bg-changes hover:bg-blue-500 active:bg-blue-800',
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
