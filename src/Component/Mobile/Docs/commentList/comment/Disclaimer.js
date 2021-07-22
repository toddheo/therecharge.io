import styled from "styled-components";

function Disclaimer() {
  return (
    <Container>
      <div className="theme Roboto_50pt_Black">Disclaimer</div>
      <div className="semiTitle Roboto_30pt_Black_L">Information</div>
      <div className="text Roboto_20pt_Regular_L">
        The website therecharge.io (hereinafter, referred to as the “website”)
        provides information and material of a general nature. You are not
        authorized and nor should you rely on the website for legal advice,
        business advice, or advice of any kind. You act at your own risk in
        reliance on the contents of the website. Should you make a decision to
        act or not act you should contact a licensed attorney in the relevant
        jurisdiction in which you want or need help. In no way are the owners
        of, or contributors to, the website responsible for the actions,
        decisions, or other behavior taken or not taken by you in reliance upon
        the website.
      </div>
      <div className="semiTitle Roboto_30pt_Black_L">Investment risks</div>
      <div className="text Roboto_20pt_Regular_L">
        The investment in Recharge Token can lead to loss of money over short or
        even long periods. The investors in Recharge token should expect prices
        to have large range fluctuations. The information published on the
        website cannot guarantee that the investors in Recharge token would not
        lose money.
      </div>
      <div className="semiTitle Roboto_30pt_Black_L">No warranties</div>
      <div className="text Roboto_20pt_Regular_L">
        The website is provided on an “as is” basis without any warranties of
        any kind regarding the website and/or any content, data, materials
        and/or services provided on the website.
      </div>
      <div className="semiTitle Roboto_30pt_Black_L">
        Limitation of liability
      </div>
      <div className="text Roboto_20pt_Regular_L">
        Unless otherwise required by law, in no event shall the owners of, or
        contributors to, the website be liable for any damages of any kind,
        including, but not limited to, loss of use, loss of profits, or loss of
        data arising out of or in any way connected with the use of the website.
      </div>
      <div className="semiTitle Roboto_30pt_Black_L">Last amendment</div>
      <div className="text Roboto_20pt_Regular_L">
        This disclaimer was amended for the last time on May 21 2021
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  // width: 750px;
  .theme {
    margin-bottom: 60px;
    text-shadow: 0 0 1px white, 0 0 15px white;
  }
  .title {
    // margin-top: 60px;
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
`;
export default Disclaimer;
