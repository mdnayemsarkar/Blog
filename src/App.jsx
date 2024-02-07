import "typeface-montserrat";
import b1 from "../src/photo/b1.jpg";
import b2 from "../src/photo/b2.jpg";
import b3 from "../src/photo/b3.jpg";
import b4 from "../src/photo/b4.jpg";
import b5 from "../src/photo/b10.jpg";
import b6 from "../src/photo/b6.jpg";
import b7 from "../src/photo/b7.jpg";
import b8 from "../src/photo/b8.jpg";
import b9 from "../src/photo/b9.jpg";
import b10 from "../src/photo/b10.jpg";

export default function App() {
  return (
    <>
      <div className="container font-montserrat font-mo mx-auto p-8">
        <div className="grid grid-cols-5 gap-4">
          {/* <!-- Left three columns with 12 boxes --> */}
          <div className="col-span-4 grid grid-cols-2 gap-4">
            {/* <!-- 12 boxes -->
                <!-- Box 1 --> */}

            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b1}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 mt text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>{" "}
                <br />
              </div>
            </div>

            {/* <!-- Box 2 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b2}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>{" "}
                <br />
              </div>
            </div>
            {/* <!-- Box 3 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b3}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>{" "}
                <br />
              </div>
            </div>
            {/* <!-- Box 4 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b4}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>{" "}
                <br />
              </div>
            </div>
            {/* <!-- Box 5 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b5}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>{" "}
                <br />
              </div>
            </div>
            {/* <!-- Box 6 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b6}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>{" "}
                <br />
              </div>
            </div>
            {/* <!-- Box 7 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b7}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>{" "}
                <br />
              </div>
            </div>
            {/* <!-- Box 8 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b8}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- Box 9 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b9}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>{" "}
                <br />
              </div>
            </div>
            {/* <!-- Box 10 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b10}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- Box 11 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b1}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>{" "}
                <br />
              </div>
            </div>
            {/* <!-- Box 12 --> */}
            <div className="max-w-md  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-xl p-2  h-48 w-full object-fill"
                  src={b4}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>{" "}
                <br />
              </div>
            </div>
          </div>
          {/* <!-- Right column as sidebar --> */}
          <div className="    relative   shadow-blue-50   rounded-md ">
            {/* FEATURE BOX  */}
            <div className=" col-span-1   rounded-md p-3">
              <div>
                {/* Section: Feature Boxes */}
                <div className=" ">
                  <h3 className="text-lg font-bold mb-2">Feature Boxes</h3>
                  <hr />
                  {/* Feature Box 1 */}
                  <div className="  shadow-blue-50 shadow-md p-3">
                    <img
                      src={b3}
                      alt="Feature 1"
                      className="mb-2 object-fill rounded-lg h-28 w-full   max-w-sm float-left  "
                    />
                    <h4 className="text-base font-semibold ">Feature 1</h4>
                    <p className="text-gray-700 mb-1 text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nec ex vitae eros tristique vehicula
                    </p>
                    <a
                      href="#"
                      className="text-blue-700 text-sm hover:underline inline-block"
                    >
                      Learn more
                    </a>
                  </div>{" "}
                  <br /> <hr /> <br />
                  {/* Feature Box 2 */}
                  <div className="  shadow-blue-50 shadow-md p-3">
                    <img
                      src={b4}
                      alt="Feature 1"
                      className="mb-2 object-fill rounded-lg h-28 w-full   max-w-sm float-left  "
                    />
                    <h4 className="text-base font-semibold ">Feature 1</h4>
                    <p className="text-gray-700 mb-1 text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nec ex vitae eros tristique vehicula
                    </p>
                    <a
                      href="#"
                      className="text-blue-700 text-sm hover:underline inline-block"
                    >
                      Learn more
                    </a>
                  </div>{" "}
                  <br /> <hr /> <br />
                  {/* Feature Box 3 */}
                  <div className="  shadow-blue-50 shadow-md p-3">
                    <img
                      src={b6}
                      alt="Feature 1"
                      className="mb-2 object-fill rounded-lg h-28 w-full   max-w-sm float-left  "
                    />
                    <h4 className="text-base font-semibold ">Feature 1</h4>
                    <p className="text-gray-700 mb-1 text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nec ex vitae eros tristique vehicula
                    </p>
                    <a
                      href="#"
                      className="text-blue-700 text-sm hover:underline inline-block"
                    >
                      Learn more
                    </a>
                  </div>{" "}
                  <br /> <hr /> <br />
                  {/* Feature Box 4 */}
                  <div className="  shadow-blue-50 shadow-md p-3">
                    <img
                      src={b8}
                      alt="Feature 1"
                      className="mb-2 object-fill rounded-lg h-28 w-full   max-w-sm float-left  "
                    />
                    <h4 className="text-base font-semibold ">Feature 1</h4>
                    <p className="text-gray-700 mb-1 text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nec ex vitae eros tristique vehicula
                    </p>
                    <a
                      href="#"
                      className="text-blue-700 text-sm hover:underline inline-block"
                    >
                      Learn more
                    </a>
                  </div>{" "}
                  <br /> <hr /> <br />
                </div>
              </div>
            </div>
            <div className="max-h-fit rounded-md px-5 py-5">
              <h3 className="text-lg font-bold  rounded-full  w-28 p-1 mb-2">
                Tags Cloud
              </h3>

              <div className="flex">
                <div>
                  <a
                    href="#"
                    className="inline-block px-3 py-1 mb-2 mr-2 font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full"
                  >
                    Adventure
                  </a>
                </div>
                <div>
                  {" "}
                  <a
                    href="#"
                    className="inline-block px-3 py-1 mb-2 mr-2 font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full"
                  >
                    Backpacking
                  </a>
                </div>
              </div>
              <div>
                {" "}
                <a
                  href="#"
                  className="inline-block px-3 py-1 mb-2 mr-2 font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full"
                >
                  Health
                </a>
              </div>

              <div className="flex">
                <div>
                  <a
                    href="#"
                    className="inline-block text-base px-3 py-1 mb-2 mr-2 font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full"
                  >
                    Hiking
                  </a>
                </div>
                <div className="pl-8">
                  {" "}
                  <a
                    href="#"
                    className="inline-block px-3 py-1 mb-2 mr-2 font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full"
                  >
                    Road
                  </a>
                </div>
              </div>
              <div>
                {" "}
                <a
                  href="#"
                  className="inline-block px-3 py-1 mb-2 mr-2 font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full"
                >
                  Camping
                </a>
              </div>
            </div>{" "}
            <br /> <br />
            {/*   catagory section  start*/}
            <div className="mb-4  p-3">
              <div>
                <h4 className="text-base font-semibold mb-2">Categories</h4>
                <ul>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">🎵</span>
                    <a
                      href="#"
                      className="text-blue-700 hover:underline inline-block"
                    >
                      Music
                    </a>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">🌍</span>
                    <a
                      href="#"
                      className="text-blue-700 hover:underline inline-block"
                    >
                      Destinations
                    </a>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">🏝️</span>
                    <a
                      href="#"
                      className="text-blue-700 hover:underline inline-block"
                    >
                      Beaches
                    </a>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">🏔️</span>
                    <a
                      href="#"
                      className="text-blue-700 hover:underline inline-block"
                    >
                      Mountains
                    </a>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">🏞️</span>
                    <a
                      href="#"
                      className="text-blue-700 hover:underline inline-block"
                    >
                      Nature
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*   catagory section ends */}
          </div>
        </div>
      </div>
    </>
  );
}
