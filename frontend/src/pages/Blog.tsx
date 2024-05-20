import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBLog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { AppBar } from "../components/AppBar";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBLog blog={blog} />
    </div>
  );
};
