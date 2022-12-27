import { useState } from "react";
import BlogList from "./BlogsList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First Blog", author: "manoj", id: 1 },
    { title: "My name is Kantha Rao", author: "kantha", id: 2 },
    { title: "My name is Lalitha Kumari", author: "lalitha", id: 3 },
    { title: "My name is Manoj Kumar", author: "manoj", id: 4 },
    { title: "My second blog", author: "lalitha", id: 5 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "lalitha")}
        title="All Lalitha Blogs"
      />
    </div>
  );
};

export default Home;
