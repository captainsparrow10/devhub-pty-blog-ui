import SearchPost from '../../../components/post/search'
import FilterPost from '../../../components/post/filter'
import Post from '../../../components/post'

export default function HomePage() {
	return (
		<>
			<FilterPost />
			<SearchPost />
			<div title="posts" className="flex flex-col space-y-6">
				<Post />
				<Post />
				<Post />
			</div>
		</>
	)
}
