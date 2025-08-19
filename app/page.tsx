import { getPostsData } from "@/lib/posts";
import Home from "./homePage";

export default async function HomePage() {
  const { sortedPosts, groupedPosts } = getPostsData();

  return <Home posts={sortedPosts} groupedPosts={groupedPosts} />;
}
