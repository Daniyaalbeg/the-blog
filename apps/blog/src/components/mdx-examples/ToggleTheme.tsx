import { useState } from "react";
import { motion } from "framer-motion";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<string>("light");

  const onToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const variants = {
    grow: { scale: 1.05 },
    click: { scale: 0.95 },
    hidden: {
      opacity: 0,
      rotate: 45,
    },
    show: {
      scale: 1,
      opacity: 1,
      rotate: 0,
    },
  };

  const backDivVariant = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
      },
    },
    grow: {
      scale: 1.2,
      opacity: 1,
    },
    click: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.2,
      },
    },
  };

  const starVariants = {
    hidden: {
      scale: 0.4,
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
      },
    },
    show: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
      },
    }),
  };
  const moonVariants = {
    hidden: {
      scale: 0.1,
      opacity: 0,
      rotate: 45,
    },
    show: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
      },
    },
  };

  const lineVariants = {
    hidden: {
      scale: 0.4,
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
      },
    },
    show: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
      },
    }),
  };

  const sunVariants = {
    hidden: {
      scale: 0.1,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <motion.button
      onClick={onToggle}
      className="w-10 h-10 p-2 grid justify-center items-center relative rounded-xl"
      whileHover="grow"
      whileTap="click"
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={backDivVariant}
        className="dark:bg-gray-300/10 bg-slate-600/10 top-0 right-0 left-0 bottom-0 absolute rounded-xl"
      />
      {theme === "light" ? (
        <motion.svg
          key="sun"
          variants={variants}
          width="24"
          height="24"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-150 z-10 text-stone-700 dark:text-stone-300"
        >
          <motion.path
            variants={lineVariants}
            custom={0}
            animate="show"
            initial="hidden"
            d="M 7.5 0 C 7.776 0 8 0.224 8 0.5 L 8 2.5 C 8 2.776 7.776 3 7.5 3 C 7.224 3 7 2.776 7 2.5 L 7 0.5 C 7 0.224 7.224 0 7.5 0 Z"
            fill="currentColor"
          />
          <motion.path
            variants={lineVariants}
            custom={1}
            animate="show"
            initial="hidden"
            d="M 2.197 2.197 C 2.392 2.001 2.709 2.001 2.904 2.197 L 4.318 3.611 C 4.513 3.806 4.513 4.123 4.318 4.318 C 4.123 4.513 3.806 4.513 3.611 4.318 L 2.197 2.904 C 2.001 2.709 2.001 2.392 2.197 2.197 Z"
            fill="currentColor"
          />
          <motion.path
            variants={lineVariants}
            custom={2}
            animate="show"
            initial="hidden"
            d="M 0.5 7 C 0.224 7 0 7.224 0 7.5 C 0 7.776 0.224 8 0.5 8 L 2.5 8 C 2.776 8 3 7.776 3 7.5 C 3 7.224 2.776 7 2.5 7 L 0.5 7 Z"
            fill="currentColor"
          />
          <motion.path
            variants={lineVariants}
            custom={3}
            animate="show"
            initial="hidden"
            d="M 2.197 12.803 C 2.001 12.608 2.001 12.292 2.197 12.096 L 3.611 10.682 C 3.806 10.487 4.123 10.487 4.318 10.682 C 4.513 10.877 4.513 11.194 4.318 11.389 L 2.904 12.803 C 2.709 12.999 2.392 12.999 2.197 12.803 Z"
            fill="currentColor"
          />
          <motion.path
            variants={lineVariants}
            custom={4}
            animate="show"
            initial="hidden"
            d="M 8 12.5 C 8 12.224 7.776 12 7.5 12 C 7.224 12 7 12.224 7 12.5 L 7 14.5 C 7 14.776 7.224 15 7.5 15 C 7.776 15 8 14.776 8 14.5 L 8 12.5 Z"
            fill="currentColor"
          />
          <motion.path
            variants={lineVariants}
            custom={5}
            animate="show"
            initial="hidden"
            d="M 10.682 10.682 C 10.877 10.487 11.194 10.487 11.389 10.682 L 12.803 12.096 C 12.999 12.292 12.999 12.608 12.803 12.803 C 12.608 12.999 12.292 12.999 12.096 12.803 L 10.682 11.389 C 10.487 11.194 10.487 10.877 10.682 10.682 Z"
            fill="currentColor"
          />
          <motion.path
            variants={lineVariants}
            custom={6}
            animate="show"
            initial="hidden"
            d="M 12.5 7 C 12.224 7 12 7.224 12 7.5 C 12 7.776 12.224 8 12.5 8 L 14.5 8 C 14.776 8 15 7.776 15 7.5 C 15 7.224 14.776 7 14.5 7 L 12.5 7 Z"
            fill="currentColor"
          />
          <motion.path
            variants={lineVariants}
            custom={7}
            animate="show"
            initial="hidden"
            d="M 10.682 4.318 C 10.487 4.123 10.487 3.806 10.682 3.611 L 12.096 2.197 C 12.292 2.001 12.608 2.001 12.803 2.197 C 12.999 2.392 12.999 2.709 12.803 2.904 L 11.389 4.318 C 11.194 4.513 10.877 4.513 10.682 4.318 Z"
            fill="currentColor"
          />
          <motion.path
            variants={sunVariants}
            animate="show"
            initial="hidden"
            d="M 7.5 4.5 C 5.843 4.5 4.5 5.843 4.5 7.5 C 4.5 9.157 5.843 10.5 7.5 10.5 C 9.157 10.5 10.5 9.157 10.5 7.5 C 10.5 5.843 9.157 4.5 7.5 4.5 Z"
            fill="currentColor"
          />
        </motion.svg>
      ) : (
        <motion.svg
          key="moon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 15 15"
          fill="none"
          variants={variants}
          className="z-10 scale-150 dark:text-stone-300 text-stone-700"
        >
          <motion.path
            variants={starVariants}
            animate="show"
            initial="hidden"
            custom={1}
            d="M 2.9 0.5 C 2.9 0.192 2.567 0 2.3 0.154 C 2.176 0.225 2.1 0.357 2.1 0.5 L 2.1 1.1 L 1.5 1.1 C 1.192 1.1 1 1.433 1.154 1.7 C 1.225 1.824 1.357 1.9 1.5 1.9 L 2.1 1.9 L 2.1 2.5 C 2.1 2.808 2.433 3 2.7 2.846 C 2.824 2.775 2.9 2.643 2.9 2.5 L 2.9 1.9 L 3.5 1.9 C 3.808 1.9 4 1.567 3.846 1.3 C 3.775 1.176 3.643 1.1 3.5 1.1 L 2.9 1.1 L 2.9 0.5 Z"
            fill="currentColor"
          />
          <motion.path
            variants={starVariants}
            animate="show"
            initial="hidden"
            custom={2}
            d="M 5.9 3.5 C 5.9 3.192 5.567 3 5.3 3.154 C 5.176 3.225 5.1 3.357 5.1 3.5 L 5.1 4.1 L 4.5 4.1 C 4.192 4.1 4 4.433 4.154 4.7 C 4.225 4.824 4.357 4.9 4.5 4.9 L 5.1 4.9 L 5.1 5.5 C 5.1 5.808 5.433 6 5.7 5.846 C 5.824 5.775 5.9 5.643 5.9 5.5 L 5.9 4.9 L 6.5 4.9 C 6.808 4.9 7 4.567 6.846 4.3 C 6.775 4.176 6.643 4.1 6.5 4.1 L 5.9 4.1 L 5.9 3.5 Z"
            fill="currentColor"
          />
          <motion.path
            variants={starVariants}
            animate="show"
            initial="hidden"
            custom={3}
            d="M 1.9 6.5 C 1.9 6.192 1.567 6 1.3 6.154 C 1.176 6.225 1.1 6.357 1.1 6.5 L 1.1 7.1 L 0.5 7.1 C 0.192 7.1 0 7.433 0.154 7.7 C 0.225 7.824 0.357 7.9 0.5 7.9 L 1.1 7.9 L 1.1 8.5 C 1.1 8.808 1.433 9 1.7 8.846 C 1.824 8.775 1.9 8.643 1.9 8.5 L 1.9 7.9 L 2.5 7.9 C 2.808 7.9 3 7.567 2.846 7.3 C 2.775 7.176 2.643 7.1 2.5 7.1 L 1.9 7.1 L 1.9 6.5 Z"
            fill="currentColor"
          />
          <motion.path
            variants={moonVariants}
            animate="show"
            initial="hidden"
            d="M 8.544 0.982 L 8.246 0.942 C 8.033 0.918 7.906 1.166 8.029 1.342 C 8.795 2.445 9.205 3.757 9.203 5.1 C 9.202 8.606 6.461 11.499 2.96 11.69 C 2.746 11.702 2.627 11.954 2.777 12.107 C 2.846 12.177 2.915 12.246 2.987 12.313 L 3.059 12.379 L 3.319 12.605 L 3.507 12.753 L 3.628 12.843 L 3.815 12.974 L 3.991 13.089 C 4.111 13.165 4.235 13.238 4.361 13.306 L 4.625 13.441 L 4.885 13.561 L 5.188 13.683 L 5.432 13.769 C 5.791 13.887 6.161 13.974 6.535 14.029 L 6.852 14.069 L 7.119 14.089 C 11.205 14.327 14.52 10.828 14.062 6.761 L 14.025 6.484 C 13.95 5.999 13.821 5.525 13.641 5.069 L 13.528 4.801 L 13.451 4.635 L 13.377 4.487 C 13.218 4.179 13.036 3.884 12.831 3.604 L 12.678 3.404 L 12.479 3.164 L 12.316 2.984 L 12.196 2.86 L 12.036 2.702 L 11.813 2.502 L 11.493 2.242 L 11.248 2.065 L 10.956 1.875 L 10.635 1.689 L 10.307 1.524 L 10.194 1.472 L 9.954 1.371 L 9.678 1.267 L 9.426 1.185 L 9.101 1.095 L 8.836 1.035 L 8.544 0.982 Z"
            fill="currentColor"
          />
        </motion.svg>
      )}
    </motion.button>
  );
};
