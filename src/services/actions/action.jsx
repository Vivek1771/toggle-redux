export const SWITCH = "SWITCH";

export const switchto = (score) => {
  // console.log(score);
  return {
    type: SWITCH,
    data: score,
  };
};
