import styled from "styled-components";

function Term() {
    return (
        <Container>
            <div className="theme Roboto_50pt_Black_L">Whitepaper</div>
            <div className="title Roboto_30pt_Black_L">
                6. Terms and Definitions
            </div>
            <div className="subTitle Roboto_20pt_Black_L">
                ✓ Smart-Contract
            </div>
            <div className="text Roboto_20pt_Regular_L">
                A smart contract is an automatically executing contract that is part of a piece of computer software. It carries out its action once all the requirements are met. For example, smart contracts can be used for password protected money between two parties. When all conditions of the contract are met, the smart contract carries through and distributes the assets accordingly.
            </div>
            <div className="subTitle Roboto_20pt_Black_L">
                ✓ De-Fi, Decentralized finance
            </div>
            <div className="text Roboto_20pt_Regular_L">
                Decentralized finance is the environment in which the finance application operates under a blockchain network. Decentralized finance is open source, operates without any intervention from different agencies, does not need any approvals, and is meant to create a transparent finance environment.
            </div>
            <div className="subTitle Roboto_20pt_Black_L">
                ✓ Decentralized Exchange, DEX
            </div>
            <div className="text Roboto_20pt_Regular_L">
                An exchange with decentralized finance as its background. Users can use their own wallets without any brokers between their virtual asset transfers. These transfers are made under a smart contract.
            </div>
            <div className="subTitle Roboto_20pt_Black_L">
                ✓ Centralized Exchange, CEX
            </div>
            <div className="text Roboto_20pt_Regular_L">
                A traditional method of exchange, the opposite of a decentralized exchange. There exists a broker, and exchanges are made through a system via a user’s buy and sell order book.
            </div>
            <div className="subTitle Roboto_20pt_Black_L">
                ✓ Cross Chain
            </div>
            <div className="text Roboto_20pt_Regular_L">
                Acts as a link between different blockchains to connect them together. For example, with the use of a cross chain, fiat money is not needed and BTC and ETH can be exchanged directly.
            </div>
            <div className="subTitle Roboto_20pt_Black_L">
                ✓ Liquidity Provider
            </div>
            <div className="text Roboto_20pt_Regular_L">
                Users deposit coins to the decentralized platform and can participate in liquidation. A certain percentage of the transaction fee is given as compensation for voluntary participation.
            </div>
            <div className="subTitle Roboto_20pt_Black_L">
                ✓ Yield Farming
            </div>
            <div className="text Roboto_20pt_Regular_L">
                Refers to the act of providing liquidity to de-fi service products and receiving compensation.
            </div>
            <div className="subTitle Roboto_20pt_Black_L">
                ✓ Staking
            </div>
            <div className="text Roboto_20pt_Regular_L">
                Refers to the action of users depositing their coins to a specific platform. A lock-up is performed in some cases so that unstaking is not possible for a certain period of time during service.
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
        margin-top: 40px;
    }
    .semiTitle {
        margin-top: 40px;
    }
    .text {
        margin-bottom: 40px;
    }
`
export default Term;