import OwnPost from '@/components/post/own'
import FilterTags from '@/components/post/tags'

export default function PostPage() {
	return (
		<div title="my post" className="flex flex-col gap-12 w-full h-fit">
			<div title="header" className="flex h-fit space-x-3">
				<h3>My Posts</h3>
				<div className="bg-aside px-3 w-fit flex items-center rounded-xl">
					<h4>3</h4>
				</div>
			</div>
			<div className="flex flex-col p-6 gap-6 bg-aside rounded-xl sm:flex-row h-full">
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
	)
}
