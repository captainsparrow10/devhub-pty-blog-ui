import clsx from 'clsx'
import React from 'react'
import GoogleIcon from '../icons/google'
import GithubIcon from '../icons/github'
import SendIcon from '../icons/send'

type Props = {
	children: React.ReactNode
	type?: 'submit' | 'reset' | 'button'
	color?: 'default' | 'send'
	icon?: 'google' | 'github' | 'send'
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}
export default function Button({
	children,
	type,
	color,
	onClick,
	icon,
}: Props) {
	return (
		<button
			type={type}
			className={clsx(
				'w-full flex justify-center items-center space-x-3 bg-button px-6 py-3 rounded-xl  hover:bg-hover active:bg-active',
				color == 'send' && 'bg-changes hover:bg-blue-500 active:bg-blue-800',
				(icon == 'google' || icon == 'github') &&
					'bg-white hover:bg-white active:bg-white'
			)}
			onClick={onClick}
		>
			{icon == 'google' && <GoogleIcon />}
			{icon == 'github' && <GithubIcon />}
			{icon == 'send' && <SendIcon />}
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
