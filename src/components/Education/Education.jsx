import "./Education.css";

function Education() {
  return (
    <>
      <div className="edu-container px-2 mt-4" id="education">
        <div className="title pt-4">
          <p className="text-2xl font-bold edu inline">Education </p>
          {"  "} <span className="text-5xl">👨🏼‍🎓</span>
        </div>
        <div className="about bg-[var(--clr-bg-info)] rounded-2xl p-4 text-justify mt-4">
          <p className="font-bold text-3xl">Academics</p>
          <ol className="relative border-l border-[var(--clr-navbar)] ml-4 mt-8">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex text-left items-center mb-1 text-lg font-semibold">
                Bachelor of Education in Computer Engineering
                <span className="bg-[var(--clr-navbar)] text-[var(--primary)] text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                  Graduation
                </span>
              </h3>
              <time className="block mb-2 text-sm font-bold leading-none">
                July, 2019 &nbsp; <span>(MU)</span>
              </time>
              <p className="mb-4 text-base font-normal">

              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold">Diploma in Computer Technology</h3>
              <time className="block mb-2 text-sm font-bold leading-none">
                July, 2016 &nbsp; <span>(MSBTE)</span>
              </time>
              <p className="mb-4 text-base font-normal">


              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold">Secondary</h3>
              <time className="block mb-2 text-sm font-bold leading-none">
                June, 2013 &nbsp;
                <span>(MSBSHSE)</span>
              </time>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Education;
