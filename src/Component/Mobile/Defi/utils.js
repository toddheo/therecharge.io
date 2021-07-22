import Web3 from "web3";
import axios from "axios";
import { toWei, fromWei } from "web3-utils";
import Decimal from "decimal.js";
const ERC20_ABI = require("./abis/ERC20ABI.json");
const POOL_ABI = require("./abis/poolABI.json");

//input
const getChargerList = chainid => {
  //output
  let ret = {
    // "-1": [ //Init
    //     { type: "Flexible", isLP: false, address: "0x01" },
    // ],
    1: [
      //Mainnet
      { type: "Flexible", isLP: false, address: "0x01" },
      { type: "Flexible", isLP: false, address: "0x02" },
      { type: "Flexible", isLP: false, address: "0x03" },
      { type: "Flexible", isLP: false, address: "0x04" },
      { type: "Flexible", isLP: false, address: "0x05" },
      { type: "Locked", isLP: false, address: "0x11" },
      { type: "Locked", isLP: false, address: "0x12" },
      { type: "Locked", isLP: false, address: "0x13" },
      { type: "Locked", isLP: false, address: "0x14" },
      { type: "Locked", isLP: false, address: "0x15" },
      { type: "Flexible", isLP: true, address: "0x21" },
      { type: "Flexible", isLP: true, address: "0x22" },
      { type: "Flexible", isLP: true, address: "0x23" },
      { type: "Flexible", isLP: true, address: "0x24" },
      { type: "Flexible", isLP: true, address: "0x25" },
      { type: "Locked", isLP: true, address: "0x31" },
      { type: "Locked", isLP: true, address: "0x32" },
      { type: "Locked", isLP: true, address: "0x33" },
      { type: "Locked", isLP: true, address: "0x34" },
      { type: "Locked", isLP: true, address: "0x35" }
    ],
    3: [
      //Ropsten
      {
        type: "Flexible",
        isLP: false,
        address: "0x4025238b28b796902F1C39081b17123817679742"
      },
      {
        type: "Flexible",
        isLP: true,
        address: "0x4025238b28b796902F1C39081b17123817679742"
      },
      {
        type: "Locked",
        isLP: false,
        address: "0x4025238b28b796902F1C39081b17123817679742"
      },
      {
        type: "Locked",
        isLP: true,
        address: "0x4025238b28b796902F1C39081b17123817679742"
      },
      {
        type: "Flexible",
        isLP: false,
        address: "0xE0e12Ff77485655E1472A5FbccAc54Ff20B0fE4B"
      },
      {
        type: "Flexible",
        isLP: true,
        address: "0xE0e12Ff77485655E1472A5FbccAc54Ff20B0fE4B"
      },
      {
        type: "Locked",
        isLP: false,
        address: "0xE0e12Ff77485655E1472A5FbccAc54Ff20B0fE4B"
      },
      {
        type: "Locked",
        isLP: true,
        address: "0xE0e12Ff77485655E1472A5FbccAc54Ff20B0fE4B"
      }
      // { type: "Flexible", isLP: false, address: "0x02" },
      // { type: "Flexible", isLP: false, address: "0x03" },
      // { type: "Flexible", isLP: false, address: "0x04" },
      // { type: "Flexible", isLP: false, address: "0x05" },
      // { type: "Locked", isLP: false, address: "0x11" },
      // { type: "Locked", isLP: false, address: "0x12" },
      // { type: "Locked", isLP: false, address: "0x13" },
      // { type: "Locked", isLP: false, address: "0x14" },
      // { type: "Locked", isLP: false, address: "0x15" },
      // { type: "Flexible", isLP: true, address: "0x21" },
      // { type: "Flexible", isLP: true, address: "0x22" },
      // { type: "Flexible", isLP: true, address: "0x23" },
      // { type: "Flexible", isLP: true, address: "0x24" },
      // { type: "Flexible", isLP: true, address: "0x25" },
      // { type: "Locked", isLP: true, address: "0x31" },
      // { type: "Locked", isLP: true, address: "0x32" },
      // { type: "Locked", isLP: true, address: "0x33" },
      // { type: "Locked", isLP: true, address: "0x34" },
      // { type: "Locked", isLP: true, address: "0x35" },
    ]
  };

  return ret[chainid];
};

//input
const getChargerInformations = async ({
  web3,
  chargerAddress = "0x0",
  userAddress = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"
}) => {
  //output
  let ret = {
    name: "Loading No." + chargerAddress.split("x")[1].substr(0, 3),
    apy: "100",
    tvl: "100,000,000",
    limit: "0",
    balance: "1,000,000",
    share: "100",
    reward: "100,000",
    period: "21.01.01 00:00:00 ~ 21.01.30 00:00:00(GMT)",
    available: "7,000,000.00",
    allowance: "0",
    rewardSymbol: "RCGr",
    stakeSymbol: "RCGs",
    redemption: "2",
    status: "1"
  };
  //if No Parameter -> return
  if (chargerAddress == "0x0" || typeof userAddress == typeof undefined)
    return ret;
  try {
    //Get Pool detail
    const poolI = new web3.eth.Contract(POOL_ABI, chargerAddress);
    const poolM = poolI.methods;
    const [
      name,
      limit,
      balanceOf,
      totalLocked,
      startTime,
      duration,
      earned,
      rewardTokenAddress,
      stakeTokenAddress
    ] = await Promise.all([
      poolM.name().call(),
      poolM.limit().call(),
      poolM.balanceOf(userAddress).call(),
      poolM.totalSupply().call(),
      poolM.startTime().call(),
      poolM.DURATION().call(),
      poolM.earned(userAddress).call(),
      poolM.rewardToken().call(),
      poolM.stakeToken().call()
    ]);

    //Get Tokens detail
    const stakeI = new web3.eth.Contract(ERC20_ABI, stakeTokenAddress);
    const stakeM = stakeI.methods;
    const rewardI = new web3.eth.Contract(ERC20_ABI, rewardTokenAddress);
    const rewardM = rewardI.methods;

    const [
      basePercent,
      balance,
      allowance,
      sSymbol,
      rSymbol,
      totalReward
    ] = await Promise.all([
      stakeM.basePercent().call(),
      stakeM.balanceOf(userAddress).call(),
      stakeM.allowance(userAddress, chargerAddress).call(),
      stakeM.symbol().call(),
      rewardM.symbol().call(),
      rewardM.balanceOf(chargerAddress).call()
    ]);

    //Get Token Price
    const tokenPrice = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinGecko[sSymbol]},${coinGecko[rSymbol]}&vs_currencies=usd`
    );

    const sPrice = tokenPrice.data[coinGecko[sSymbol]].usd;
    const rPrice = tokenPrice.data[coinGecko[rSymbol]].usd;
    const totalValueLocked = weiToEther(totalLocked) * sPrice;
    const totalValueReward = weiToEther(totalReward) * rPrice;

    //Update Return values
    const returnTemplate = {
      name: name,
      apy: apy(totalValueLocked, totalValueReward, duration),
      tvl: new Decimal(totalValueLocked).toFixed(2),
      limit: weiToEther(limit),
      balance: weiToEther(balanceOf),
      share: share(balanceOf, totalLocked),
      reward: weiToEther(earned),
      period: period(startTime, duration),
      available: weiToEther(balance),
      allowance: allowance,
      rewardSymbol: rSymbol,
      stakeSymbol: sSymbol,
      redemption: basePercent / 100,
      status: status(startTime, duration), // not yet(return >0) / opened(return 0) / ended(return <0)
      approve: () => approve(stakeM, chargerAddress, "999999999", userAddress),
      stake: amount =>
        allowance > 0
          ? stake(poolM, amount, userAddress)
          : approve(stakeM, chargerAddress, "999999999", userAddress),
      earn: () => earn(poolM, userAddress),
      exit: () => exit(poolM, userAddress)
    };

    //Change all of Objects' value to String type
    Object.keys(returnTemplate).forEach(key => {
      ret[key] = numberWithCommas(returnTemplate[key]);
    });
  } catch (err) {
    console.log(err);
  }

  return ret;
};

//
//
//Utils
//
//

const coinGecko = {
  WETH: "ethereum",
  UNI: "uniswap",
  RCG: "binance-usd",
  RCGs: "ethereum",
  RCGr: "binance-usd"
};
const approve = (tokenM, to, amount, account) => {
  if (typeof amount != "string") amount = String(amount);
  tokenM.approve(to, toWei(amount, "ether")).send({ from: account });
};
const stake = (poolM, amount, account) => {
  if (typeof amount != "string") amount = String(amount);
  poolM.stake(toWei(amount, "ether")).send({ from: account });
};
const earn = (poolM, account) => {
  poolM.getReward().send({ from: account });
};
const exit = (poolM, account) => {
  poolM.exit().send({ from: account });
};

const period = (startTime, duration) => {
  let ret = "21.01.01 00:00:00 ~ 21.01.30 00:00:00(GMT)";

  const endTime = Number(startTime) + Number(duration);

  const formatter = timestamp => {
    var d = new Date(Number(timestamp) * 1000);
    const z = x => {
      return x.toString().padStart(2, "0");
    };
    return `${new String(d.getFullYear()).substr(2, 3)}.${z(d.getMonth())}.${z(
      d.getDate()
    )} ${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}`;
  };

  ret = `${formatter(startTime)} ~ ${formatter(endTime)}`;

  return ret;
};

const apy = (totalValueLocked, totalValueReward, duration) => {
  let ret = 100;
  const yearSeconds = 1 * 365 * 24 * 60 * 60;
  ret =
    ((totalValueReward * (yearSeconds / duration)) / totalValueLocked) * 100;
  if (ret > 9999) ret = 9999;
  if (typeof ret != "number") return 0;
  if (isNaN(ret)) return 0;
  return ret;
};

const share = (balanceOf, totalLocked) => {
  let ret = (balanceOf / totalLocked) * 100;
  if (typeof ret != "number") return 0;
  if (isNaN(ret)) return 0;
  return ret;
};
const weiToEther = wei => {
  return fromWei(wei, "ether");
};
const numberWithCommas = x => {
  if (typeof x != "number") return x;
  // x = 2000
  let pair = new String(x).split(".");
  if (pair.length == 2) {
    pair[0] = pair[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return pair[0] + "." + pair[1].substr(0, 8);
  } else {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const status = (startTime, duration) => {
  const now = +new Date() / 1000;
  const endTime = Number(startTime) + Number(duration);

  if (now < startTime) return startTime - now;
  else if (now > startTime && now < endTime) return 0;
  else if (now > endTime) return now - endTime;
};

export default { getChargerList, getChargerInformations };

// Input -> output -> tableFormatting(output)
