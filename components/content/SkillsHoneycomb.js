import React from "react";
import "./SkillsHoneycomb.css";

const highlightedSkills = new Set(["FRONT END", "BACK END", "ML", "DL"]);

// Edit this one list to add, remove, or rename skills.
const skills = [
  "FRONT END",
  "HTML",
  "CSS",
  "JAVA SCRIPT",
  "REACT JS",
  "NEXT JS",
  "BOOTSTRAP",
  "GSAP",
  "FRAMER MOTION",
  "JQUERY",
  "EJS",
  "BACK END",
  "NODE JS",
  "EXPRESS JS",
  "FASTAPI",
  "SOCKET.IO",
  "SUPABASE",
  "POSTGRE SQL",
  "MONGO DB",
  "NOSQL",
  "MYSQL",
  "SQLITE",
  "ML",
  "PYTHON",
  "MACHINE LEARNING",
  "NLP",
  "TENSORFLOW",
  "DL",
  "DEEP LEARNING",
  "CNN",
  "JAVA",
  "C",
];

const layoutPatterns = [
  { name: "desktop", pattern: [6, 5] },
  { name: "laptop", pattern: [5, 4] },
  { name: "tablet", pattern: [4, 3] },
  { name: "mobile", pattern: [3, 2] },
];

const createSkillRows = (items, pattern) => {
  const rows = [];
  let currentRow = [];
  let patternIndex = 0;

  items.forEach((skill) => {
    const rowSize = pattern[patternIndex % pattern.length];
    const shouldStartNewRow = highlightedSkills.has(skill) && currentRow.length > 0;

    if (shouldStartNewRow) {
      rows.push(currentRow);
      currentRow = [];
      patternIndex++;
    }

    currentRow.push(skill);

    if (currentRow.length === rowSize) {
      rows.push(currentRow);
      currentRow = [];
      patternIndex++;
    }
  });

  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return rows;
};

const SkillsHoneycombLayout = ({ items, layoutName, pattern }) => {
  const rows = createSkillRows(items, pattern);
  let skillIndex = 0;

  return (
    <div className={`skillsHoneycombLayout skillsHoneycombLayout--${layoutName}`}>
      <div className="skillsHoneycomb" role="list" aria-label="Technical skills">
        {rows.map((row, rowIndex) => (
          <div
            key={`${layoutName}-row-${rowIndex}`}
            className={`skillsHoneycombRow ${highlightedSkills.has(row[0]) ? "skillsHoneycombRow--sectionStart" : ""
              } ${pattern[rowIndex % pattern.length] !== pattern[0]
                ? "skillsHoneycombRow--offset"
                : ""
              }`}
            style={{ "--row-index": rowIndex }}
          >
            {row.map((skill) => {
              const currentSkillIndex = skillIndex;
              skillIndex += 1;

              return (
                <div
                  key={`${layoutName}-${rowIndex}-${skill}`}
                  className={`skillsHex${highlightedSkills.has(skill) ? " skillsHex--highlighted" : ""}`}
                  role="listitem"
                  style={{ "--skill-index": currentSkillIndex }}
                >
                  <div className="skillsHexInner">
                    <span>{skill}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsHoneycomb = ({ items = skills }) => {
  return (
    <div className="skillsHoneycombViewport">
      {layoutPatterns.map((layout) => (
        <SkillsHoneycombLayout
          key={layout.name}
          items={items}
          layoutName={layout.name}
          pattern={layout.pattern}
        />
      ))}
    </div>
  );
};

export default SkillsHoneycomb;
