import SkillCard from "./skill_card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Python",
    "React",
    "AngularJS",
    "Node.js",
  ];
  const storeDataSkills = ["Elasticsearch", "MongoDB", "MySQL", "Firebase"];
  const otherTools = ["Git", "Github", "vim"];
  const certs = ["Elasticsearch Certified Engineer", "Scrum Master"];

  return (
    <div id="about">
      <div className="about-content">
        <h1>A little about me</h1>
        <p>
          I've been working as a professional Software Engineer for almost 3
          years but I've been building web applications for almost 9 years now.
          Within this time, I've accumulated a lot of skills and knowledge of
          tooling that aids me in shipping a product. It's a constant learning
          cycle though, with new tools, ideas and libraries coming out every
          year, I like to challenge myself in learning something new. So I
          decided to build this website with{" "}
          <a href="https://nextjs.org/" target="_blank">
            NextJS
          </a>{" "}
          and deploy it on{" "}
          <a href="https://vercel.com/" target="_blank">
            Vercel.
          </a>
        </p>
        <div className="about-two">
          <div className="about-two-content">
            <div className="skills">
              <h2>What I use to code</h2>
              <div className="skill-list">
                {skills.map((skill) => (
                  <SkillCard skillName={skill} />
                ))}
              </div>
              <h2>What I use to store and retrieve data</h2>
              <div className="skill-list">
                {storeDataSkills.map((skill) => (
                  <SkillCard skillName={skill} />
                ))}
              </div>
              <h2>What helps me tie it together</h2>
              <div className="skill-list">
                {otherTools.map((skill) => (
                  <SkillCard skillName={skill} />
                ))}
              </div>
              <h2>I'm also certified</h2>
              <div className="skill-list">
                {certs.map((skill) => (
                  <SkillCard skillName={skill} />
                ))}
              </div>
              <p>
                There's more, like, a lot more but in the spirit of a simple UI,
                I decided to only include what I use regularly. If you'd like to
                find out more, contact me here.
              </p>
            </div>
          </div>
        </div>
        <div className="about-three">
          <h1>Some nice words</h1>
          <div className="about-three-content">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <div className="slider-content">
                  <h2>Edwin Corrigan</h2>
                  <h3 className="title">
                    Senior Software Engineer at Fidelity
                  </h3>
                  <p>
                    <span>"</span>I worked with Kenny for two and a half years,
                    when he started in the company as a Junior Engineer (I was
                    mid-level). Kenny's approach and attitude is what you look
                    for in a coworker. He consistently aims for the best
                    solutions and never afraid to shy away from work that needs
                    to be done.<span>"</span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-content">
                  <h2>Philip Hankey</h2>
                  <h3 className="title">Software Engineer at Siren</h3>
                  <p>
                    <span>"</span>Kenny is an invaluable asset to any
                    JavaScript/Node.js development team. His expertise,
                    problem-solving skills, and collaborative spirit make them
                    not only an exceptional developer but also a fantastic
                    teammate.<span>"</span>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
