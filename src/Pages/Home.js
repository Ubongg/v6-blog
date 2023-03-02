import { useLoaderData } from "react-router-dom";
import BlogList from "../components/BlogList";

const Home = () => {
  const data = useLoaderData();

  return <div className="home">{data && <BlogList blogs={data} />}</div>;
};

export default Home;

export const BlogsLoader = async () => {
  const response = await fetch("http://localhost:8000/blogs");
  if (!response.ok) {
    throw Error("could not fetch the data for that resource");
  }
  return response.json();
};
