import styled from "styled-components";

function Risk() {
    return (
        <Container>
            <div className="theme Roboto_50pt_Black_L">Whitepaper</div>
            <div className="title Roboto_30pt_Black_L">5. Disclaimers and Risks</div>
            <div className="text Roboto_20pt_Regular_L">
                We highly encourage you to carefully read all the statements of risk and disclaimers listed in this white paper. We also encourage everyone to seek advice from financial, legal, accounting, and tax experts if needed.
            </div>
            <div className="subTitle Roboto_20pt_Black_L">
                5-1. Disclaimers
            </div>
            <div className="text Roboto_20pt_Regular_L">
                All contents enclosed in this document are distributed for the purpose of communicating and providing general information about our business, platform background regarding the Recharge Token, and marketing measures taken to create the Recharge Token ecosystem. This document reflects the most up-to-date information as of the latest version, but it should be noted that this is not the final version. Therefore, this document can be changed, added to, and or have information deleted if necessary, in response to the market conditions under our discretion.
            </div>
            <div className="text Roboto_20pt_Regular_L">
                As this document is not a contract or agreement related to any investment activities, we do not offer, induce, solicit, and or collect anything from this document. Therefore, buyers of Recharge tokens or redemption points should consider all risks prior to investment and should not use this document as a basis for their investment decisions.
            </div>
            <div className="text Roboto_20pt_Regular_L">
                No one is obligated to enter into any sale or exchange of Recharge tokens and redemption points under any legally binding contract. If the sale, exchange, or related contract requires a legally binding contract, a separate contract will be made. If the contents of the contract and the contents of this document are inconsistent, the contract will take precedence.
            </div>
            <div className="subTitle Roboto_20pt_Black_L">
                5-2 Risks
            </div>
            <div className="text Roboto_20pt_Regular_L">
                No information enclosed in this document has been reviewed or approved by any authority. Therefore, the information provided may not be accurate and does not prove that this document has been legally approved. In conclusion, we express that we are not responsible for any loss or potential losses taken through any errors, inconsistencies, delays, or omitted information presented in this document.
            </div>
            <div className="text Roboto_20pt_Regular_L">
                This document contains futuristic and future potential aspects about the specific businesses that our company is currently proceeding with or planning to proceed with. These potential seeking statements are subject to various risks and uncertainties. In other words, the future outlook statements expressed in this document may be inconsistent with the actual results. Therefore, in the case of direct or indirect investments made based on the contents of this document, we hold no responsibility for the differences in the actual outcome and our statements made about the potentials. Buyers of the Recharge Tokens and the redemption points should carefully and comprehensively consider the risks that lie outside this document and are responsible for any and all consequences that follow. In addition to the risks stated above, there may be risks such as natural disasters and catastrophic events that we cannot foresee.
            </div>
            <div className="text Roboto_20pt_Regular_L">
                Different translated versions of this document may be published. In the event of any discrepancies in interpretation, prioritize the original Korean version.
            </div>
        </Container>
    )
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
        margin-top: 40px;
    }
    .text {
        margin-bottom: 40px;
    }
`
export default Risk;