import { Typewriter } from "react-simple-typewriter";
import SectionHead from "../components/SectionHead";

const About = () => {
  const words = ["Machine Learning Engineer", "Software Engineer", "Programmer"];

  // ?? Handle Download Resume
  const handleDownload = () => {
    // const resumeUrl =
    //   "https://sites.google.com/view/riyad27";
    // // const fileIdMatch = resumeUrl.match(/[-\w]{25,}/);
    // // const fileId = fileIdMatch?.[0] ?? "";
    // const downloadUrl = `https://sites.google.com/view/riyad27`;
    // window.location.href = downloadUrl;
  };
  return (
    <section className="section" id="about">
      <SectionHead parallaxValue="About" value="About me" />
      <div className="grid-cols-2 gap-20 lg:mt-20 lg:grid">
        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-justify text-desc-color lg:text-lg"
        >
          Meet Md. Fazle Rabbi Riyad, a proud student of GUB, Dept. of CSE and a&nbsp;
          <span className="text-white">
            Machine Learning Engineer. &nbsp;
          </span>
          I thrive in the world of Machine Learning, where I transform
          concepts into visually appealing interfaces. Passionate and a team
          player, I'm excited to be part of projects that push the boundaries of
          innovation. I'm not just a coder; I'm a perpetual learner. The dynamic
          world of technology constantly inspires me to stay ahead of the curve.
          I'm always exploring new trends, tools, and techniques to enhance my
          skills.
        </p>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="mt-4 space-y-4 lg:mt-0"
        >
          <h3 className="text-lg font-black lg:text-2xl">
            I am a{" "}
            <span className="text-main-color">
              <Typewriter
                words={words}
                loop={0}
                cursor={true}
                cursorColor="rgb(114 226 174)"
              />
            </span>
          </h3>
          <ul className="space-y-3 list-disc list-inside">
            <li className="relative my-list">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Name
              </strong>
              : Md. Fazle Rabbi Riyad
            </li>
            <li className="relative my-list">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Work
              </strong>
              : Machine Learning Engineer
            </li>
            <li className="relative my-list">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Study
              </strong>
              : B.Sc in CSE (GUB)
            </li>
            <li className="relative my-list">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Address
              </strong>
              : Dhaka, Bangladesh
            </li>
          </ul>
          <button onClick={handleDownload} className="social-btn">
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
