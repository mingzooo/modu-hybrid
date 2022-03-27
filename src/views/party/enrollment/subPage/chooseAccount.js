import styled from "styled-components";
import { MainText } from "../../../../styled/shared/text";
import { NoticeWrap } from "../../../../styled/shared/wrap";

import icon_notice_duck from "../../../../assets/icon-notice-duck.svg";
import icon_info from "../../../../assets/info-black-192-x-192@3x.png";

import { TitleWrap } from "../../../../styled/main/enrollment";
import InputComponent from "../../../../styled/shared/inputComponent";
import { useState } from "react";

const ChooseAccount = () => {

  const [accountId, setAccountId] = useState('');
  const [accountPw, setAccountPw] = useState('');
  const [miniInfoStatus, setMiniInfoStatus] = useState(false)

  const handleChangeAccountId = (e) => {
    // if (e.target.value.length == 5) return false;
    setAccountId(e.target.value);
  };
  const handleChangeAccountPw = (e) => {
    // if (e.target.value.length == 5) return false;
    setAccountPw(e.target.value);
  };
  //구독계정 비밀번호 내 개인정보를 포함하지 말라는 안내 아이콘 클릭
  const onClickMiniInfo = () => {
      setMiniInfoStatus(!miniInfoStatus);
  };

  return (
    <ChooseAccountWrap>
      <MainText style={{margin:'1rem 0 0'}}>
        공유할  
        <span className="yellowText"> 구독 계정 정보</span>
        를<br/>
        입력해주세요.
      </MainText>

      {/* Notice Div */}
      <NoticeWrap style={{boxShadow:'none', backgroundColor:'#fff8e8', marginTop:'0.9063rem'}}>
        <div className="notice_sub_wrap align_center">
          <div>
            <img className="notice_img" src={icon_notice_duck}></img>
          </div>
          <div className="notice_text_div">
            계정정보 입력 시, 
            <span className="boldText"> 성인인증을 완료</span>
            됐는지 확인해주세요! 
            <span className="boldText"> SNS연동 계정</span>
            은 공유가 불가능해요.
          </div>
        </div>
      </NoticeWrap>

      {/* Account Div */}
      <TitleWrap>아이디</TitleWrap>
      <InputComponent
        id={"accountId"}
        type={"text"}
        placeholder={"아이디를 입력해주세요"}
        maxLength={200}
        value={accountId}
        onChange={handleChangeAccountId}
      />
      <TitleWrap>
        비밀번호
        <InfoWrap>
          <img onClick={onClickMiniInfo} className="infoBtn" src={icon_info} />
          <MiniInfoDialog openStatus={miniInfoStatus}>
            구독 계정의 비밀번호는 개인정보를 포함하지 말아주세요.
          </MiniInfoDialog>
        </InfoWrap>
        

      </TitleWrap>

      <InputComponent
        id={"accountPw"}
        type={"password"}
        placeholder={"비밀번호를 입력해주세요"}
        maxLength={200}
        value={accountPw}
        onChange={handleChangeAccountPw}
      />

    </ChooseAccountWrap>
  );
}

export default ChooseAccount;

const ChooseAccountWrap = styled.div`
  padding: 0 1.25rem;
`;

const InfoWrap = styled.div`
  margin-left: 0.4375rem;
  position: relative;
  display: flex;

  .infoBtn {
    width: 1rem;
    height: 1rem;
  }
`;

const MiniInfoDialog = styled.div`
  display: ${props => props.openStatus ? 'block' : 'none'};
  position:absolute;

  top: 100%;
  right: -1150%;
  z-index: 10000;

  margin-top: 0.4063rem;

  background-color:#ffca17;
  color:#ffffff;
  font-size:0.75rem;
  line-height:1.25rem;
  font-family: 'Spoqa Han Sans';
  font-weight: 600;
  width: 15rem;

  padding: 0.5625rem 0.5313rem 0.6875rem 0.5188rem;
  border-radius: 0.3125rem;

  word-break: keep-all;

  ::after{
    border-top:0px solid transparent; 
    border-left: 8px solid transparent; 
    border-right: 8px solid transparent; 
    border-bottom: 8px solid #ffca17; 
    content:"";
    position:absolute;
    top:-8px;
    left:25%;
    transform:translate(-50%,0);
  }
`;
