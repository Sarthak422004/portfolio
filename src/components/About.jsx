import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="px-4 bg-gradient-to-tr from-[#000000] to-[#1a1a1a] text-white" id="About">
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="w-full h-auto flex flex-wrap flex-col items-center pb-16">
          <p className="text-white font-bold text-4xl">
            About <span className="text-amber-300">Me</span>
          </p>

          <div className="w-24 h-1 border-b-4 border-amber-300 mt-[12px] rounded-lg"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex justify-center">
            <img
              src="./hero-img.jpg"
              alt="Hero Image"
              className="w-full md:w-3/5 md:center h-auto rounded-3xl"
            />
          </div>
          <div className="self-start justify-start w-4/5">
            <h3 className="text-3xl font-bold text-white pb-1">
              I'm <span className="text-amber-300">Sarthak</span>
            </h3>
            <p className="text-base font-semibold pb-4">Front-end Developer</p>
            As a second-year MSME student at <span className="font-semibold">IIT Hyderabad</span>, I have a
            strong passion for coding and problem-solving. I am proficient in
            C++, HTML, CSS, JavaScript, and Bootstrap, and currently learning
            and practicing data structures and algorithms. With a willingness to
            learn and take on new challenges, I am excited to apply my skills
            and contribute to a dynamic team.

            <div className="skills active-skills">
              <div className="text-white flex flex-row mt-4 mb-2">
                <div
                  className={`mr-8 font-bold text-lg cursor-pointer tab-links ${activeTab === "Skills" && "active-link"}`}
                  onClick={() => handleTabChange("Skills")}
                >
                  Skills
                </div>
                <div
                  className={`mr-8 font-bold text-lg cursor-pointer tab-links ${activeTab === "Education" && "active-link"}`}
                  onClick={() => handleTabChange("Education")}
                >
                  Education
                </div>
                <div
                  className={`mr-8 font-bold text-lg cursor-pointer tab-links ${activeTab === "Experience" && "active-link"}`}
                  onClick={() => handleTabChange("Experience")}
                >
                  Experience
                </div>
              </div>

              <div className={`tab-contents ${activeTab === "Skills" && "active-tab"}`} id="Skills">
                <ul className="my-[25px] space-y-[10px]">
                  <li>
                    <span className="text-amber-300">Programming Languages:</span> C++, Python
                  </li>
                  <li>
                    <span className="text-amber-300">Web Development:</span> HTML, CSS, JavaScript, Tailwind CSS
                  </li>
                  <li>
                    <span className="text-amber-300">Familiarity With:</span> React JS Framework
                  </li>
                  <li>
                    <span className="text-amber-300">Data Structures and Algorithms (DSA):</span> Currently Learning and Practicing
                  </li>
                </ul>
              </div>

              <div className={`tab-contents ${activeTab === "Education" && "active-tab"}`} id="Education">
                <ul className="my-[25px] space-y-[10px]">
                  <li>
                    <span className="text-amber-300">Education</span>
                  </li>
                  <li>
                    <span className="text-amber-300">Programming Languages:</span> C++, Python
                  </li>
                  <li>
                    <span className="text-amber-300">Web Development:</span> HTML, CSS, JavaScript, Tailwind CSS
                  </li>
                  <li>
                    <span className="text-amber-300">Familiarity With:</span> React JS Framework
                  </li>
                  <li>
                    <span className="text-amber-300">Data Structures and Algorithms (DSA):</span> Currently Learning and Practicing
                  </li>
                </ul>
              </div>

              <div className={`tab-contents ${activeTab === "Experience" && "active-tab"}`} id="Experience">
                <ul className="my-[25px] space-y-[10px]">
                  <li>
                    <span className="text-amber-300">Experience</span>
                  </li>
                  <li>
                    <span className="text-amber-300">Programming Languages:</span> C++, Python
                  </li>
                  <li>
                    <span className="text-amber-300">Web Development:</span> HTML, CSS, JavaScript, Tailwind CSS
                  </li>
                  <li>
                    <span className="text-amber-300">Familiarity With:</span> React JS Framework
                  </li>
                  <li>
                    <span className="text-amber-300">Data Structures and Algorithms (DSA):</span> Currently Learning and Practicing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <style>
        {`
        .tab-links {
          position: relative;
        }
        .tab-links::after {
          content: '';
          width: 0;
          height: 3px;
          background: #fcd34d;
          position: absolute;
          left: 0;
          bottom: -8px;
          transition: 0.5s;
        }
        
        .tab-links.active-link::after {
          width: 60%;
        }

        .tab-contents {
          display: none;
        }
        .tab-contents.active-tab {
          display: block;
        }
        `}
      </style>
    </section>
  );
};

export default About;

