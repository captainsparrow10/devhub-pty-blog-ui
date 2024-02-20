'use client'
import { useForm } from 'react-hook-form'
import Input from '../../../components/inputs'
import { changePasswordType, loginType, registerType } from '../../../types/inputs'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '../../../components/button'
import Link from 'next/link'
import { RegisterSchema } from '../../../validations/registerSchema'
import { verificationEmailSchema } from '../../../validations/changePassword'

export default function ChangePasswordPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<changePasswordType>({
		resolver: zodResolver(verificationEmailSchema),
	})

	const onSubmit = handleSubmit((data: changePasswordType) => {
		console.log(data)
	})
	return (
		<main className="bg-background w-full h-full flex flex-col relative p-3 sm:p-12 xl:p-24 py-12">
			<div className="h-fit  w-full">
				<h3>DebHub PTY</h3>
			</div>
			<div className="w-full h-full flex justify-center items-center">
				<div className="flex flex-col px-3 sm:px-6 md:px-12 space-y-12 w-full max-w-[500px] items-center">
					<h1>Change Password</h1>
					<form
						className="w-full h-fit flex flex-col space-y-9"
						onSubmit={onSubmit}
					>
						<Input
							label="email"
							type="email"
							register={register}
							errors={errors}
							valueInput="email"
							placeholder="example@gmail.com"
						/>
						<Input
							label="password"
							type="password"
							register={register}
							errors={errors}
							valueInput="password"
							placeholder="********"
						/>
						<Input
							label="confirm password"
							type="password"
							register={register}
							errors={errors}
							valueInput="confirmPassword"
							placeholder="********"
						/>

						<div className="flex flex-col space-y-2 items-center">
							<Button type="submit">Change Password</Button>
							<div className="flex space-x-3 flex-wrap">
								<p>You remember your password?</p>
								<Link href="">
									<h6 className="text-body hover:text-white">Login here</h6>
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	)
}
