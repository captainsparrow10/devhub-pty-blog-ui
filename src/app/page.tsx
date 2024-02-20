

import NavBar from '../components/aside/navbar'
import SearchPost from '../components/post/search'
import FilterPost from '../components/post/filter'
import Post from '../components/post'

export default function HomePage() {

	return (
		<main className="bg-background w-full h-full flex relative flex-col md:flex-row">
			<NavBar />
			<div className="flex justify-center items-start w-full h-full overflow-hidden overflow-y-scroll">
				<div className="flex flex-col space-y-12 w-full h-fit max-w-[900px] p-6  py-12 sm:p-12 xl:p-24">
					<FilterPost />
					<SearchPost />
					<div title="posts" className="flex flex-col space-y-6">
						<Post />
						<Post />
						<Post />
					</div>
				</div>
			</div>
		</main>
	)
}
