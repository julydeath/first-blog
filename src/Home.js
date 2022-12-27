import { useState, useEffect } from "react";
import BlogList from "./BlogsList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    fetch("https://d6t2vunx.directus.app/items/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data.data);
      });
  }, []);
  return (
    <div className="home">
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
