import React from "react";
import "./SkillsHoneycomb.css";

// Edit this one list to add, remove, or rename skills.
const skills = [
  "C",
  "PYTHON",
  "JAVA",
  "MACHINE LEARNING",
  "DEEP LEARNING",
  "HTML",
  "CSS",
  "JAVA SCRIPT",
  "JQUERY",
  "EJS",
  "NODE JS",
  "REACT JS",
  "NEXT JS",
  "MYSQL",
  "MONGO DB",
  "POSTGRE SQL",
  "NOSQL",
];

const layoutPatterns = [
  { name: "desktop", pattern: [6, 5] },
  { name: "laptop", pattern: [5, 4] },
  { name: "tablet", pattern: [4, 3] },
  { name: "mobile", pattern: [3, 2] },
];

const createSkillRows = (items, pattern) => {
  const rows = [];
  let index = 0;
  let patternIndex = 0;

  while (index < items.length) {
    const rowSize = pattern[patternIndex % pattern.length];

    const rowItems = items.slice(index, index + rowSize);
    rows.push(rowItems);

    index += rowSize;
    patternIndex++;
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
            className={`skillsHoneycombRow ${pattern[rowIndex % pattern.length] !== pattern[0]
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
                  className="skillsHex"
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
