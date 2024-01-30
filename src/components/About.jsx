import aboutSvg from "../project-assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-slate-950 py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64 " />
        <article>
          <SectionTitle text="Let's Work Together!" />
          <p className="text-slate-300 mt-8 leading-loose">
            I am a web developer based in Utah. I help convert a vision and an
            idea into meaningful and useful products.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
