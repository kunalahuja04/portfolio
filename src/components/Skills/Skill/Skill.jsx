import "../../../index.css";
/* eslint-disable react/prop-types */
function Skill({ imageUrl, classNames, width, themeMode }) {
  return (
    <>
      <div className="skil drop-shadow-xl">
        <div className="image">
          <img
            className={`p-1 rounded-2xl ${classNames} ${
              themeMode == "light" ? "bg-white" : "bg-[var(--clr-skill-bg)]"
            }`}
            width={width ?? "60"}
            src={imageUrl}
            alt="skil-logo"
          />
        </div>
      </div>
    </>
  );
}

export default Skill;
