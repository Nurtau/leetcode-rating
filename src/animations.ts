const transition = {
  duration: 1,
  ease: "easeOut",
};

const fadeTransition = {
  duration: 0.5,
  ease: "easeOut",
};

export const pageFade = {
  hidden: {
    opacity: 0,
		x: -125,
  },
  show: {
    opacity: 1,
		x: 0,
    transition: fadeTransition,
  },
  exit: {
    opacity: 0,
    transition: fadeTransition,
  },
};

//Rating
export const ratingListFade = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: transition,
  },
};

//Nav
export const getNavLineAnimation = (isActive: boolean) => {
  return {
    hidden: {
      width: "0%",
      transition: transition,
    },
    show: {
      width: isActive ? "100%" : "0%",
      transition: transition,
    },
  };
};
