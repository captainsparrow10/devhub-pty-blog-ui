import SearchPost from "../../../components/post/search";
import FilterPost from "../../../components/post/filter";
import Post from "../../../components/post";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center space-y-12 py-12 md:py-24">
      <div className="flex w-full max-w-[900px] flex-col space-y-12 px-6 md:px-24">
        <FilterPost />
        <SearchPost />
      </div>
      <div className="flex h-full w-full justify-center overflow-hidden overflow-y-scroll">
        <div
          title="posts"
          className="flex h-fit max-w-[900px] flex-col space-y-12 px-6 md:px-24"
        >
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
