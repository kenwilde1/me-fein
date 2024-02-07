import SkillCard from "./skill_card"
import elastic from '../images/elastic.svg';
import AboutCard from "./helpers/about_cards";
import scrum from '../images/scrum-alliance.svg';
import { Carousel } from "flowbite-react";

export default function About() {

    const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Python', 'React', 'AngularJS', 'Node.js'];
    const storeDataSkills = ['Elasticsearch', 'MongoDB', 'MySQL', 'Firebase'];
    const otherTools = ['Git', 'Github', 'vim'];

    const cardList = [
        {
            img: elastic,
            link: 'https://certified.elastic.co/e22035ed-915b-4940-a00c-b449d5a3e1b3#gs.41e647'
        },
        {
            img: scrum,
            link: 'https://bcert.me/bc/html/show-badge.html?b=fdogdwlf'
        },
    ];

    return (
        <div id='about'>
            <div className='about-content'>
                <h1>A little about me</h1>
                <p>I've been working as a professional Software Engineer for almost 3 years but I've been building web applications for almost 9 years now. Within this time, I've accumulated a lot of skills and knowledge of tooling that aids me in shipping a product. It's a constant learning cycle though, with new tools, ideas and libraries coming out every year, I like to challenge myself in learning something new. So I decided to build this website with <a href='https://nextjs.org/' target="_blank">NextJS</a> and deploy it on <a href='https://vercel.com/' target="_blank">Vercel.</a></p>
                <div className='about-two'>
                    <div className='about-two-content'>
                        <div className="skills">
                            <h2>What I use to code</h2>
                            <div className="skill-list">
                                {skills.map(skill => (
                                    <SkillCard skillName={skill} />
                                ))}
                            </div>
                            <h2>What I use to store and retrieve data</h2>
                            <div className="skill-list">
                                {storeDataSkills.map(skill => (
                                    <SkillCard skillName={skill} />
                                ))}
                            </div>
                            <h2>What helps me tie it together</h2>
                            <div className="skill-list">
                                {otherTools.map(skill => (
                                    <SkillCard skillName={skill} />
                                ))}
                            </div>
                            <p>There's more, like, a lot more but in the spirit of a simple UI, I decided to only include what I use regularly. If you'd like to find out more, contact me here.</p>
                        </div>
                        <div className="certs">
                            <h2>I'm an Elasticsearch Certified Engineer</h2>
                            <AboutCard card={cardList[0]} />
                            <h2>I'm also a Scrum Master</h2>
                            <AboutCard card={cardList[1]} />
                        </div>
                    </div>
                </div>
                <div className='about-three'>
                    <div className='about-three-content'>
                    </div>
                </div>
            </div>
        </div>
    )
}