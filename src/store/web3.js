// 해당 도메인의 목표는 '컨트랙트에 접근하여 Read/Write하는 것'이다.
// 컨트랙트에 접근하려면 무엇이 필요한가? provider
// 어떤 정보를 알 수 있는가? networkId, account
// 토스트 띄울 수 있어야 하니까. 토스트 세팅하는 아톰도 있어야 한다.
// const { atom } = require("recoil");
import { atom } from "recoil";

export const web3State = atom({
  key: "web3",
  default: undefined,
});

export const chainIdState = atom({
  key: "networkId",
  default: undefined,
});

export const accountState = atom({
  key: "account",
  default: undefined,
});
