import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 p-4 w-screen max-w-2xl cursor-pointer">
        <div className="flex items-center">
          <Avatar size={"w-6 h-6"} name={authorName} />
          <div className="pl-2 text-sm">{authorName}</div>
          <div className="pl-2 text-xs text-slate-500 pb-0.5">&#9679;</div>
          <div className="pl-2 font-light text-slate-500 text-sm">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold">{title}</div>
        <div>{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-400 text-sm">{`${Math.ceil(
          content.length / 100
        )} minutes`}</div>
      </div>
    </Link>
  );
};

export function Avatar({ name, size }: { name: string; size: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size}`}
    >
      <span className=" text-xs text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
