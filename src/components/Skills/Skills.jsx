import Skill from "./Skill/Skill";
import "./Skills.css";

// eslint-disable-next-line react/prop-types
function Skills({ themeMode }) {
  return (
    <>
      <div className="skills-container px-2 mt-4" id="skills">
        <div className="title pt-4">
          <p className="text-2xl font-bold skills inline">Skills </p>
          {"  "} <span className="text-5xl">🪄</span>
        </div>
        <div className="bg-[var(--clr-bg-info)] rounded-2xl p-4 mt-4">
          <p className="font-bold text-3xl">{"I'm"} acquainted with</p>
          <p className="font-bold text-xl mt-8 uppercase mb-4">Languages</p>
          <div className="flex gap-6">
            <Skill
              themeMode={themeMode}
              classNames={"!p-2"}
              imageUrl="/portfolio/assets/svgs/skills/typescript.svg"
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/js.svg"
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/dart.svg"
            />
          </div>
          <p className="font-bold text-xl mt-4 uppercase mb-4">Frameworks</p>
          <div className="flex gap-4">
            <Skill
              themeMode={themeMode}
              classNames={"py-4 px-3"}
              imageUrl="/portfolio/assets/svgs/skills/angular-logo.png"
              width="120"
            />
            <Skill
              themeMode={themeMode}
              classNames={"py-1 px-3"}
              width="120"
              imageUrl="/portfolio/assets/svgs/skills/flutter.svg"
            />
          </div>
          <p className="font-bold text-xl mt-4 uppercase mb-4">
            Web Development
          </p>
          <div className="flex gap-4 flex-wrap">
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/reactjs.svg"
              width="120"
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/html.svg"
              width="60"
            />
            <Skill
              themeMode={themeMode}
              width="60"
              imageUrl="/portfolio/assets/svgs/skills/css.svg"
            />
            <Skill
              themeMode={themeMode}
              width="60"
              imageUrl="/portfolio/assets/svgs/skills/jquery.svg"
            />
            <Skill
              themeMode={themeMode}
              width="60"
              imageUrl="/portfolio/assets/svgs/skills/bootstrap.svg"
            />
            <Skill
              themeMode={themeMode}
              width="60"
              imageUrl="/portfolio/assets/svgs/skills/sass.svg"
            />
          </div>
          <p className="font-bold text-xl mt-4 uppercase mb-4">Backend</p>
          <div className="flex gap-6">
            <Skill
              themeMode={themeMode}
              classNames={`px-2 py-2 scale-125`}
              imageUrl="/portfolio/assets/svgs/skills/node.svg"
            />
            <Skill
              themeMode={themeMode}
              classNames={"py-2 px-2"}
              width="120"
              imageUrl="/portfolio/assets/svgs/skills/express.svg"
            />
          </div>
          <p className="font-bold text-xl mt-4 uppercase mb-4">Database</p>
          <div className="flex gap-4">
            <Skill
              themeMode={themeMode}
              width="120"
              imageUrl="/portfolio/assets/svgs/skills/mongo.svg"
            />
            <Skill
              themeMode={themeMode}
              classNames="p-2"
              imageUrl="/portfolio/assets/svgs/skills/mysql.svg"
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/firebase.svg"
            />
          </div>
          <p className="font-bold text-xl mt-4 uppercase mb-4">Cloud</p>
          <div className="flex gap-4">
            <Skill
              themeMode={themeMode}
              classNames="p-2"
              imageUrl="/portfolio/assets/svgs/skills/aws.svg"
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/gcloud.svg"
            />
          </div>
          <p className="font-bold text-xl mt-4 uppercase mb-4">vcs</p>
          <div className="flex gap-4">
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/git.svg"
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/social/github.svg"
            />
            <Skill
              themeMode={themeMode}
              classNames={"py-6 px-2"}
              width="120"
              imageUrl="/portfolio/assets/svgs/skills/bitbucket-official.svg"
            />
          </div>
          <p className="font-bold text-xl mt-4 uppercase mb-4">others</p>
          <div className="flex gap-4 flex-wrap">
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/linux.svg"
              classNames={"p-2"}
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/postman.svg"
              classNames="p-2"
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/figma.svg"
              classNames={"p-2"}
              width="45"
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/android_studio.svg"
              width="120"
              classNames="p-2"
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/vscode.svg"
              classNames={"p-2"}
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/intellij.svg"
              classNames={"p-2"}
            />
            <Skill
              themeMode={themeMode}
              imageUrl="/portfolio/assets/svgs/skills/tradingview-logo.svg"
              width="100"
              classNames={"scale-120 px-4 py-0"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
