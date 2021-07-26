import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Modal1({ modal1Open, handleModal1 }) {
  const { t } = useTranslation();
  return (
    <Container>
      <div className={modal1Open ? "modalOn" : "modalOff"}>
        <div className="modalScroll">
          <div className="modal">
            <img
              className="close"
              src="/ic_close.svg"
              onClick={() => {
                handleModal1();
              }}
            />
            <div className="contents">
              <div className="theme Roboto_50pt_Black">Charging Station</div>
              <div className="img">
                <img
                  src="mpopCharging.png"
                  // style={{ width: "1088px", height: "1143px" }}
                />
              </div>
              <div className="desc Roboto_20pt_Regular">
                {t("Home/text/info-charging-station")}
              </div>
            </div>
          </div>
          <Link to="/">
            <div
              className="background"
              onClick={() => {
                handleModal1();
              }}
            ></div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
export default Modal1;

const Container = styled.div`
  width: 100%;

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
    z-index: 1.5;

    .modalScroll {
      display: flex;
      width: 100%;
      overflow: scroll;
      padding: 50px;

      .background {
        position: absolute;
        background-color: black;
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      .modal {
        display: flex;
        flex-direction: column;
        position: relative;
        margin: auto;
        width: 100%;
        // width: 1494px;
        // height: 1576px;
        padding: 10% 13%;
        box-sizing: border-box;
        border-radius: 33px;
        box-shadow: 0 3px 20px 0 rgba(255, 255, 255, 0.45);
        background-color: var(--midnight);
        align-items: center;
        z-index: 2;

        .close {
          position: absolute;
          top: 5%;
          right: 5%;
          cursor: pointer;
        }

        .contents {
          .theme {
            margin-bottom: 40px;
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
            text-align: center;
            color: #ffffff;
          }
          img {
            width: 100%;
          }
          .desc {
            margin: 0 auto;
            margin-top: 60px;
            // width: 950px;
            text-align: center;
            color: #ffffff;
          }
        }
      }
    }
  }
`;
