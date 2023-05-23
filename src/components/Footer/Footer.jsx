import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterArea>
      <FooterTop>
        <CompanyArea>
          <div>© ${new Date().getFullYear()} Assemble, Inc</div>
          <div>
            {FOOTER_BOTTOM_LEFT_MENUS.map((item, index) => (
              <CompanyPolicyList key={item.id}>
                {item.name}
                {index === FOOTER_BOTTOM_LEFT_MENUS.length - 1 || ` · `}
              </CompanyPolicyList>
            ))}
          </div>
        </CompanyArea>
        <LanguageAndSocial>
          <ul>
            <Language>
              <i className="fa-solid fa-earth-americas" /> 한국어 (KR)
            </Language>
            <Language>
              <i className="fa-solid fa-won-sign" /> KRW
            </Language>
          </ul>
          <ul>
            {FOOTER_BOTTOM_RIGHT_ICON_MENUS.map(item => (
              <Social key={item.id}>{item.name}</Social>
            ))}
          </ul>
        </LanguageAndSocial>
      </FooterTop>
      <FooterBottom>
        웹사이트 제공자: Assemble Ireland UC, private unlimited company, 8
        Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Jinmin Yang, Jihuyn Ha,
        Sujeong Kim | VAT 번호: IE111L | 사업자 등록 번호: IE 111111 | 연락처:
        matching@assemble.com, 웹사이트, 080-111-1111 | 호스팅 서비스 제공업체:
        아마존 웹서비스 | Assemble은 통신판매 중개자로 Assemble 플랫폼을 통하여
        게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. Assemble
        플랫폼을 통하여 예약된 체육관, 체험, 호스트 서비스에 관한 의무와 책임은
        해당 서비스를 제공하는 호스트에게 있습니다.
      </FooterBottom>
    </FooterArea>
  );
};

export default Footer;

const FOOTER_BOTTOM_LEFT_MENUS = [
  { id: 1, name: `개인정보 처리방침` },
  { id: 2, name: `이용약관` },
  { id: 3, name: `사이트맵` },
  { id: 4, name: `환불정책` },
  { id: 5, name: `회사 세부정보` },
  { id: 6, name: `고객센터` },
];

const FOOTER_BOTTOM_RIGHT_ICON_MENUS = [
  { id: 1, name: <i className="fa-brands fa-square-facebook" /> },
  { id: 2, name: <i className="fa-brands fa-square-twitter" /> },
  { id: 3, name: <i className="fa-brands fa-square-instagram" /> },
];

const FooterArea = styled.div`
  border-top: 1px solid #d9d9d9;
  background-color: #f7f7f7;
  white-space: pre-wrap;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 550px) {
    padding: 0 24px;
  }
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;

  @media screen and (max-width: 1126px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column-reverse;
    display: flex;
    align-items: start;
  }
`;

const CompanyArea = styled.div`
  display: flex;
  justify-content: left;
  @media screen and (max-width: 1126px) {
    flex-direction: column;
  }
`;

const CompanyPolicyList = styled.li`
  display: inline-block;
`;

const LanguageAndSocial = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  min-width: 280px;
  & ul {
    margin-left: 0px;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Language = styled.li`
  display: inline-block;
  margin-right: 10px;
`;

const Social = styled.li`
  margin-left: 15px;
  display: inline-block;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #d9d9d9;
  padding: 8px 0;
  font-size: 11px;
  color: #999999;
`;
