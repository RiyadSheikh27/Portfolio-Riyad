import { useState, MouseEvent } from "react";
import { certificates } from "../../primitives/certificates";
import SectionHead from "../SectionHead";

type Certificate = (typeof certificates)[number];

function CertificateCard({ certificate }: { certificate: Certificate }) {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

  const handleMouseMove = (e: MouseEvent<HTMLElement>): void => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <a
      href={certificate.pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card group block p-4 lg:p-5 bg-[#1a2436e6] text-desc-color rounded-md"
    >
      <figure
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setBackgroundPosition("50% 50%")}
        style={{
          backgroundPosition,
          backgroundImage: `url(${certificate.image})`,
        }}
        className="certificate-thumb overflow-hidden rounded-md"
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          className="certificate-card-img h-full w-full object-cover object-top pointer-events-none group-hover:opacity-0"
        />
      </figure>
      <h3 className="certificate-card-title mt-3 text-sm lg:text-base font-semibold leading-snug line-clamp-2">
        {certificate.title}
      </h3>
      <p className="mt-1 text-xs font-bold uppercase tracking-wide text-desc-color/80">
        Platform · {certificate.platform}
      </p>
    </a>
  );
}

function CertificateSection() {
  return (
    <section className="relative section" id="certificates">
      <SectionHead parallaxValue="certificates" value="My Certificates" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 lg:mt-20 max-w-4xl mx-auto">
        {certificates.map((certificate, index) => (
          <div
            key={certificate.id}
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-delay={index * 120}
          >
            <CertificateCard certificate={certificate} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificateSection;
