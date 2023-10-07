import "./About.css";
import "../../index.css";
// eslint-disable-next-line react/prop-types
function About({ refs, themeMode }) {
  return (
    <>
      <div ref={refs} className="about-container px-2 mt-4" id="about">
        <div className="title pt-4">
          <p className="text-2xl about-me inline">About Me </p>{" "}
          <span className="text-5xl">👨🏻‍💻</span>
        </div>
        <div className="about bg-[var(--clr-bg-info)] rounded-2xl p-4 text-justify mt-4">
          <p>
            I am <span className="font-bold">Kunal Ahuja</span>, A Computer
            Engineering Graduate based out of{" "}
            <span className="font-bold">Mumbai, India</span>.
            <span className="font-bold"> Self-taught</span> developer with a
            passion for <span className="font-bold">learning</span> and creating{" "}
            new things. I am currently working as a{" "}
            <span className="font-bold">
              Software Development Engineer II.{" "}
            </span>
          </p>
          <br />
          <p>
            I have worked on various technologies and projects ranging from{" "}
            <span className="font-bold">Web Development</span> to{" "}
            <span className="font-bold">Mobile App Development</span> using{" "}
            <span className="font-bold">MEAN stack</span> and{" "}
            <span className="font-bold">Flutter</span>. {"I'm"} also a{" "}
            <span className="font-bold">React</span> enthusiast in the making.
          </p>
          <br />
          <p>
            Apart from that, I am also a active
            <span className="font-bold">
              {" "}
              Indian Stock markets trader/investor
            </span>{" "}
            helping my friends and family to make money out of their
            investments. I like to analyse the charts using{" "}
            <span className="font-bold">
              various chart patterns and indicators{" "}
            </span>
            available. and some of financial analysis too.
          </p>
          <br />
          <p>
            Feel free to reach out to me for anything, whether {"it's"} related to {" "}
            <span className="font-bold">investments or app development</span>. You can get in touch by sending an
            email or messaging me on my mentioned social handles{" "}
            <span className="font-bold">
              I am always open to new ideas and challenges
            </span>
            .
          </p>
          <div className="mt-10">
            <div className="flex flex-row justify-around my-4">
              <a
                className="social-link"
                href="https://www.linkedin.com/in/kunal-ahuja-855507158/"
              >
                <img
                  src="../src/assets/svgs/social/linkedin.svg"
                  height="45"
                  width="45"
                  alt="LinkedIN"
                  className={
                    themeMode == "light" ? "invert-0 p-1" : "invert p-1"
                  }
                />
              </a>
              <a
                className="social-link"
                href="http://www.github.com/kunalahuja04"
              >
                <img
                  src="../src/assets/svgs/social/github.svg"
                  height="40"
                  width="40"
                  alt="GitHub"
                  className={themeMode == "light" ? "invert-0" : "invert"}
                />
              </a>
              <a
                className="social-link"
                href="http://www.twitter.com/kunal_ahuja_"
              >
                <img
                  src="../src/assets/svgs/social/twitter.svg"
                  height="40"
                  width="40"
                  alt="Twitter"
                  className={themeMode == "light" ? "invert-0" : "invert"}
                />
              </a>
              <a
                className="social-link"
                href="https://www.facebook.com/nbkunal/"
              >
                <img
                  src="../src/assets/svgs/social/facebook.svg"
                  height="40"
                  width="40"
                  alt="Twitter"
                  className={themeMode == "light" ? "invert-0" : "invert"}
                />
              </a>
              <a
                className="social-link"
                href="http://www.instagram.com/koonall"
              >
                <img
                  src="../src/assets/svgs/social/instagram.svg"
                  height="40"
                  width="40"
                  alt="Twitter"
                  className={themeMode == "light" ? "invert-0" : "invert"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
