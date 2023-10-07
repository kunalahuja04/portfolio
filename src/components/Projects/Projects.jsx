import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container pb-8" id="projects">
      <div className="title pt-4">
        <p className="text-2xl font-bold projects inline">Projects </p>
        {"  "} <span className="text-5xl">💼</span>
      </div>
      <div className="about bg-[var(--clr-bg-info)] rounded-2xl p-4 text-justify mx-2 mt-4">
        <p className="text-xl">
          Please note that a significant portion of my project contributions
          resides in <b>private repositories</b> due to confidentiality or
          proprietary reasons. While I {"can't"} provide direct access to the
          code, {"I'm"} happy to share screenshots and provide descriptions of
          the work {"I've"} done. If available, I can also share{" "}
          <b>app/website</b> links for publicly accessible projects to give you
          a glimpse of my development expertise.
        </p>
        <br />
        <p className="text-xl">
          Apart from that, I created this portfolio using <b>React.js</b> as part of my
          journey to deepen my understanding of the Library. It served as both
          a practical project and a valuable <b>learning experience</b>, allowing me to
          apply <b>React.js</b> <b>concepts</b> and <b>best practices</b> while crafting a platform
          to showcase my skills and accomplishments.
        </p>
        <br/>
        <p className="text-xl">More Projects are underway as I am learning <b>React.js</b></p>
      </div>
    </div>
  );
}

export default Projects;
