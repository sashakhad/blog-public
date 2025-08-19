import { PostData } from "./posts";

export interface IndexedPost extends PostData {
  searchableContent: string;
}

export function buildPostSearchIndex(posts: PostData[]): IndexedPost[] {
  return posts.map((post) => ({
    ...post,
    searchableContent: [
      post.title,
      post.tags.join(" "),
      post.date,
    ].join(" ").toLowerCase(),
  }));
}

export function searchPosts(indexedPosts: IndexedPost[], query: string): IndexedPost[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) {
    return indexedPosts;
  }
  
  return indexedPosts.filter((post) =>
    post.searchableContent.includes(normalizedQuery)
  );
}
