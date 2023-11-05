import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatas } from "../../../config/config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSlug } from "../../../redux/authSlice";

const BlogComp = () => {
  const [datas, setDatas] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fetchDatas() {
    try {
      const fetchedDatas = await getDatas();
      const combinedDatas = [...fetchedDatas[1], ...fetchedDatas[3]];
      setDatas(combinedDatas);
    } catch (error) {
      console.error("Mesajları alma hatası:", error);
    }
  }

  const navigatePage = (e) => {
    navigate(`/blog/${e.slug}`);
    dispatch(setSlug(e.slug));
  };
  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-3">
      {datas?.map((e, i) => (
        <div
          className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 h-full space-y-3"
          key={i}
        >
          <div className="max-w-sm bg-white h-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg h-64 w-full" src={e.imageUrl} alt="" />
            <div className="p-5 h-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {e.name}
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {e.description}
              </p>
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => navigatePage(e)}
              >
                Detay için tıklayınız
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogComp;
