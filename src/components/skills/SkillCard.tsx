import Tilt from 'react-parallax-tilt';

interface SkillTypes {
    skill: {
        label: string;
        icon: string;
    };
    order: number;
}

const SkillCard = ({ skill }: SkillTypes) => {
    return (
        <div data-aos="fade-up" data-aos-duration="800">
            <Tilt
                className="group card bg-[#162033] rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full h-full select-none"
                perspective={500}
                scale={1.05}
            >
                <div className="flex flex-col items-center justify-center p-4 sm:p-5">
                    <img
                        src={skill.icon}
                        alt={skill.label}
                        className="object-contain h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 mb-2 sm:mb-3 duration-500 saturate-0 group-hover:saturate-100"
                    />
                    <h3 className="font-bold text-center text-desc-color text-sm sm:text-base">
                        {skill.label}
                    </h3>
                </div>
            </Tilt>
        </div>
    );
};

export default SkillCard;