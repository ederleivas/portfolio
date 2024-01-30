//import heroImg from "../project-assets/hero.svg";
import developerImg from "../project-assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-slate-950 py-24 hero-img">
      <div
        className="align-element grid md:grid-cols-2
            items-center gap-8 "
      >
        <article>
          <h1 className="text-slate-100 text-7xl font-bold tracking-wider">
            I'm Eder
          </h1>
          <p
            className="mt-4 text-3xl text-slate-300 capitalize
                tracking-wide"
          >
            Front-End Developer
          </p>
          <p
            className="mt-2 text-lg text-slate-200 capitalize
           tracking-wide"
          >
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://www.linkedin.com/in/eder-f-leivas-23502a292/">
              <FaLinkedin
                className="h-8 w-8 text-slate-500
                 hover:text-slate-50 duration-300"
              />
            </a>
            <a href="#">
              <FaTwitterSquare
                className="h-8 w-8 text-slate-500
                 hover:text-slate-50 duration-300"
              />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={developerImg} className="h-full lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
