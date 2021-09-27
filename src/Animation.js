//Animation for components

export const modalAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const animButton = {
  hidden: { y: "0%" },
  show: { y: "100%" },
  transition: { duration: 1 },
};

export const animHeader = {
  hidden: { x: "-10%" },
  show: { x: "0%" },
  transition: { duration: 1 },
};
