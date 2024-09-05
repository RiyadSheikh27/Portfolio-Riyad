import { useState, MouseEvent } from "react";
import { certificates } from "../../primitives/certificates"
import SectionHead from "../SectionHead"

function CertificateSection() {
    const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
    const handleMouseMove = (e: MouseEvent<HTMLElement>): void => {
        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
    };
    return (
        <div className="relative section">
            <SectionHead parallaxValue="certificates" value="My Certificates" />
            <div className="grid-cols-2 gap-20 lg:grid lg:mt-20">
                {certificates.map(certificate => (
                    <a href={certificate.pdf} target="_blank" className="p-6 z-50 bg-[#1a2436e6] text-desc-color rounded-md" key={certificate.id}>
                        <figure
                            onMouseMove={handleMouseMove}
                            style={{ backgroundPosition, backgroundImage: `url(${certificate.image})` }}
                            className="overflow-hidden rounded-md group"
                        >
                            <img src={certificate.image} alt="Certificate Image" className="object-cover duration-500 pointer-events-none group-hover:opacity-0 " />
                        </figure>
                        <h3 className="mt-3 text-xl font-semibold">{certificate.title}</h3>
                        <p className="text-sm font-bold uppercase">Platform - {certificate.platform}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default CertificateSection
