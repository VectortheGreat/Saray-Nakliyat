import { Link, useNavigate, useParams } from "react-router-dom";
import { database } from "../../../../config/config";
import { get, ref } from "firebase/database";
import { useState } from "react";
import { useEffect } from "react";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const [data, setData] = useState("");
  const [otherBlogs, setOtherBlogs] = useState([]);
  const navigate = useNavigate();
  const [randomBlogNo, setRandomBlogNo] = useState("");
  const fetchDataBase = async () => {
    const databaseRef = ref(database);
    get(databaseRef).then((snapshot) => {
      const keys = [];
      const dataArray = [];
      snapshot.forEach((childSnapshot) => {
        keys.push(childSnapshot.val());
      });
      keys.map((x, i) => {
        if (i === 1 || i === 3) {
          x.map((y) => {
            dataArray.push(y);
          });
        }
      });
      const filteredSlugs = dataArray.filter((value) => value.slug === slug);
      setData(filteredSlugs[0]);
      const generateRandomNumbers = () => {
        let randomNum = [];
        while (randomNum.length < 4) {
          const randomNumber =
            Math.floor(Math.random() * dataArray.length - 1) + 1;
          let randomSlug = dataArray[randomNumber].slug;
          if (randomSlug === slug) {
            return generateRandomNumbers();
          }
          if (!randomNum.includes(randomNumber)) {
            randomNum.push(randomNumber);
          }
        }
        setRandomBlogNo(randomNum);
        setOtherBlogs(dataArray);
      };
      generateRandomNumbers();
    });
  };
  useEffect(() => {
    fetchDataBase();
  }, [slug]);

  const createMarkup = () => {
    return { __html: data.longDescrition };
  };
  return (
    <div className="mx-2 px-5">
      <div className="container mx-auto text-white space-y-5">
        <h1 className="text-center text-2xl my-3">{data.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
          <div className="md:col-span-5 space-y-3">
            <img
              className="w-full rounded-md shadow-sm shadow-white"
              src={data.imageUrl}
              alt=""
            />
            <div
              dangerouslySetInnerHTML={createMarkup()}
              className="space-y-4 prose"
            />
          </div>
          <div className="md:col-span-2 space-y-3">
            <div className="border-2 rounded-lg border-gray-800 p-4">
              <h2 className="text-xl font-semibold">Diğer Yazılar</h2>
              <ul className="mt-4">
                {otherBlogs?.map((value, index) => (
                  <li className="mb-2" key={index}>
                    {/* <button
                      className="hover:text-pink-600"
                      // onClick={() => navigate(`http://localhost:5173blog/${value.slug}`)}
                    >
                      {value.name}
                    </button> */}
                    <Link to={`/blog/${value.slug}`}> {value.name}</Link>
                  </li>
                ))}
                {/* {randomBlogNo !== null && otherBlogs[randomBlogNo[1]] ? (
                    <a href="/" className="hover:text-pink-600">
                      {otherBlogs[randomBlogNo[1]].name}
                    </a>
                  ) : null} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
