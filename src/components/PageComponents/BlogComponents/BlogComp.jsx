import { useNavigate } from "react-router-dom";

const BlogComp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center text-2xl my-3">Blog</h1>
      <div className="grid grid-cols-1 mx-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 space-y-3">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/evden-eve-nakliyat.jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Evden Eve Nakliyat
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Atasayar Nakliyat ekibi olarak, müşterilerimizle birlikte
                taşımacılık işlemi için kararlaştırdığımız randevu gününde
                eksperlerimiz evinize gelerek yada Whatsapp ile yolladığınız
                resimleri inceleyerek gerekli olan incelemelerini yapar.
              </p>
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => navigate("1")}
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
      </div>
    </div>
  );
};

export default BlogComp;
