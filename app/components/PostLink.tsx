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
    <div className="box-border flex w-full flex-col items-start justify-center gap-2 pl-16 pr-4 pt-3 md:px-20 md:pt-5">
      <div>
        <Link
          href={`/posts/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        >
          <div className="flex justify-between items-center gap-5">
            <h4 className="text-xl text-dev-text decoration-dev-text hover:text-dev-accent">{title}</h4>
            <span className="text-dev-accent">→</span>
          </div>
        </Link>
      </div>
      <div className="text-sm text-dev-secondary">
        {formattedDate} {readingTime ? `• ${readingTime} min read` : ""}
      </div>
      <div className="flex flex-wrap gap-1 text-xs md:gap-2 md:text-sm">
        {tags &&
          tags.map((tag, index) => (
            <span
              key={tag}
              className={`cursor-pointer text-dev-accent underline hover:font-semibold ${
                !showAllTags
                  ? index >= 3
                    ? "hidden"
                    : index >= 2
                      ? "hidden md:inline"
                      : ""
                  : ""
              }`}
              onClick={() => setFilter(tag.toLowerCase())}
            >
              #{tag.toLowerCase()}
            </span>
          ))}

        {/* Mobile "more" indicator */}
        {tags.length > 2 && !showAllTags && (
          <span
            className="cursor-pointer text-sm underline text-dev-secondary md:hidden"
            onClick={() => setShowAllTags(true)}
          >
            + {tags.length - 2} more
          </span>
        )}

        {/* Desktop "more" indicator */}
        {tags.length > 3 && !showAllTags && (
          <span
            className="hidden cursor-pointer text-sm underline text-dev-secondary md:inline"
            onClick={() => setShowAllTags(true)}
          >
            + {tags.length - 3} more
          </span>
        )}

        {/* Show less button */}
        {showAllTags && tags.length > 2 && (
          <span
            className="cursor-pointer text-sm font-bold text-dev-secondary"
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
