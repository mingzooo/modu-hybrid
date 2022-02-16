import React, { useContext, useEffect, useState, useCallback } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { PageTransContext } from "../../containers/pageTransContext";
import { TextMiddle, DangerPopup, DangerWrapPopup } from "../../styled/shared";
import { BottomNavCloseAction } from "../../reducers/container/bottomNav";

import icon_check from "../../assets/icon-check-white.svg";
import icon_back from "../../assets/icon-back-arrow.svg";

import {
  TitleWrap,
  ItemWrap,
  PartyIconWrap,
  PartyIcon,
  PartyText,
  DeleteButtonWrap,
} from "../../styled/main/enrollment";

const CardRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //context
  const { setPageTrans } = useContext(PageTransContext);

  //state
  const [pageConfirmStatus, setPageConfirmStatus] = useState(false);
  const [isFree, setIsFree] = useState("N");

  //state-카드정보
  const [num1,setNum1] = useState('');
  const [num2,setNum2] = useState('');
  const [num3,setNum3] = useState('');
  const [num4,setNum4] = useState('');
  const [max,setMax] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [cardPw, setCardPw] = useState('');
  const [expireYear, setExpireYear] = useState('');
  const [expireMonth, setExpireMonth] = useState('');
  const [identifyNumber, setIdentiryNumber] = useState('');

  //initial logic
  useEffect(() => {
    dispatch(BottomNavCloseAction);
  }, []);

  const closePage = () => {
    setPageTrans("trans toLeft");
    history.goBack();
  };

  //inputMove
  // const inputMoveNumber = (num) =>{

  //   if(!isFinite(num)){
  //     alert('숫자만 입력해주세요');
  //   }
  //   setMax(num.maxLength);

  //   if(num.length >= max){
      
  //   }
  // }

  //isFree
  const onClickIsFree = useCallback(() => {
    if (isFree == "N") {
      setIsFree("Y");
    } else {
      setIsFree("N");
    }
  }, [isFree]);

  //정보 입력 완료
  const onClickRevise = useCallback(async () => {
    if (!pageConfirmStatus) return;

    //뒤로가기
    setPageTrans("trans toLeft");
    history.goBack();
  }, []);


  return (
    <div className="page">
      <PageWrap>
        <HeaderWrap id="back_link" className="spoqaBold" onClick={closePage}>
          <div
            style={{
              position: "absolute",
              top: "55%",
              left: "1.25rem",
              transform: "translate(0,-55%)",
            }}
          >
            <img src={icon_back}></img>
          </div>
          <TextMiddle>카드등록</TextMiddle>
        </HeaderWrap>

        <ContentWrap>
          <div
            className="spoqaBold"
            style={{
              fontsize: "1.25rem",
              lineHeight: "1.6",
              margin: "1rem 5.375rem 1.5rem 0",
            }}
          >
            <span style={{ color: "#ffbc26" }}>구독파티</span> 정기결제에 사용할
            <br />
            카드를 등록해주세요.
          </div>
          {/* 카드번호 입력 */}
          <div>
            <TitleWrap className="notoMedium">카드번호</TitleWrap>
            <ItemWrap style={{ flexDirection: "row" }}>
              <InputWrap>
                <Input type="number" id="num1" placeholder="0000" onKeyUp={inputMoveNumber(num1)} maxLength={4} value={num1}></Input>
              </InputWrap>
              <Hypen>-</Hypen>
              <InputWrap>
                <Input type="number" id="num2" placeholder="0000" onKeyUp={inputMoveNumber(num2)} maxLength={4} value={num2}></Input>
              </InputWrap>
              <Hypen>-</Hypen>
              <InputWrap>
                <Input type="password" id="num3" placeholder="0000" onKeyUp={inputMoveNumber(num3)} maxLength={4} value={num3}></Input>
              </InputWrap>
              <Hypen>-</Hypen>
              <InputWrap>
                <Input type="password" id="num4" placeholder="0000" maxLength={4} value={num4}></Input>
              </InputWrap>
            </ItemWrap>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "9.5625rem",
              }}
            >
              <TitleWrap className="notoMedium">유효기간</TitleWrap>
              <InputWrap>
                <Input type="number" placeholder="MMYY"></Input>
              </InputWrap>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "9.5625rem",
              }}
            >
              <TitleWrap className="notoMedium">CVC</TitleWrap>
              <InputWrap>
                <Input type="number" placeholder="카드 뒷면 3자리 숫자"></Input>
              </InputWrap>
            </div>
          </div>
          <div>
            <TitleWrap className="notoMedium">카드 비밀번호</TitleWrap>
            <InputWrap>
              <Input type="number" placeholder="비밀번호 앞 2자리 숫자"></Input>
            </InputWrap>
          </div>
          <div>
            <TitleWrap className="notoMedium">생년월일 / 사업자번호</TitleWrap>
            <InputWrap>
              <Input
                type="number"
                placeholder="생년월일 6자리 또는 사업자번호 10자리"
              ></Input>
            </InputWrap>
          </div>
          <div style={{ margin: "1.4375rem 0 0.75rem 0" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.625rem",
              }}
              onClick={onClickIsFree}
            >
              <PartyIconWrap isFree={isFree} style={{}}>
                <PartyIcon src={icon_check} />
              </PartyIconWrap>
              <PartyText className="notoMedium">
                19세 이상이며, 아래의 약관에 모두 동의합니다.
              </PartyText>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.625rem",
              }}
              onClick={onClickIsFree}
            >
              <PartyIconWrap isFree={isFree} style={{}}>
                <PartyIcon src={icon_check} />
              </PartyIconWrap>
              <PartyText className="notoRegular" style={{ color: "#6a6a6a" }}>
                모두의 이용 약관 및 개인정보 처리방침에 동의합니다.
              </PartyText>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.625rem",
              }}
              onClick={onClickIsFree}
            >
              <PartyIconWrap isFree={isFree} style={{}}>
                <PartyIcon src={icon_check} />
              </PartyIconWrap>
              <PartyText className="notoRegular" style={{ color: "#6a6a6a" }}>
                본인의 개인정보를 제 3자에게 제공하는 데에 동의합니다.
              </PartyText>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.625rem",
              }}
              onClick={onClickIsFree}
            >
              <PartyIconWrap isFree={isFree} style={{}}>
                <PartyIcon src={icon_check} />
              </PartyIconWrap>
              <PartyText className="notoRegular" style={{ color: "#6a6a6a" }}>
                본인의 개인정보를 결제 서비스업체에 제공하는 데에 동의합니다.
              </PartyText>
            </div>
          </div>
          <SaveButton
            className="spoqaBold"
            pageConfirmStatus={pageConfirmStatus}
            onClick={onClickRevise}
          >
            확인
          </SaveButton>
        </ContentWrap>
      </PageWrap>

      {/* 오류 알림창 */}
      <DangerWrapPopup openStatus={false} style={{backgroundColor:'rgba(110,110,110,0.35)'}}>
        <Popup className="spoqaBold" openStatus={true}>
          
          <div style={{ fontSize: "0.875rem"}}>
            카드 오류
          </div>
          <div className="spoqaRegular" style={{fontSize:'0.75rem', margin:'0.625rem 0 1.5625rem 0', padding:'0 1.25rem 0 1.25rem'}}>
            [C00001] 등록할 수 없는 카드입니다.<br/>
            입력하신 카드번호를 다시 한번 확인해주십시오.
          </div>
          <div style={{width:'100%', border:'solid 0.7px #b4b4b4'}}/>
          <div className="spoqaRegular" style={{ fontSize: "0.875rem", marginTop:'0.6875rem'}}>확인</div>
        </Popup>
      </DangerWrapPopup>
    </div>
  );
};

const PageWrap = styled.div`
  position: absolute;
  top: 3.0625rem;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  background-color: #ffffff;
`;

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 3.0625rem;

  background-color: #ffffff;
  text-align: center;

  font-size: 0.875rem;
  color: #313131;

  box-shadow: 0 0 0.25rem 0.0625rem #efefef;
`;

const ContentWrap = styled.div`
  top: 3.0625rem;
  left: 0;
  right: 0;
  bottom: 0;

  overflow-y: scroll;

  padding: 0 1.25rem 1.25rem 1.25rem;
`;

const InputWrap = styled.div`
  display: flex;

  padding: 0.625rem 0.875rem;

  border: ${(props) =>
    props.openStatus ? "0.0625rem solid #ffca2c" : "0.0625rem solid #e8e8e8"};

  border-radius: 0.25rem;

  font-size: 0.8125rem;

  color: ${(props) => (props.isBlocked ? "rgba(49, 49, 49,0.2)" : "#313131")};
  background-color: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 0.8125rem;

  padding: 0;

  :focus {
    outline: none;
  }
  ::placeholder {
    opacity: 0.3;
  }
`;

const Hypen = styled.span`
  display: flex;
  height: 1.3125rem;
  margin: 0.3125rem 0.25rem 0 0.25rem;
  font-family: "NotoSansCJKkr";
  font-size: 0.9375rem;
  font-weight: 500;
  color: #888;
`;

const SaveButton = styled.div`
  cursor: pointer;

  width: 100%;

  padding: 0.8125rem 0 0.875rem 0;

  font-size: 0.875rem;
  color: #ffffff;

  margin-top: 2.3125rem;

  text-align: center;

  border-radius: 0.375rem;

  background-color: ${(props) =>
    props.pageConfirmStatus ? "#ffca17" : "#e3e3e3"};
`;

const Popup = styled.div`

  position:absolute;

  top:45%;
  left:50%;

  padding: 2rem 0 0.75rem 0;

  width:17.375rem;
  display: flex;
  flex-direction:column;

  transform:translate(-50%,-50%);

  border-radius: 0.4375rem;
  box-shadow: 0 0 0.25rem 0.0625rem rgba(0, 0, 0, 0.05);
  background-color: #ffffff;


  text-align:center;

  /* 애니메이션 적용 */
  transition: opacity 300ms ease-out;
  opacity : ${props => props.openStatus ? '1' : '0'};
`;

export default CardRegister;
