import "./Hero.css";
// eslint-disable-next-line react/prop-types
function Hero({ themeMode, className }) {
  return (
    <>
      <div className={`hero-container px-2 ${className}`}>
        <div
          className={
            themeMode === "light"
              ? "avatar-bg bg-[url('../../src/assets/images/dark-me.png')]"
              : "avatar-bg bg-[url('../../src/assets/images/light-me.png')]"
          }
        >
          <div className="spotlights mt-8">
            <img
              src="../../src/assets/images/right-spotlights.PNG"
              alt="right spot"
              className="inline absolute spotlight-r left-[8.5rem] h-[18rem]"
              />
            <img
              src="../../src/assets/images/left-spotlights.PNG"
              alt="left spot"
              className="inline absolute spotlight-l left-[-1.5rem] h-[18rem]"
            />
          </div>
        </div>

        <div className="text-center mt-8 flex flex-col info h-[52vh] justify-evenly">
          <p className="text-5xl font-bold name">Kunal Ahuja</p>
          <p className="text-3xl font-semibold profile px-2">
            Software Development Engineer
          </p>
          <div>
            <a className="email" href="mailto:kahuja977@gmail.com">
              <i className="fa fa-paper-plane"></i> kahuja977@gmail.com
            </a>
            <div className="my-2"></div>
            <p className="location">
              <i className="fa fa-map-pin"></i> Ulhasnagar, Mumbai, India
            </p>
          </div>
          <div className="actions flex justify-center">
            <a
              href="#"
              title="Image from freeiconspng.com"
              className="text-sm text-center items-center flex-col flex"
            >
              <img
                className={themeMode == "light" ? "invert-0" : "invert"}
                src="../../src/assets/images/resume.png"
                width="120"
                alt="Drawing Icon Resume"
              />
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
