import { Typewriter } from "react-simple-typewriter";
import SectionHead from "../components/SectionHead";

const About = () => {
  const words = ["Python Backend Developer", "Software Engineer", "Programmer"];

  const handleDownload = () => {
    const downloadUrl = `https://drive.google.com/drive/folders/12JyIWqEkvOhiBhpcGKJ7I3clNIwTtqdi?usp=sharing`;
    window.location.href = downloadUrl;
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
            Backend Software Engineer expert in Python, DRF, and PostgreSQL, with experience in FastAPI, React.js, AWS, CI/CD, Docker, Redis, Kafka, EPR, Microservices, ML model integration, Payment gateways etc. &nbsp;
          </span>
          I thrive in the world of Python backend development, where I transform ideas into scalable and efficient solutions. Passionate and a team player, I'm excited to be part of projects that push the boundaries of innovation. I'm not just a coder; I'm a perpetual learner. The dynamic world of technology constantly inspires me to stay ahead of the curve. I'm always exploring new trends, tools, and techniques to enhance my skills.
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
          <ul className="space-y-3">
            <li className="relative my-list about-list-item">
              <strong className="font-medium">Workplace</strong>
              <span aria-hidden="true">:</span>
              <span>Betopia Group, Dhaka, Bangladesh</span>
            </li>
            <li className="relative my-list about-list-item">
              <strong className="font-medium">Designation</strong>
              <span aria-hidden="true">:</span>
              <span>Backend Software Engineer</span>
            </li>
            <li className="relative my-list about-list-item">
              <strong className="font-medium">Duration</strong>
              <span aria-hidden="true">:</span>
              <span>2025 – Present</span>
            </li>
            <li className="relative my-list about-list-item">
              <strong className="font-medium">Study</strong>
              <span aria-hidden="true">:</span>
              <span>B.Sc. in Computer Science and Engineering (GUB)</span>
            </li>
            <li className="relative my-list about-list-item">
              <strong className="font-medium">Address</strong>
              <span aria-hidden="true">:</span>
              <span>Dhaka, Bangladesh</span>
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
