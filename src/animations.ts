const transition = {
  duration: 1,
  ease: "easeOut",
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
