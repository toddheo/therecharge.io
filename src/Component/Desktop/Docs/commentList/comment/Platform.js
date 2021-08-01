import styled from "styled-components";

function Platform() {
  return (
    <Container>
      <div className="theme Roboto_50pt_Black_L">Whitepaper</div>
      <div className="title Roboto_30pt_Black_L">3. Our Platforms</div>
      <div className="subTitle Roboto_20pt_Black_L">
        3-1. Charging Station (Decentralized Finance)
      </div>
      <div className="text Roboto_20pt_Regular_L">
        The Charging Station acts as a recharging hub that serves as the center
        of the Recharge ecosystem. The Charging Station is connected through
        personal wallets such as MetaMask and Trust Wallet, and supports
        transactions through the Recharge Ecosystem Partners. The rewards for
        each Charging Station (Staking Pool) are distributed automatically from
        Incentive Hub (IH).
      </div>
      <div className="semiTitle Roboto_20pt_Black_L">
        Incentive Distribution
      </div>
      <div className="text Roboto_20pt_Regular_L">
        The carbon redemption points stored at the Incentive Hub are distributed
        accordingly through governance and the first distribution ratio before
        the governance beginning is set as follows.
      </div>
      <div className="subText Roboto_20pt_Regular_L">
        ■ Purchasing carbon credits (10%)
      </div>
      <div className="subText Roboto_20pt_Regular_L">
        ■ Staking (20%) – Private and Angel only Staking pool.
      </div>
      <div className="subText Roboto_20pt_Regular_L">
        ■ Staking Unlocked (30%) – Regular Staking pool.
      </div>
      <div className="text Roboto_20pt_Regular_L">
        ■ Staking Locked (40%) – Regular Staking pool.
      </div>
      <div className="subTitle Roboto_20pt_Black_L">3-2 Recharge swap</div>
      <div className="text Roboto_20pt_Regular_L">
        The Frequent Use Points can be swapped with Recharge Tokens through the
        Recharge swap (Exchange Rate applies). In addition, Recharge swap
        supports Cross Chain Bridge between ERC-20, BEP-20, and HRC-20 on
        demand. This was done in consideration of the continuous expansion of
        the Recharge ecosystem, providing stable services with awareness of the
        transaction fees and inclusion of various exchanges.
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 750px;
  .theme {
    margin-bottom: 80px;
    text-shadow: 0 0 1px white, 0 0 15px white;
  }
  .title {
    margin-top: 60px;
    margin-bottom: 40px;
  }
  .subTitle {
    margin-top: 60px;
  }
  .semiTitle {
    margin-top: 60px;
  }
  .text {
    margin-bottom: 40px;
  }
`;
export default Platform;
