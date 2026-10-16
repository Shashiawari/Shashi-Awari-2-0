"use client";

import React, { useState } from "react";
import "./SkillsHoneycomb.css";

export const skillGroups = [
  {
    title: "Full Stack Development",
    rowPattern: [5, 6],
    areas: [
      ["Programming Languages", ["Python", "JavaScript", "SQL", "C", "Java"]],
      ["Frontend Development", ["React", "Next.js", "HTML", "CSS"]],
      ["Backend Development", ["FastAPI", "Node.js", "Express.js", "REST APIs"]],
      ["Databases", ["PostgreSQL", "MongoDB", "Supabase"]],
    ],
  },
  {
    title: "AI & Machine Learning",
    areas: [
      ["ML Frameworks", ["PyTorch", "TensorFlow/Keras", "scikit-learn", "XGBoost", "Hugging Face Transformers"]],
      ["Deep Learning", ["Neural Networks", "CNNs", "Transformer Architectures", "Transfer Learning", "Model Fine-Tuning"]],
      ["LLMs & RAG", ["LLM Integration", "Retrieval-Augmented Generation (RAG)", "Text Embeddings", "Semantic Search"]],
    ],
  },
];

const layoutPatterns = [
  { name: "desktop", pattern: [6, 5] },
];

const createSkillRows = (items, pattern) => {
  const rows = [];
  let offset = 0;
  while (offset < items.length) {
    const size = pattern[rows.length % pattern.length];
    let end = Math.min(offset + size, items.length);
    for (let index = offset + 1; index < end; index += 1) {
      if (items[index].highlighted && items[index].area === "Databases") {
        end = index;
        break;
      }
    }
    rows.push(items.slice(offset, end));
    offset = end;
  }
  return rows;
};

function SkillsHoneycombLayout({ group, layoutName, pattern }) {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [focusedArea, setFocusedArea] = useState(null);
  const activeArea = hoveredArea ?? focusedArea;
  const cells = group.areas.flatMap(([area, items]) => [
    { label: area, area, highlighted: true, flowIndex: 0, flowCount: items.length + 1 },
    ...items.map((label, index) => ({ label, area, highlighted: false, flowIndex: index + 1, flowCount: items.length + 1 })),
  ]);
  const rows = createSkillRows(cells, group.rowPattern ?? pattern);
  return (
    <div className={`skillsHoneycombLayout skillsHoneycombLayout--${layoutName}`}>
      <div className="skillsHoneycomb" role="list" aria-label={`${group.title} skills`}
        onPointerLeave={() => setHoveredArea(null)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocusedArea(null);
        }}
      >
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="skillsHoneycombRow">
            {row.map((skill) => (
              <div
                key={`${skill.area}-${skill.label}`}
                className={`skillsHex${skill.highlighted ? " skillsHex--highlighted" : ""}${activeArea === skill.area ? " skillsHex--active" : ""}`}
                role="listitem"
                tabIndex={0}
                aria-label={`${skill.label}: ${skill.area}`}
                style={{ "--flow-index": skill.flowIndex, "--flow-count": skill.flowCount }}
                onPointerEnter={(event) => {
                  if (event.pointerType !== "touch") setHoveredArea(skill.area);
                }}
                onFocus={() => setFocusedArea(skill.area)}
              >
                <div className="skillsHexInner"><span>{skill.label}</span></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsHoneycomb() {
  return (
    <div className="skillsGroups">
      {skillGroups.map((group) => (
        <section className="skillsGroup" key={group.title} aria-label={group.title}>
          <h3 className="skillsGroupTitle">{group.title}</h3>
          <div className="skillsHoneycombViewport">
            {layoutPatterns.map((layout) => (
              <SkillsHoneycombLayout key={layout.name} group={group} layoutName={layout.name} pattern={layout.pattern} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
