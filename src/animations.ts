const transition = {
  duration: 1,
  ease: "easeOut",
};
//Rating

export const ratingPageFade = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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
      width: isActive ? "70%" : "0%",
      transition: transition,
    },
  };
};
