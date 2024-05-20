import { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar } from "./BlogCard";

export const FullBLog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-10 max-w-screen-xl">
          <div className="col-span-8 ">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">
              Posted on 2nd December 2023
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-xl">Author</div>
            <div className="flex items-center">
              <div className="pr-4">
                <Avatar
                  size={"w-6 h-6"}
                  name={blog.author.name || "Anonymous"}
                />
              </div>
              <div>
                <div className="text-xl font-bold items-center">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="text-slate-400">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
