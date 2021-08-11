import { atom } from "recoil";

export const modalPoolOpenState = atom({
  key: "modalPoolState",
  default: false,
});
export const modalPool2OpenState = atom({
  key: "modalPool2State",
  default: false,
});

export const modalSwapOpenState = atom({
  key: "modalSwapState",
  default: false,
});

export const modalDecisionOpenState = atom({
  key: "modalDecisionState",
  default: false,
});
