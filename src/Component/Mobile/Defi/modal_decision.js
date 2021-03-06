/* Libraries */
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pool from "./Pool";
import { useRecoilState } from "recoil";
import {
  modalDecisionOpenState,
  modalPool2OpenState,
} from "../../../store/modal";
import { selState } from "../../../store/pool";
import { withTranslation } from "react-i18next";

function ModalDecision({
  web3,
  connectWallet,
  onDisconnect,
  account,
  params,
  modalDecisionOpen,
  setModalDecisionOpen,
  chainId,
  toast,
  plAmount,
  setPlAmount,
  poolMethods,
  userInfo,
  btnInfo,
  swapAmount,
}) {
  // const [modal2Open, setModal2Open] = useState(false);
  // const [params, setParams] = useState({
  //   type: "Flexible",
  //   isLP: false,
  // });

  // const handleModal2 = () => {
  //   setModal2Open(!modal2Open);
  // };

  return (
    <Container>
      <div className={modalDecisionOpen ? "modalOn" : "modalOff"}>
        <div
          className="background"
          onClick={() => {
            setModalDecisionOpen(false);
            // setParams({
            //   type: "",
            //   isLP: false,
            // });
            // setSelCharger(0);
          }}
        ></div>
        <div
          className="modalScroll"
          style={{
            display: "flex",
            marginTop: "100px",
            // height: "90%",
            // width: "100%",
            overflow: "scroll",
            padding: "50px",
          }}
        >
          <div className="decision">
            <div className="theme Roboto_30pt_Black">{`${btnInfo}`}</div>
            <div className="desc Roboto_20pt_Regular">
              Do you want to proceed?
            </div>
            <div className="buttons">
              <div
                className="ok Roboto_20pt_Black"
                onClick={async () => {
                  if (btnInfo === "Deposit") {
                    console.log(plAmount, poolMethods, userInfo);
                    await poolMethods.stake(plAmount);
                    await toast(
                      userInfo.allowance > 0
                        ? 'Please approve "PLUG-IN" in your private wallet'
                        : 'Please approve "Transfer Limit" in your private wallet'
                    );
                    setPlAmount("0");
                    setModalDecisionOpen(false);
                  } else if (btnInfo === "Get Reward") {
                    await poolMethods.earn();
                    await toast(
                      'Please approve "GET FILLED" in your private wallet'
                    );
                    setPlAmount("0");
                    setModalDecisionOpen(false);
                  } else if (btnInfo === "Withdrawal") {
                    await poolMethods.exit();
                    await toast(
                      'Please approve "UNPLUG" in your private wallet'
                    );
                    setPlAmount("0");
                    setModalDecisionOpen(false);
                  } else if (btnInfo === "Swap") {
                    await toast(
                      // poolMethods.allowance > 0
                      'Please approve "SWAP" in your private wallet'
                      // : "Approve ?????? ????????????. ????????? ??????????????????."
                    );
                    await poolMethods.swap(poolMethods, swapAmount);
                    setModalDecisionOpen(false);
                  }
                }}
              >
                OK
              </div>
              <div
                className="cancel Roboto_20pt_Black"
                onClick={() => {
                  setModalDecisionOpen(false);
                }}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .modalOff {
    display: none;
  }

  .modalOn {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .background {
    position: absolute;
    background-color: var(--midnight);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .modalScroll {
    // background-color: white;
  }

  .modalScroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  .decision {
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 255px;
    object-fit: contain;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 1);
    align-items: center;
    z-index: 2;
    display: flex;

    .theme {
      margin-top: 40px;
    }

    .desc {
      margin: 40px 0;
    }

    .buttons {
      display: flex;
      margin-bottom: 40px;

      .ok {
        width: 100px;
        height: 30px;
        margin-right: 40px;
        border-radius: 10px;
        background-color: var(--purple);
        cursor: pointer;

        &:hover {
          box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
        }
      }

      .cancel {
        width: 100px;
        height: 30px;
        border-radius: 10px;
        background-color: var(--gray-20);
        cursor: pointer;

        &:hover {
          box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
`;

// export default React.memo(Modal, (props, nextProps) => {
//   if (props.web3 !== nextProps.web3) {
//     // don't re-render/update
//     return true
//   }
//   return true;
// })

export default ModalDecision;
