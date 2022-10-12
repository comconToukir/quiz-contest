import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import QAndA from "../QAndA/QAndA";

import "./Blog.scss";

const Blog = () => {
  //! useLoaderData is giving error , breaks when routing from quiz page :: React Router caught the following error during render TypeError: qAndAList.map is not a function
  // const qAndAList = useLoaderData();
  // console.log(qAndAList);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("qAndA.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container ">
      <div className="blogs">
        {/* {qAndAList.map((qAndA, i) => (
          <QAndA key={i} qAndA={qAndA} />
        ))} */}
        {posts.map((qAndA, i) => <QAndA key={i} qAndA={qAndA} />)}
      </div>
    </div>
  );
};

export default Blog;
