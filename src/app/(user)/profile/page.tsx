import Image from 'next/image'
import React from 'react'
import backgroundImage from '/public/background.jpg'
import profileImage from '/public/profile.jpg'
import Button from '@/components/button'
import { OptionIcon } from '@/components/icons'
import FilterTags from '@/components/post/tags'
import OwnPost from '@/components/post/own'

export default function ProfilePage() {
	return (
		<div
			title="profile"
			className="bg-aside rounded-xl h-fit w-full p-3 py-6 md:p-6 flex flex-col gap-6"
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
				<div className="flex gap-3 items-end">
					<p className="span">
						<span className="text-header font-bold">45</span> posts
					</p>
					<p className="span">
						<span className="text-header font-bold">45</span> following
					</p>
					<p className="span">
						<span className="text-header font-bold">45</span> followers
					</p>
				</div>
			</div>
			<div title="body" className="flex gap-6 justify-between">
				<div className="flex flex-col gap-2">
					<h5>About me</h5>
					<p className="span text-justify w-full max-w-[600px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum
						nulla accusantium repellat! Tenetur, ipsam saepe. Voluptas,
						architecto? Iste et vitae rem repudiandae quisquam autem voluptas,
						ratione alias reiciendis praesentium?
					</p>
				</div>
				<div className="flex gap-3 items-center shrink-0 h-full">
					<Button color="blue">Follow</Button>
					<OptionIcon />
				</div>
			</div>
			<div className="h-[1px] w-full bg-white" />
			<div title="my post" className="flex flex-col gap-6 w-full h-fit">
				<div title="header" className="flex h-fit space-x-3">
					<h4>Pots</h4>
				</div>
				<div className="flex flex-col gap-6 bg-aside rounded-xl sm:flex-row h-full">
					<FilterTags />
					<div
						title="posts"
						className="flex flex-col gap-6 w-full max-w-[600px] h-full"
					>
						<OwnPost />
						<OwnPost />
						<OwnPost />
					</div>
				</div>
			</div>
		</div>
	)
}
