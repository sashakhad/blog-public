"use client";

import SideBar from "@/app/components/SideBar";
import { FilterProvider } from "@/app/context/FilterContext";
import FilteredPosts from "@/app/components/FilteredPosts";
import { PostData } from "@/lib/posts";

interface HomeProps {
  posts: PostData[];
  groupedPosts: { [year: string]: { [month: string]: PostData[] } };
}

const Home = ({ posts, groupedPosts }: HomeProps) => {
  return (
    <FilterProvider>
      <div className="flex h-screen">
        <SideBar groupedPosts={groupedPosts} />
        <FilteredPosts allPostsData={posts} />
      </div>
    </FilterProvider>
  );
};

export default Home;
