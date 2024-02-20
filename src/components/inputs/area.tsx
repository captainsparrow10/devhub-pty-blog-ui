import React, { ReactNode } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

type Props = {
	children: ReactNode
	placeholder: string
	register: UseFormRegister<any>
	valueInput: 'area'
	value?: string | undefined
	errors: FieldErrors<any>
}

export default function TextArea({
	children,
	placeholder,
	errors,
	register,
	valueInput,
}: Props) {
	return (
		<>
			<textarea
				className="rounded-xl bg-button p-4 text-body body2 focus:text-header w-full resize-none  h-40"
				{...register(valueInput, { required: true })}
				placeholder={placeholder}
			>
				{children}
			</textarea>
			{errors[valueInput] && (
				<span className="warning-text">
					{errors[valueInput]?.message?.toString()}
				</span>
			)}
		</>
	)
}
