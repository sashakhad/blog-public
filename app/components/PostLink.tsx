import Link from "next/link";
import { useState } from "react";
import { useFilter } from "../context/FilterContext";
import { format, parse, differenceInDays, formatDistanceToNow } from "date-fns";

interface PostLinkProps {
  title: string;
  date: string;
  id: string;
  tags: string[];
  readingTime?: number;
}

function PostLink({
  id,
  title,
  date,
  tags,
  readingTime,
}: PostLinkProps): JSX.Element {
  const { setFilter } = useFilter();
  const [showAllTags, setShowAllTags] = useState(false);

  const parsedDate = parse(date, "yyyy.MM.dd", new Date());
  const currentYear = new Date().getFullYear();
  const postYear = parsedDate.getFullYear();
  const daysAgo = differenceInDays(new Date(), parsedDate);

  const isToday = new Date().toDateString() === parsedDate.toDateString();

  const formattedDate = isToday
    ? "today"
    : daysAgo < 14
      ? formatDistanceToNow(parsedDate, { addSuffix: true })
      : currentYear === postYear
        ? format(parsedDate, "MMM d")
        : format(parsedDate, "MMM d, yyyy");

  return (
    <div className="box-border flex w-full flex-col items-start justify-center gap-2 px-20 pt-5">
      <div>
        <Link
          href={`/posts/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        >
          <div className="flex justify-between gap-5">
            <h4 className="text-xl text-dev-text decoration-dev-text hover:text-dev-accent">{title}</h4>
            <span className="mt-1.5 text-dev-accent">→</span>
          </div>
        </Link>
      </div>
      <div className="text-sm text-dev-secondary">
        {formattedDate} {readingTime ? `• ${readingTime} min read` : ""}
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        {tags &&
          tags.map((tag, index) => (
            <span
              key={tag}
              className={`cursor-pointer text-dev-accent underline hover:font-semibold ${
                index >= 2 && !showAllTags ? "hidden sm:inline" : ""
              }`}
              onClick={() => setFilter(tag.toLowerCase())}
            >
              {tag.toLowerCase()}
            </span>
          ))}
        {tags.length > 2 && !showAllTags && (
          <span
            className="cursor-pointer text-sm underline text-dev-secondary sm:hidden"
            onClick={() => setShowAllTags(true)}
          >
            + {tags.length - 2} more
          </span>
        )}
        {tags.length > 2 && showAllTags && (
          <span
            className="cursor-pointer text-sm font-bold text-dev-secondary sm:hidden"
            onClick={() => setShowAllTags(false)}
          >
            show less
          </span>
        )}
      </div>
      <div className="w-full border-b border-dev-secondary/20 pb-5"></div>
    </div>
  );
}

export default PostLink;
