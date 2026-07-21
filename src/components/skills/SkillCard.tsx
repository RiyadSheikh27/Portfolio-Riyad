import { motion } from "framer-motion";

interface SkillTypes {
  skill: {
    label: string;
    icon: string;
  };
  order: number;
}

const SkillCard = ({ skill, order }: SkillTypes) => {
  const floatDuration = 3.2 + (order % 5) * 0.35;
  const floatDelay = (order % 7) * 0.25;

  return (
    <motion.div
      className="skill-card group/skill"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
    >
      <div className="skill-card-shine" aria-hidden="true" />
      <div className="skill-card-border" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-5">
        <motion.img
          src={skill.icon}
          alt={skill.label}
          className="skill-card-icon object-contain h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 mb-2 sm:mb-3"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: floatDelay,
          }}
        />
        <h3 className="font-bold text-center text-desc-color text-sm sm:text-base transition-colors duration-300 group-hover/skill:text-main-color">
          {skill.label}
        </h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;
