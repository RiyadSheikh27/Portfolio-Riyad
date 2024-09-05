import Tilt from 'react-parallax-tilt';

interface SkillTypes {
    skill: {
        label: string;
        icon: string;
    };
    order: number;
}

const SkillCard = ({ skill, order }: SkillTypes) => {
    return (
        <div data-aos="zoom-out-dow" data-aos-duration="2000">
            <Tilt
                className={`group card bg-[#162033] rounded-3xl shadow-2xl mx-auto w-40 h-40 select-none ${order % 2 === 0 ? "lg:mt-0 mt-5" : "lg:mt-28 mt-5"
                    }`}
                perspective={500}
                scale={1.1}
            >
                <div>
                    <img
                        src={skill.icon}
                        className="object-contain h-32 p-4 mx-auto duration-500 saturate-0 group-hover:saturate-100"
                    />
                    <h3 className="font-black text-center text-desc-color lg:text-lg">
                        {skill.label}
                    </h3>
                </div>
            </Tilt>
        </div>
    );
};

export default SkillCard