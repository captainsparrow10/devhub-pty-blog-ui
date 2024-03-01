'use client'
import { useForm } from 'react-hook-form'
import Input from '../../../components/inputs'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '../../../components/button'
import Link from 'next/link'
import { VerificationEmailSchema } from '../../../validations/changePassword'

type Input = {
	email: string
}
export default function VerificationEmailPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Input>({
		resolver: zodResolver(VerificationEmailSchema),
	})

	const onSubmit = handleSubmit((data: Input) => {
		console.log(data)
	})
	const onSubmitProvider = handleSubmit((data: Input) => {
		console.log(data)
	})
	return (
		<main className="bg-background w-full h-full flex flex-col relative p-3 sm:p-12 xl:p-24 py-12">
			<div className="h-fit  w-full">
				<h3>DebHub PTY</h3>
			</div>
			<div className="w-full h-full flex justify-center items-center">
				<div className="flex flex-col px-3 sm:px-6 md:px-12 space-y-12 w-full max-w-[500px]  items-center">
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

						<div className="flex flex-col space-y-2 items-center">
							<Button type="submit">Send to Email</Button>
							<div className="flex space-x-3 flex-wrap">
								<p>You remember your password?</p>
								<Link href="">
									<h6 className="text-body hover:text-white">Login here</h6>
								</Link>
							</div>
						</div>
					</form>
					<div className="flex space-x-6 w-full items-center">
						<div className="bg-header w-full h-[1px]" />
						<h5>OR</h5>
						<div className="bg-header w-full h-[1px]" />
					</div>
					<div className="flex flex-col w-full space-y-6">
						<Button type="button" onClick={onSubmitProvider} icon="google">
							Google
						</Button>
						<Button type="button" onClick={onSubmitProvider} icon="github">
							GitHub
						</Button>
					</div>
				</div>
			</div>
		</main>
	)
}
