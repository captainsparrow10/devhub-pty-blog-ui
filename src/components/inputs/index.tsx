'use client'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ChangeEvent, useState } from 'react'

import clsx from 'clsx'
import { EyesCloseIcon, EyesOpenIcon } from '../icons'
type Props = {
	register: UseFormRegister<any>
	label: string
	type: 'text' | 'email' | 'password'
	valueInput: 'name' | 'email' | 'password' | 'confirmPassword' | 'username' 
	placeholder: string
	forgot?: boolean
	value?: string | undefined
	errors: FieldErrors<any>
}

const Input = ({
	register,
	label,
	placeholder,
	errors,
	type,
	value,
	valueInput,
	forgot,
}: Props) => {
	const [open, setOpen] = useState(false)
	const [data, setData] = useState(value || '')
	const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData(e.target.value)
	}

	return (
		<div className="flex flex-col w-full space-y-1 relative">
			<label htmlFor={label}>
				<h4 className="capitalize">{label}</h4>
			</label>
			<div className="w-full h-fit flex justify-between items-center rounded-xl bg-button px-4 py-3 space-x-6">
				<input
					type={type === 'password' ? (open ? 'text' : 'password') : type}
					id={label}
					{...register(valueInput, {
						required: true,
					})}
					value={data}
					placeholder={placeholder}
					onChange={onHandleChange}
					className=" text-body body2 focus:text-header w-full bg-transparent"
				/>
				{type === 'password' && (
					<div
						className="h-fit w-fit flx shrink-0"
						onClick={() => setOpen(!open)}
					>
						{open && data?.length > 0 ? (
							<EyesOpenIcon className="icon-active" />
						) : (
							<EyesCloseIcon />
						)}
					</div>
				)}
			</div>
			<div
				className={clsx(
					'flex justify-end mt-2',
					errors[valueInput] && 'justify-between'
				)}
			>
				{forgot ? (
					<>
						{errors[valueInput] && (
							<span className="warning-text">
								{errors[valueInput]?.message?.toString()}
							</span>
						)}
						<p className="hover:text-white cursor-pointer">
							forgot the password?
						</p>
					</>
				) : (
					errors[valueInput] && (
						<span className="warning-text">
							{errors[valueInput]?.message?.toString()}
						</span>
					)
				)}
			</div>
		</div>
	)
}

export default Input
