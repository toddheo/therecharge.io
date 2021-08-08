import { atom } from "recoil";

const initPool = {
  // poolAddress
  address: "0x0",
  apy: 0.0,
  name: "Loading...",
  period: [1625022000, 14400],
  redemtion: 200,
  symbol: ["RCG", "RCG"],
  token: [
    "0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b",
    "0xbddC276CACC18E9177B2f5CFb3BFb6eef491799b",
  ],
  tvl: 0,
  type: "flexible",
};

export const poolInfoState = atom({
  key: "poolInfoState",
  default: initPool,
});
export const selState = atom({
  key: "selState",
  default: 0,
});
export const periodState = atom({
  key: "periodState",
  default: "21.01.01 00:00:00 ~ 21.01.30 00:00:00(GMT)",
});
