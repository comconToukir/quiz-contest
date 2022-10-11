import { useLoaderData } from "react-router-dom";
import QAndA from "../QAndA/QAndA";

import "./Blog.scss";

const Blog = () => {
  const qAndAList = useLoaderData();
  console.log(qAndAList);

  return (
    <div className="container ">
      <div className="blogs">
        {qAndAList.map((qAndA, i) => (
          <QAndA key={i} qAndA={qAndA} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
