import { getPostData, getAllPostIds, PostData } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";

interface PostProps {
  params: { slug: string[] };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((post) => ({
    slug: [post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const titleSlug = slug.join("-");
  const postData = await getPostData(titleSlug);
  if (!postData) {
    return {
      title: "Post not found",
    };
  }
  return {
    title: postData.title,
  };
}

const Post = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  const titleSlug = slug.join("-");
  const postData = await getPostData(titleSlug);
  const allPostsData = getAllPostIds();
  if (!postData) {
    notFound();
  }

  const currentIndex = allPostsData.findIndex(
    (post) =>
      post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === titleSlug,
  );
  const prevPost = currentIndex > 0 ? allPostsData[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPostsData.length - 1
      ? allPostsData[currentIndex + 1]
      : null;

  const formattedDate = format(new Date(postData.date), "MMM d, yyyy");

  return (
    <div className="px-10 py-10 md:px-40 md:py-20 lg:px-80 xl:px-96">
      <Link href="/">
        <span className="mb-5 mt-1.5 text-dev-accent cursor-pointer hover:text-dev-text">← Back to posts</span>
      </Link>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <article>
          <div className="mb-5 flex flex-col">
            <h1 className="mb-3 text-3xl lg:text-4xl text-dev-text">{postData.title}</h1>
          </div>
          <hr className="my-5 border-dev-secondary/30" />
          <div
            className="flex flex-col gap-5 text-dev-text prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
          />
          <hr className="my-5 border-dev-secondary/30" />
          <div className="text-dev-secondary">
            <p className="text-lg">{formattedDate}</p>
            {postData.tags && postData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {postData.tags.map((tag) => (
                  <span key={tag} className="text-dev-accent">
                    #{tag.toLowerCase()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
        <div className="flex w-full justify-between mt-10">
          {prevPost ? (
            <Link
              href={`/posts/${prevPost.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              <div className="text-dev-text hover:text-dev-accent">
                <div className="flex items-center gap-2">
                  <span>←</span>
                  {prevPost.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/posts/${nextPost.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              <div className="text-dev-text hover:text-dev-accent">
                <div className="flex items-center gap-2">
                  {nextPost.title}
                  <span>→</span>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
