import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  projects,
  leadership,
  skills,
  certifications,
  contact,
} from "./content";
import "./style.css";
import { useMotion } from "./useMotion";
const resume = `${import.meta.env.BASE_URL}assets/resume.pdf`;
function SectionHead({
  number,
  title,
  note,
}: {
  number: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-head">
      <p className="eyebrow">
        {number} / {title}
      </p>
      {note && <p>{note}</p>}
    </div>
  );
}
function Network() {
  return (
    <svg
      className="network"
      viewBox="0 0 460 420"
      role="img"
      aria-labelledby="network-title"
    >
      <title id="network-title">
        Schematic of connected particle trajectories, an illustration of
        investigating structure in data
      </title>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#d5d7d4" />
        </pattern>
      </defs>
      <rect width="460" height="420" fill="url(#dots)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <ellipse
            cx="230"
            cy="210"
            rx={55 + i * 33}
            ry={48 + i * 27}
            fill="none"
            stroke="#d3d6d3"
            strokeWidth=".7"
            transform={`rotate(-28 230 210)`}
          />
        </g>
      ))}
      {[0, 1, 2].map((n) => (
        <g key={n}>
          <path
            className="trajectory"
            pathLength="1"
            d={`M 35 ${350 - n * 25} Q ${150 + n * 10} ${70 + n * 65} 425 ${80 + n * 85}`}
            fill="none"
            stroke={n === 0 ? "#284dc4" : "#8e9cb7"}
            strokeWidth={n === 0 ? "2" : "1"}
          />
          {[0, 1, 2, 3, 4, 5].map((j) => (
            <circle
              key={j}
              cx={55 + j * 70}
              cy={
                (350 - n * 25) * (1 - j / 5) ** 2 +
                2 * (70 + n * 65) * (j / 5) * (1 - j / 5) +
                (80 + n * 85) * (j / 5) ** 2
              }
              r={n === 0 ? 4 : 2.5}
              fill={n === 0 ? "#284dc4" : "#8e9cb7"}
            />
          ))}
        </g>
      ))}
      <text x="22" y="26" className="svg-label">
        STRUCTURE / SIGNAL / SYSTEMS
      </text>
      <text x="22" y="399" className="svg-label">
        ILLUSTRATIVE TRAJECTORIES — NOT EXPERIMENT DATA
      </text>
    </svg>
  );
}
function App() {
  const [menu, setMenu] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  useMotion(motionPaused);
  const is404 = ![
    import.meta.env.BASE_URL,
    `${import.meta.env.BASE_URL}index.html`,
  ].includes(window.location.pathname);
  return (
    <>
      <div className="reading-progress" aria-hidden="true" />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <a
          className="wordmark"
          href={import.meta.env.BASE_URL}
          aria-label="Sheethal Enuganti home"
        >
          SE<span> / </span>Sheethal Enuganti
        </a>
        <button
          className="menu"
          aria-expanded={menu}
          aria-controls="navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "Close" : "Menu"}
        </button>
        <nav
          id="navigation"
          className={menu ? "open" : ""}
          aria-label="Main navigation"
        >
          {["About", "Research", "Projects", "Leadership", "Contact"].map(
            (x) => (
              <a
                key={x}
                href={`#${x.toLowerCase()}`}
                onClick={() => setMenu(false)}
              >
                {x}
              </a>
            ),
          )}
          <a className="nav-resume" href={resume} download>
            Résumé ↗
          </a>
        </nav>
      </header>
      <button
        className="motion-control"
        aria-pressed={motionPaused}
        onClick={() => setMotionPaused(!motionPaused)}
        aria-label={
          motionPaused ? "Enable decorative motion" : "Pause decorative motion"
        }
      >
        <span aria-hidden="true">{motionPaused ? "▶" : "Ⅱ"}</span> Motion{" "}
        {motionPaused ? "off" : "on"}
      </button>
      {is404 ? (
        <main id="main" className="not-found">
          <p className="eyebrow">404 / PAGE NOT FOUND</p>
          <h1>A different path.</h1>
          <p>This page isn’t here. The work is back on the homepage.</p>
          <a className="button" href={import.meta.env.BASE_URL}>
            Back to the portfolio ↗
          </a>
        </main>
      ) : (
        <main id="main">
          <section className="hero">
            <div className="hero-top">
              <p className="eyebrow">
                <span className="status-dot" /> SEEKING 2027 AI/ML RESEARCH
                INTERNSHIPS
              </p>
              <span className="location">Mumbai, India</span>
            </div>
            <div className="hero-grid">
              <div>
                <p className="intro">
                  AI/ML researcher & software engineer in the making
                </p>
                <h1>
                  I build, evaluate
                  <br />
                  and investigate
                  <br />
                  <em>intelligent systems.</em>
                </h1>
                <p className="hero-copy">
                  From LLM inference to scientific machine learning, I turn
                  questions into working systems—and evidence into a clearer
                  understanding of how they work.
                </p>
                <div className="actions">
                  <a className="button" href="#projects">
                    Explore the work <span>↘</span>
                  </a>
                  <a className="text-link" href={resume} download>
                    Download résumé ↗
                  </a>
                </div>
              </div>
              <div className="hero-art">
                <Network />
                <div className="art-caption">
                  <span>01 — THE PRACTICE</span>
                  <span>Build. Measure. Understand.</span>
                </div>
              </div>
            </div>
            <div className="hero-footer">
              <span>B.Tech CSE (AI/ML) · ATLAS SkillTech University</span>
              <span>2025—2029 expected</span>
              <a href="#about">SCROLL TO EXPLORE ↓</a>
            </div>
          </section>
          <section id="about">
            <SectionHead number="01" title="About" />
            <div className="about-grid">
              <h2>
                Curiosity, with
                <br />
                <em>a method.</em>
              </h2>
              <div>
                <p className="large-copy">
                  I’m Sheethal, an AI/ML student who cares as much about the
                  evaluation as the implementation.
                </p>
                <p>
                  My work spans LLM inference and optimisation, explainable
                  machine learning, data harmonisation and statistical
                  modelling. I’m interested in systems whose behaviour we can
                  investigate, whose results we can reproduce, and whose impact
                  we can question.
                </p>
                <p>
                  That means writing tests, documenting experiments and treating
                  limitations as useful findings. Responsible AI is part of that
                  practice.
                </p>
                <div className="about-facts">
                  <div>
                    <strong>
                      9.0<span>/10</span>
                    </strong>
                    <small>CGPA · ATLAS SkillTech</small>
                  </div>
                  <div>
                    <strong>Course topper</strong>
                    <small>Machine Learning Foundations</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="research">
            <SectionHead
              number="02"
              title="Research"
              note="Questions worth investigating."
            />
            <div className="research-grid">
              <article className="research-card">
                <p className="eyebrow">APPLIED ML / 2026–PRESENT</p>
                <h3>
                  Making fragmented data
                  <br />
                  speak the same language.
                </h3>
                <p className="project-sub">
                  Harmonised Data Crosswalk and Modelling Framework
                </p>
                <p>
                  Team lead under a university professor. Unified five Indian
                  household-energy sources with a team of three to build
                  reproducible modelling datasets.
                </p>
                <div
                  className="source-flow"
                  aria-label="Five data sources feed harmonisation, modelling and explanation"
                >
                  <span>
                    HCES · Census · IRES
                    <br />
                    Utility surveys · IMD
                  </span>
                  <b>↓</b>
                  <span>Harmonise → Benchmark → Explain</span>
                </div>
                <p>
                  Benchmarked XGBoost, LightGBM and CatBoost with Spearman
                  feature filtering on physics-informed synthetic data
                  calibrated to national statistics and BEE climate zones.
                  XGBoost ranked best on R² and RMSE across both datasets
                  evaluated.
                </p>
                <p>
                  SHAP identified air-conditioning ownership, cooling degree
                  days and structure age as leading energy-use drivers.
                </p>
                <span className="badge">
                  Manuscript in preparation · Application layer in development
                </span>
              </article>
              <article className="research-card">
                <p className="eyebrow">RESPONSIBLE GENAI / 2025</p>
                <h3>
                  Who gets to belong in
                  <br />a digital ecosystem?
                </h3>
                <p className="project-sub">
                  GenAI for Humanity: The Future of the Next Digital Ecosystem
                </p>
                <p>
                  Lead researcher. Developed the Digital Belonging Framework
                  through a systematic literature review of generative AI,
                  adaptive personalisation and ethical AI governance.
                </p>
                <div className="framework">
                  <div>
                    <strong>Participation Index</strong>
                    <span>Digital inclusion</span>
                  </div>
                  <div>
                    <strong>Capability Gain Metric</strong>
                    <span>Human agency</span>
                  </div>
                </div>
                <p>
                  Paper accepted for the Generative AI in the Built Environment
                  conference proceedings, Nottingham Trent University. Delivered
                  a 15-minute virtual research presentation.
                </p>
                <span className="badge">
                  Accepted for proceedings · Presented virtually
                </span>
              </article>
            </div>
          </section>
          <section id="projects">
            <SectionHead
              number="03"
              title="Selected engineering"
              note="Working systems. Measured trade-offs."
            />
            <div className="projects">
              {projects.map((p, i) => (
                <article className="project" key={p.title}>
                  <div className="project-number">0{i + 1}</div>
                  <div className="project-body">
                    <p className="eyebrow">
                      {p.category}{" "}
                      <span className="project-status">/ {p.status}</span>
                    </p>
                    <h3>{p.title}</h3>
                    <p className="project-sub">{p.subtitle}</p>
                    <p>{p.summary}</p>
                    <div className="tags">
                      {p.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <details>
                      <summary>
                        Read case study <span>+</span>
                      </summary>
                      <div className="case-study">
                        {p.details.map(([title, body]) => (
                          <div key={title}>
                            <h4>{title}</h4>
                            <p>{body}</p>
                          </div>
                        ))}
                        {p.url && (
                          <a
                            className="text-link"
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Source on GitHub ↗
                          </a>
                        )}
                      </div>
                    </details>
                  </div>
                  <div className="project-metric">
                    <strong>{p.metric}</strong>
                    <span>{p.label}</span>
                    {i === 0 && (
                      <div
                        className="memory-chart"
                        aria-label="FP32 498 megabytes; int8 243 megabytes"
                      >
                        <div>
                          <span>FP32</span>
                          <i />
                          <small>498 MB</small>
                        </div>
                        <div>
                          <span>INT8</span>
                          <i />
                          <small>243 MB</small>
                        </div>
                      </div>
                    )}
                    {i === 1 && (
                      <p className="metric-note">
                        10.06% candidate-edge recall
                        <br />
                        60 development events
                        <br />
                        Not reconstruction accuracy
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section id="leadership">
            <SectionHead number="04" title="Leadership & collaboration" />
            <div className="leadership-grid">
              <div>
                <h2>
                  Good work
                  <br />
                  is a <em>team effort.</em>
                </h2>
                <p>
                  Creating space for people to build, contribute and learn
                  together.
                </p>
              </div>
              <div className="timeline">
                {leadership.map(([date, role, org, body]) => (
                  <article key={org}>
                    <p className="eyebrow">{date}</p>
                    <h3>{role}</h3>
                    <p className="org">{org}</p>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section id="experience">
            <SectionHead
              number="05"
              title="Professional simulations"
              note="Virtual learning programs, not employment."
            />
            <div className="simulation-grid">
              {[
                [
                  "J.P. Morgan",
                  "Quantitative Research · Jan 2026",
                  "Modelled 48 months of natural-gas prices; built a storage-contract pricing prototype, probability-of-default models and a FICO risk-bucketing map.",
                ],
                [
                  "Deloitte",
                  "Data Analytics · Oct 2026",
                  "Designed interactive Tableau dashboards and used Excel to classify data and communicate quantitative conclusions.",
                ],
                [
                  "Tata iQ",
                  "GenAI-Powered Data Analytics",
                  "Used GenAI-assisted EDA to assess data quality and risk; proposed a delinquency-risk modelling framework and an ethical AI-driven collections strategy.",
                ],
              ].map(([name, role, body]) => (
                <article key={name}>
                  <h3>{name}</h3>
                  <p className="project-sub">{role}</p>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>
          <section id="skills">
            <SectionHead number="06" title="Toolkit & methods" />
            <div className="skills-grid">
              {skills.map(([title, tools, note]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{tools}</p>
                  <small>{note}</small>
                </article>
              ))}
            </div>
            <div className="learning">
              <p className="eyebrow">CURRENTLY LEARNING</p>
              <p>
                Docker · Retrieval-augmented generation (RAG) · Embeddings ·
                LangChain
              </p>
            </div>
          </section>
          <section id="education">
            <SectionHead number="07" title="Education & continued learning" />
            <div className="education">
              <h2>
                ATLAS SkillTech
                <br />
                <em>University.</em>
              </h2>
              <div>
                <p className="eyebrow">MUMBAI / 2025–2029 EXPECTED</p>
                <h3>B.Tech, Computer Science and Engineering</h3>
                <p>
                  Artificial Intelligence and Machine Learning · CGPA 9.0/10
                </p>
                <p>Overall course topper in Machine Learning Foundations.</p>
                <p className="coursework">
                  Coursework: Data Structures and Algorithms, Linear Algebra,
                  Statistics and Probability, Statistical Modelling, Calculus
                  I–II, Mathematics for Computer Science, Computer Organisation
                  and Architecture, Databases/SQL and NoSQL.
                </p>
              </div>
            </div>
            <h3 className="cert-title">
              Certifications & learning credentials
            </h3>
            <div className="certifications">
              {certifications.map(([name, body]) => (
                <article key={name}>
                  <h4>{name}</h4>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>
          <section id="contact" className="contact">
            <p className="eyebrow">08 / WHAT’S NEXT</p>
            <h2>
              Let’s turn a good question
              <br />
              into <em>something real.</em>
            </h2>
            <p>
              Seeking 2027 opportunities in AI/ML research and software
              engineering.
            </p>
            <a className="email" href={`mailto:${contact.email}`}>
              {contact.email} ↗
            </a>
            <div className="contact-links">
              <a href={contact.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={resume} download>
                Download résumé ↓
              </a>
              <span>Mumbai, India</span>
            </div>
          </section>
        </main>
      )}
      <footer>
        <span>© {new Date().getFullYear()} Sheethal Enuganti</span>
        <span>Built with curiosity. Backed by evidence.</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
