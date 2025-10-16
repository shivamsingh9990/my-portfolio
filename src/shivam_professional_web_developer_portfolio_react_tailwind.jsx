import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Briefcase,
  Code,
  ExternalLink,
  Star,
  Globe,
  Sparkles,
  Download,
  Send,
} from "lucide-react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import Header from "./components/Header";

// ---------------- DATA ----------------
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const skills = [
  { name: "HTML5", level: 95, logo: "/logo/html.svg" },
  { name: "Postman", level: 92, logo: "/logo/postman.svg" },
  { name: "JavaScript", level: 90, logo: "/logo/js.svg" },
  { name: "React", level: 88, logo: "/logo/re.svg" },
  { name: "Next.js", level: 80, logo: "/logo/next.svg" },
  { name: "TypeScript", level: 76, logo: "/logo/ts.svg" },
  { name: "Node.js", level: 70, logo: "/logo/node.svg" },
];

const radarData = [
  { subject: "Frontend", A: 95 },
  { subject: "React", A: 88 },
  { subject: "Performance", A: 82 },
  { subject: "Testing", A: 70 },
  { subject: "Design", A: 76 },
];

const experience = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-employed",
    duration: "2023 – Present",
    points: [
      "Delivered responsive SPAs with React and Next.js",
      "Optimized Core Web Vitals",
      "Built reusable UI component libraries",
    ],
  },
  {
    role: "Frontend Intern",
    company: "Tech Studio",
    duration: "2022 – 2023",
    points: [
      "Built dashboards with charts",
      "Migrated CSS to Tailwind",
      "Worked with designers on Figma",
    ],
  },
];

const projects = [
  {
    title: "Ai Trip Planner",
    desc: " An intelligent web app that creates personalized travel itineraries using AI.",
    tags: ["Next.js", "Tailwind", "OpenAI"],
    links: { live: "#", repo: "#" },
    image: "/screenshot.png",
  },
  {
    title: "Portfolio Website",
    desc: "UI streaming mock transactions in real-time.",
    tags: ["React", "Recharts"],
    links: { live: "#", repo: "#" },
    image: "/screenshot1.png",
  },
];

// ---------------- COMPONENTS ----------------
function Shell({ children }) {
  const [active, setActive] = useState("home");

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#000319] text-[#FAFAFA]">
      {/* Top Nav */}
      <header className="sticky top-0  bg-[#FAFAFA] text-black font-bold border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
          <a href="#home" className="font-bold">
            Shivam • Web Developer
          </a>
          <nav className="hidden md:flex gap-4">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`px-3 py-2 rounded-lg text-sm ${
                  active === n.id ? "bg-gray-200" : ""
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      {/* Footer */}
      
      <footer className="mt-20 border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-3">Shivam</h4>
            <p className="text-sm text-gray-500">
              Crafting high-performance web experiences.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/shivamsingh9990"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Github/>
              </a>
              <a href="https://www.linkedin.com/in/shivam-singh-99b6a3246/"
              target="_blank"
              rel="noopener noreferrer">

               linkdin
              </a>
              <a href="mailto:shivamsinghmaurya9@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="text-sm space-y-2">
              
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <p className="text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Delhi,India
            </p>
            <p className="text-sm flex items-center gap-2">
              <Phone className="h-4 w-4" /> +919810428985
            </p>
            <p className="text-sm flex items-center gap-2">
              <Mail className="h-4 w-4" />shivamsinghmaurya9@gmail.com
            </p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 py-4">
          © {new Date().getFullYear()} Shivam. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="flex justify-center mt-40 mb-20">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mx-[5px] text-white font-sans font-bold not-italic text-[70px]"
        >
          Hi, I'm Shivam Singh <br />{" "}
          <span className="text-[#cbacf9]"> Full Stack Developer</span>
        </motion.h1>
        <p className="mt-4 text-gray-300 text-[16px]  text-center">
          I design and build clean, fast, and accessible web apps.
        </p>
        <div className="flex justify-center flex-gap-20">
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resumeshivamsingh_1756559681.pdf"; // must match the exact name in public/
              link.download = "resumeshivamsingh_1756559681.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="inline-flex items-center justify-center h-[40px] min-w-[100px] 
             cursor-pointer rounded-[12px] bg-indigo-600 px-7 text-[1rem] font-medium font-sans 
             text-white gap-2 shadow-[0_4px_24px_0_rgba(0,0,0,0.1)] 
             backdrop-blur-[0px] border border-current animate-borderColorChange mt-5"
          >
            <Download className="h-4 w-4 " />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

function Head() {
  return (
    <div>
      <div className="w-screen h-screen flex items-center justify-center text-center overflow-x-hidden max-w-full">
        <div className="text-[60px] leading-[1.5] font-bold text-[#333]">
          <p className="text-[12px] text-[#E4ECFF] opacity-100 uppercase font-sans tracking-[0.1em]">
            DYNAMIC WEB MAGIC WITH NEXT.JS
          </p>
          <span className="inline-block mx-[5px] text-white font-sans font-bold not-italic">
            Transforming
          </span>
          <span className="inline-block mx-[5px] text-white font-sans font-bold not-italic">
            Concepts
          </span>
          <span className="inline-block mx-[5px] text-white font-sans font-bold not-italic">
            into{" "}
          </span>
          <br />
          <span className="inline-block mx-[5px] text-white font-sans font-bold not-talic">
            Seamless
          </span>
          <span className="inline-block mx-[5px] text-[#cbacf9] font-sans font-bold not-italic">
            User
          </span>
          <span className="inline-block mx-[5px] text-[#cbacf9] font-sans font-bold not-italic">
            Experinces
          </span>

          <button
            className="flex items-center justify-center mx-auto h-[48px] min-w-[180px] 
               cursor-pointer rounded-[12px] bg-[#020617] px-7 text-[1rem] font-medium font-sans 
               text-white gap-2 shadow-[0_4px_24px_0_rgba(0,0,0,0.1)] 
               backdrop-blur-[12px] border border-current animate-borderColorChange"
          >
            Show my work
            <svg
              stroke="white"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
            Width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-3 text-gray-300  text-[25px] font-bold">
        I'm a frontend developer focused on building delightful user experiences
        with React, Next.js and Tailwind.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-25"
    >
      <div>
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-6 space-y-5">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-1">
                <img className="h-10 w-10" src={s.logo} alt={s.name} />
                <span>{s.name}</span>

                <span className="text-gray-500">{s.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{Width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ResponsiveContainer Width="100%" height={600}>
        <RadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={45} domain={[0, 100]} />
          <Radar
            dataKey="A"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20 ">
      <h2 className="text-5xl  mb-25 font-bold">
        Some of My{" "}
        <span className="text-[#cbacf9] text-5xl"> Recent Projects</span>
      </h2>
      <div className="mt-8 grid md:grid-cols-2 gap-15 ">
        {projects.map((p, idx) => (
          <div key={idx} className="p-4  rounded-lg ">
            <h3 className="font-semibold mb-5 text-2xl">{p.title}</h3>
            <img className="rounded-lg object-cover" src={p.image} alt="" />

            <p className="text-sm text-[#FFFFFF] mt-2">{p.desc}</p>
            <div className="flex gap-2 mt-3 text-xs text-gray-500 flex-wrap">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-1 bg-gray-100 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-4 text-sm">
              <a
                href={p.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-indigo-600 hover:text-indigo-400 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" /> Live
              </a>
              <a
                href={p.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-400 transition-colors duration-200"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-15 ">
        {projects.map((p, idx) => (
          <div key={idx} className="p-4  rounded-lg ">
            <h3 className="font-semibold mb-5 text-2xl">{p.title}</h3>
            <img className="rounded-lg object-cover" src={p.image} alt="" />

            <p className="text-sm text-[#FFFFFF] mt-2">{p.desc}</p>
            <div className="flex gap-2 mt-3 text-xs text-gray-500 flex-wrap">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-1 bg-gray-100 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-4 text-sm">
              <a
                href={p.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-indigo-600 hover:text-indigo-400 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" /> Live
              </a>
              <a
                href={p.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-400 transition-colors duration-200"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Approach(){
  return(
    <section>
      <h1 className="text-[48px] font-bold text-center">My <span className="text-[#cbacf9]">approach</span></h1>
    
    
<div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
  
  <div className="lg:h-[35rem] rounded-3xl border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <div className="relative z-20">
      <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
        <div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
            <span className="text-2xl inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 font-bold text-white backdrop-blur-3xl">
              Phase 1
            </span>
          </button>
        </div>
      </div>
      <h2 className="text-center dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
        Planning &amp; Strategy
      </h2>
      <h2
        className="text-sm text-center dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        style={{color: "rgb(228, 236, 255)"}}
      >
        We'll collaborate to map out your website's goals, target audience, and
        key functionalities. We'll discuss things like site structure,
        navigation, and content requirements.
      </h2>
    </div>
  </div>
  <div className="lg:h-[35rem] rounded-3xl border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <div className="relative z-20">
      <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
        <div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
            <span className="text-2xl inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 font-bold text-white backdrop-blur-3xl">
              Phase 2
            </span>
          </button>
        </div>
      </div>
      <h2 className="text-center dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
        Development &amp; Progress Update
      </h2>
      <h2
        className="text-sm text-center dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        style={{color: "rgb(228, 236, 255)"}}
      >
        Once we agree on the plan, I cue my lofi playlist and dive into coding.
        From initial sketches to polished code, I keep you updated every step of
        the way
      </h2>
    </div>
  </div>
  <div className="lg:h-[35rem] rounded-3xl border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      ></path>
    </svg>
    <div className="relative z-20">
      <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
        <div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
            <span className="text-2xl inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 font-bold text-white backdrop-blur-3xl">
              Phase 3
            </span>
          </button>
        </div>
      </div>
      <h2 className="text-center dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
        Development &amp; Launch
      </h2>
      <h2
        className="text-sm text-center dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        style={{color:"rgb(228, 236, 255)"}}
      >
        This is where the magic happens! Based on the approved design, I'll
        translate everything into functional code, building your website from
        the ground up.
      </h2>
    </div>
  </div>
</div>
</section>
  )
}


function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const formObject = Object.fromEntries(data.entries());

    const response = await fetch("https://formspree.io/f/xpwyyjen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });

    if (response.ok) {
      alert(" Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <div className="h-auto w-auto flex flex-col items-center justify-center p-6">
       <h1 className="text-[48px] font-bold text-center mb-12">Let's work <span className="text-[#cbacf9]">Togehter</span></h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white/5 p-6 rounded-lg relative z-50"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-200 p-2 border rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-200 p-2 border rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          rows="4"
          className="w-200 p-2 border rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        ></textarea>
        <button
          type="submit"
          className="w-50 px-4 py-2 bg-indigo-600 text-white rounded flex items-center justify-center gap-2 hover:bg-indigo-700 transition"
        >
          <Send className="h-4 w-4" /> Send
        </button>

        {status && <p className="text-sm text-green-400">{status}</p>}
      </form>
    </div>
  );
}

// ---------------- PAGE ----------------
export default function PortfolioApp() {
  return (
    <Shell>
      <Hero />
      {/* { <Head />} */}
      <About />
      <Skills />
      <Projects />
      <Approach />
      <ContactForm />
    </Shell>
  );
}
