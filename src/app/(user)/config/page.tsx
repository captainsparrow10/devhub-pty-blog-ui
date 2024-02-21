'use client'
import Image from 'next/image'
import React from 'react'
import profileImage from '/public/profile.jpg'
import backgroundImage from '/public/background.jpg'
import Input from '@/components/inputs'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProfileSchema } from '@/validations/profileSchema'
import { profileType } from '@/types/inputs'
import { useForm } from 'react-hook-form'
import TextArea from '@/components/inputs/area'
import Button from '@/components/button'
import { ResetIcon, ReturnIcon } from '@/components/icons'

export default function ConfigPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<profileType>({
		resolver: zodResolver(ProfileSchema),
	})
	return (
		<div
			title="profile"
			className="w-full bg-aside rounded-xl h-fit flex flex-col md:flex-row gap-6 p-3 py-6 md:p-6 justify-center"
		>
			<div
				title="profile-preview"
				className="bg-background rounded-xl h-fit w-full p-3 flex flex-col gap-6 max-w-[400px]"
			>
				<div title="background" className="relative w-full h-[250px]">
					<Image src={backgroundImage} alt="background" fill />
					<div className="absolute h-12 w-12 rounded-full overflow-hidden shrink-0 border-white border -bottom-3 left-2">
						<Image src={profileImage} alt="profile" fill />
					</div>
				</div>
				<div
					title="user"
					className="flex gap-6 items-center justify-between flex-wrap"
				>
					<div className="flex flex-col shrink-0">
						<h5>Javier Acosta Tullock</h5>
						<p className="span">@captainsparrow10</p>
					</div>
				</div>
				<div title="body" className="flex gap-6 justify-between">
					<div className="flex flex-col gap-2">
						<h5>About me</h5>
						<p className="span text-justify w-full max-w-[600px]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
							earum nulla accusantium repellat! Tenetur, ipsam saepe. Voluptas,
							architecto? Iste et vitae rem repudiandae quisquam autem voluptas,
							ratione alias reiciendis praesentium?
						</p>
					</div>
				</div>
			</div>
			<div
				title="profile-data"
				className="w-full flex flex-col gap-6 max-w-[400px]"
			>
				<Input
					label="name"
					type="text"
					placeholder="captain sparrow"
					register={register}
					errors={errors}
					valueInput="name"
				/>
				<Input
					label="username"
					type="text"
					placeholder="Sparrow"
					register={register}
					errors={errors}
					valueInput="username"
				/>
				<TextArea
					placeholder="You're the hero in your own story"
					valueInput="about"
					label="About me"
					register={register}
					errors={errors}
				></TextArea>
				<div className="flex space-x-3 items-center">
					<Button color="blue" size="sm">
						Update
					</Button>
					<ReturnIcon />
				</div>
				<div className="h-[1px] bg-body w-full" />
				<div className="flex flex-col gap-2">
					<Input
						label="username"
						type="email"
						placeholder="sparrow@gmail.com"
						register={register}
						errors={errors}
						valueInput="email"
					/>
					<Button size="sm">Change Email</Button>
				</div>
				<div className="flex flex-col gap-2">
					<h4>Password</h4>
					<Button size="sm">Change Password</Button>
				</div>
				<div className="flex flex-col gap-2">
					<h4>Account</h4>
					<Button size="sm">Delete Account</Button>
				</div>
			</div>
		</div>
	)
}
