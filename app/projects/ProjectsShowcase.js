"use client";

import React, { useEffect, useId, useState, useMemo } from "react";
import Link from "next/link";
import { projects as rawProjects } from "./projectsData";
import { useLanguage } from "@/components/lib/LanguageContext";
import { translations } from "@/data/de";

// Map project titles to translation keys
const projectKeyMap = {
  "FindH": "findh",
  "Second Brain AI": "secondBrain",
  "Defungi CNN": "defungi",
  "Detect GPT": "detectGpt",
  "GenAI": "genai",
  "Chit-Chat": "chitChat",
  "JapEase": "japease",
  "SnapGen": "snapgen",
  "NexGen": "nexgen",
  "Next Level Food": "nextLevelFood",
  "Micro Course Converter": "microCourse"
};

// Get translated project data
const getTranslatedProject = (project, isGerman) => {
  if (!isGerman) return project;
  
  const key = projectKeyMap[project.title];
  if (!key) return project;
  
  const trans = translations.projectData?.[key];
  if (!trans) return project;
  
  // Return translated project with German description
  return {
    ...project,
    description: trans.description || project.description,
    technologies: trans.technologies || project.technologies,
    eyebrow: trans.eyebrow || project.eyebrow,
  };
};

// Get translated case study content for FindH
const getFindhCaseStudyContent = () => {
  const t = translations.projectData.findh.caseStudy;
  return [
    {
      type: "intro",
      paragraphs: t.intro.paragraphs
    },
    {
      title: t.problemTitle,
      paragraphs: [t.problemParagraph],
      list: t.problemList,
      footer: t.problemFooter
    },
    {
      title: t.coreIdeaTitle,
      paragraphs: [t.coreIdeaParagraph],
      list: t.coreIdeaList,
      footer: [t.coreIdeaFooter]
    },
    {
      title: t.workflowTitle,
      paragraphs: [t.workflowParagraph],
      list: t.workflowList,
      footer: [t.workflowFooter]
    },
    {
      title: t.featuresTitle,
      subsections: [
        {
          title: t.propertyListings.title,
          paragraphs: [t.propertyListings.paragraph],
          list: t.propertyListings.list,
          footer: [t.propertyListings.footer]
        },
        {
          title: t.agentDiscovery.title,
          paragraphs: t.agentDiscovery.paragraphs,
          list: t.agentDiscovery.list
        },
        {
          title: t.agentVerification.title,
          paragraphs: [t.agentVerification.paragraph],
          list: t.agentVerification.list,
          footer: [t.agentVerification.footer]
        },
        {
          title: t.adminDashboard.title,
          paragraphs: t.adminDashboard.paragraphs,
          list: t.adminDashboard.list,
          footer: [t.adminDashboard.footer]
        },
        {
          title: t.privateReports.title,
          paragraphs: [t.privateReports.paragraph],
          list: t.privateReports.list,
          footer: [t.privateReports.footer]
        },
        {
          title: t.bookingSystem.title,
          paragraphs: [t.bookingSystem.paragraph],
          list: t.bookingSystem.list,
          footer: [t.bookingSystem.footer]
        }
      ]
    },
    {
      title: t.technicalTitle,
      paragraphs: [t.technicalParagraph],
      subsections: [
        {
          title: t.frontend.title,
          paragraphs: t.frontend.paragraphs,
          list: t.frontend.list,
          footer: [t.frontend.footer]
        },
        {
          title: t.backend.title,
          paragraphs: t.backend.paragraphs,
          list: t.backend.list,
          footer: [t.backend.footer]
        },
        {
          title: t.database.title,
          paragraphs: t.database.paragraphs,
          list: t.database.list,
          footer: [t.database.footer]
        },
        {
          title: t.fileStorage.title,
          paragraphs: t.fileStorage.paragraphs,
          list: t.fileStorage.list,
          footer: [t.fileStorage.footer]
        }
      ]
    },
    {
      title: t.securityTitle,
      paragraphs: [t.securityParagraph],
      list: t.securityList,
      footer: [t.securityFooter]
    },
    {
      title: t.uniqueTitle,
      paragraphs: t.uniqueParagraphs,
      list: t.uniqueList,
      footer: [t.uniqueFooter]
    }
  ];
};

// Get translated case study content for Second Brain AI
const getSecondBrainCaseStudyContent = () => {
  const t = translations.projectData.secondBrain.caseStudy;
  return [
    {
      type: "intro",
      paragraphs: t.intro.paragraphs
    },
    {
      title: t.problemTitle,
      paragraphs: [t.problemParagraph],
      list: t.problemList,
      footer: t.problemFooter
    },
    {
      title: t.coreIdeaTitle,
      paragraphs: [t.coreIdeaParagraph],
      list: t.coreIdeaList,
      footer: [t.coreIdeaFooter]
    },
    {
      title: t.workflowTitle,
      paragraphs: [t.workflowParagraph],
      list: t.workflowList,
      footer: [t.workflowFooter]
    },
    {
      title: t.featuresTitle,
      subsections: [
        {
          title: t.knowledgeBase.title,
          paragraphs: [t.knowledgeBase.paragraph],
          list: t.knowledgeBase.list,
          footer: [t.knowledgeBase.footer]
        },
        {
          title: t.chatSystem.title,
          paragraphs: [t.chatSystem.paragraph],
          list: t.chatSystem.list
        },
        {
          title: t.documentChat.title,
          paragraphs: [t.documentChat.paragraph],
          list: t.documentChat.list
        },
        {
          title: t.multiProvider.title,
          paragraphs: [t.multiProvider.paragraph],
          list: t.multiProvider.list,
          footer: [t.multiProvider.footer]
        },
        {
          title: t.contextPreservation.title,
          paragraphs: [t.contextPreservation.paragraph],
          list: t.contextPreservation.list,
          footer: [t.contextPreservation.footer]
        }
      ]
    },
    {
      title: t.technicalTitle,
      paragraphs: [t.technicalParagraph],
      subsections: [
        {
          title: t.frontend.title,
          paragraphs: [t.frontend.paragraph],
          list: t.frontend.list
        },
        {
          title: t.backend.title,
          paragraphs: [t.backend.paragraph],
          list: t.backend.list
        },
        {
          title: t.databaseStorage.title,
          paragraphs: [t.databaseStorage.paragraph],
          list: t.databaseStorage.list
        },
        {
          title: t.aiRetrieval.title,
          paragraphs: [t.aiRetrieval.paragraph],
          list: t.aiRetrieval.list
        }
      ]
    },
    {
      title: t.securityTitle,
      paragraphs: [t.securityParagraph],
      list: t.securityList
    },
    {
      title: t.uniqueTitle,
      paragraphs: [t.uniqueParagraph],
      list: t.uniqueList,
      footer: [t.uniqueFooter]
    }
  ];
};

// Get translated case study for a project
const getTranslatedCaseStudy = (project, isGerman) => {
  if (!isGerman || !project.caseStudy) return project.caseStudy;
  
  if (project.title === "FindH") {
    return {
      ...project.caseStudy,
      content: getFindhCaseStudyContent()
    };
  }
  
  if (project.title === "Second Brain AI") {
    return {
      ...project.caseStudy,
      content: getSecondBrainCaseStudyContent()
    };
  }
  
  return project.caseStudy;
};

const ArrowIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
);

const isImageFile = (src) => /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(src || "");

const stopEvent = (event) => {
  event.stopPropagation();
};

const ProjectMedia = ({ project, eager = false }) => {
  if (isImageFile(project.mediaSrc)) {
    return (
      <img
        src={project.mediaSrc}
        alt={project.title}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return (
    <video
      src={project.mediaSrc}
      muted
      autoPlay
      loop
      playsInline
      preload={eager ? "auto" : "metadata"}
      aria-label={project.title}
    ></video>
  );
};

const ProjectCard = ({ project, index, onOpenCaseStudy, t }) => {
  const number = String(index + 1).padStart(2, "0");
  const isFeatured = Boolean(project.featured);
  const isInteractive = Boolean(project.caseStudy);

  const openCaseStudy = () => {
    if (isInteractive) {
      onOpenCaseStudy(project);
    }
  };

  const handleKeyDown = (event) => {
    if (!isInteractive) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCaseStudy();
    }
  };

  return (
    <article
      className={[
        "projectCard",
        isFeatured ? "projectCardFeatured" : "",
        isInteractive ? "projectCardInteractive" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--card-index": index }}
      onClick={isInteractive ? openCaseStudy : undefined}
      onKeyDown={handleKeyDown}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isInteractive ? `Open ${project.title} case study` : undefined}
    >
      <div className="projectCardMedia">
        <span className="projectCardNumber">{number}</span>
        {isFeatured ? <span className="projectCardBadge">{t("projectsPage.complexBuild", "Complex Build")}</span> : null}
        <ProjectMedia project={project} eager={isFeatured} />
      </div>

      <div className="projectCardBody">
        <p className="projectCardKicker">{project.eyebrow ?? t("projectsPage.featuredProject", "Featured Project")}</p>
        <h3>{project.title}</h3>
        <p className="projectCardTech">{t("projectsPage.techUsed", "Technologies Used")}: {project.technologies}</p>
        <p className="projectCardDescription">{project.description}</p>

        {project.highlights?.length ? (
          <ul className="projectCardHighlights" aria-label={`${project.title} highlights`}>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        <div className="projectCardActions">
          {isInteractive ? (
            <>
              <button
                type="button"
                className="animated-button projectCardButton projectCardButtonGhost"
                onClick={(event) => {
                  stopEvent(event);
                  openCaseStudy();
                }}
              >
                <ArrowIcon className="arr-2" />
                <span className="text">{t("projectsPage.caseStudy", "Case Study")}</span>
                <span className="circle"></span>
                <ArrowIcon className="arr-1" />
              </button>

              <Link
                href={project.href}
                className="animated-button projectCardButton"
                target="_blank"
                rel="noreferrer"
                onClick={stopEvent}
              >
                <ArrowIcon className="arr-2" />
                <span className="text">{t("projectsPage.liveSite", "Live Site")}</span>
                <span className="circle"></span>
                <ArrowIcon className="arr-1" />
              </Link>
            </>
          ) : (
            <Link
              href={project.href}
              className="animated-button projectCardButton"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowIcon className="arr-2" />
              <span className="text">{t("projectsPage.liveSite", "Live Site")}</span>
              <span className="circle"></span>
              <ArrowIcon className="arr-1" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const ProjectCaseStudyModal = ({ project, onClose, t }) => {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!project?.caseStudy) {
    return null;
  }

  const { caseStudy } = project;

  return (
    <div className="projectModal" role="presentation" onClick={onClose}>
      <div className="projectModalBackdrop"></div>

      <div
        className="projectModalPanel projectCaseSheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="projectModalClose"
          onClick={onClose}
          aria-label="Close case study"
        >
          <span></span>
          <span></span>
        </button>

        <div className="projectCaseHeader">
          <div className="projectCaseMeta">
            <p className="projectModalEyebrow">{project.eyebrow}</p>
            <div className="projectCaseTitleRow">
              <h2 id={titleId}>{project.title}</h2>
              <span className="projectCaseStatus">{t("projectsPage.complexBuild", "Complex Build")}</span>
            </div>
            <p id={descriptionId} className="projectModalLead">
              {caseStudy.summary}
            </p>
            <p className="projectModalOverview">{caseStudy.overview}</p>

            <div className="projectModalActions">
              <Link
                href={project.href}
                className="animated-button projectCardButton"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowIcon className="arr-2" />
                <span className="text">{t("projectsPage.liveSite", "Live Site")}</span>
                <span className="circle"></span>
                <ArrowIcon className="arr-1" />
              </Link>

              <button type="button" className="projectModalSecondaryButton" onClick={onClose}>
                {t("projectsPage.close", "Close")}
              </button>
            </div>
          </div>

          <div className="projectModalMediaFrame">
            <span className="projectModalTag">{t("projectsPage.featuredFullStack", "Featured Full-Stack Project")}</span>
            <ProjectMedia project={project} eager />
          </div>
        </div>

        <div className="projectCaseBody" style={{ marginTop: "2.5rem" }}>
          {caseStudy.content?.map((section, idx) => (
            <section key={idx} className="projectCaseSection">
              {section.title && (
                <div className="projectCaseSectionHeader">
                  <p className="projectDetailLabel">{String(idx).padStart(2, "0")}</p>
                  <h3>{section.title}</h3>
                </div>
              )}

              {section.paragraphs?.map((p, pIdx) => (
                <p key={pIdx} className={section.type === "intro" ? "projectModalLead" : ""}>
                  {p}
                </p>
              ))}

              {section.list?.length > 0 && (
                <ul className="projectBulletList">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}

              {section.subsections?.length > 0 && (
                <div className="projectFeatureList" style={{ marginTop: "1.5rem" }}>
                  {section.subsections.map((sub, sIdx) => (
                    <article key={sIdx} className="projectFeatureItem">
                      <h4>{sub.title}</h4>
                      {sub.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx} style={{ marginBottom: "0.5rem" }}>{p}</p>
                      ))}
                      {sub.list?.length > 0 && (
                        <ul className="projectBulletList" style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                          {sub.list.map((item, lIdx) => (
                            <li key={lIdx}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {sub.footer?.map((p, pIdx) => (
                        <p key={pIdx} style={{ marginTop: "0.8rem", color: "rgba(255,255,255,0.6)" }}>{p}</p>
                      ))}
                    </article>
                  ))}
                </div>
              )}

              {section.footer?.map((p, pIdx) => (
                <p key={pIdx} style={{ marginTop: "1.2rem", color: "rgba(255,255,255,0.7)" }}>
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t, isGerman } = useLanguage();

  // Translate projects based on current language
  const projects = useMemo(() => {
    return rawProjects.map(project => getTranslatedProject(project, isGerman));
  }, [isGerman]);

  // When opening case study, translate its content too
  const handleOpenCaseStudy = (project) => {
    const translatedCaseStudy = getTranslatedCaseStudy(project, isGerman);
    setSelectedProject({
      ...project,
      caseStudy: translatedCaseStudy
    });
  };

  return (
    <>
      <section className="projectGridSection">
        <div className="container projectGridContainer">
          <div className="projectGridIntro">
            <div>
              <p className="projectGridEyebrow">{t("projectsPage.selectedWork", "Selected Work")}</p>
              <h1>{t("projects.title", "Projects")}</h1>
              <p className="projectGridLead">{t("projectsPage.visitThem", "Make sure to view and visit them.")}</p>
            </div>

            <div className="projectGridStat">
              <span>{String(projects.length).padStart(2, "0")}</span>
              <p>{t("projectsPage.projectsAndCounting", "Projects and counting")}</p>
            </div>
          </div>

          <div className="projectCardsGrid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpenCaseStudy={handleOpenCaseStudy}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectCaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} t={t} />
    </>
  );
};

export default ProjectsShowcase;
