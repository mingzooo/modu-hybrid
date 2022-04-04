import styled from "styled-components";
import { MainText, PartyDetailSubtitleSpan } from "../../../../styled/shared/text";
import { NoticeWrap } from "../../../../styled/shared/wrap";

import icon_notice_duck from "../../../../assets/icon-notice-duck.svg";
import icon_notice_white_duck from "../../../../assets/icon-notice-white-duck.svg";
import icon_info from "../../../../assets/info-black-192-x-192@3x.png";
import icon_arrow_down from "../../../../assets/icon-arrow-down-gray.svg";
import icon_arrow_up from "../../../../assets/icon-arrow-up-gray.svg";

import { Input, InputWrap, ItemWrap, TitleWrap } from "../../../../styled/main/enrollment";
import { InfoWrap, MiniInfoDialog } from "./chooseAccount";
import InputComponent from "../../../../styled/shared/inputComponent";
import { useCallback, useEffect, useState } from "react";

import Fade from 'react-reveal/Fade';
import { NumberList } from "../../../main/subscribe/enrollment";
import BottomButton from "../../../../components/party/BottomButton";

const ChoosePayment = ({updatePage}) => {
  const [membershipPrice, setMembershipPrice] = useState('');
  const [paymentDay, setPaymentDay] = useState(null);
  const [pricePerMember, setPricePerMember] = useState('');
  const [partyPersonel, setPartyPersonel] = useState(0);

  const [paymentDayOpen, setPaymentDayOpen] = useState(false);
  const [personelOpen, setPersonelOpen] = useState(false);
  
  const [membershipPriceInfoStatus, setMembershipPriceInfoStatus] = useState(false)
  const [totalPersonnelInfoStatus, setTotalPersonnelInfoStatus] = useState(false);

  const [nextBtnStatus, setNextBtnStatus] = useState(false);

  let today = new Date()

  useEffect(() => {
    if(membershipPrice&&paymentDay&&pricePerMember&&partyPersonel) {
      setNextBtnStatus(true);
    }
  },[membershipPrice,paymentDay,pricePerMember,partyPersonel])

  const onClickPaymentDayOpen = useCallback(() => {
    if (paymentDayOpen) {
      setPaymentDayOpen(false);
    }
    else {
      setPaymentDayOpen(true);
    }
  }, [paymentDayOpen]);

  const onClickPersonelOpen = () => {
    setPersonelOpen(!personelOpen);
  };

  const handleChangeMembershipPrice = (e) => {
    setMembershipPrice(e.target.value);
  }

  const handleChangePricePerMember = (e) => {
    setPricePerMember(e.target.value);
  }

  const onClickPaymentDayContent = (data) => {
    setPaymentDay(data);
    setPaymentDayOpen(false);
  }
  const onChangePersonel = (personel) => {
    setPartyPersonel(personel);
    setPersonelOpen(false);
  }

  // 멤버십 금액 Info Dialog를 Open / Close 하는 함수입니다. 
  const onClickMembershipPriceInfo = () => setMembershipPriceInfoStatus(!membershipPriceInfoStatus);

  // 총 금액 Info Dialog를 Open / Close 하는 함수입니다. 
  const onClickTotalPersonnelInfo = () => setTotalPersonnelInfoStatus(!totalPersonnelInfoStatus);

  const nextPage = () => {
    nextBtnStatus && updatePage(5);
  };

  return (
    <ChoosePaymentWrap style={{flexGrow: '1'}}>
      <div style={{flexGrow: '1'}}>
        <MainText style={{margin:'1rem 0 0'}}>
          <span className="yellowText">파티의 결제정보</span>
          를<br/>
          입력해주세요.
        </MainText>

        {/* Notice Div */}
        <NoticeWrap style={{boxShadow:'none', backgroundColor:'#fff8e8', margin:'1.1563rem 0 1.2813rem'}}>
          <div className="notice_sub_wrap align_center">
            <div>
              <img className="notice_img" src={icon_notice_duck}></img>
            </div>
            <div className="notice_text_div">
              구독파티는 
              <span className="boldText"> 한달주기로 정산</span>
              이 이루어져요! 
              <span className="boldText"> 실제 멤버십 금액</span>
              을 기준으로 정보를 입력해주세요.
            </div>
          </div>
        </NoticeWrap>

        {/* Subtitle */}
        <PartyDetailSubtitleSpan>결제 정보</PartyDetailSubtitleSpan>

        {/* 멤버십 금액 */}
        <TitleWrap style={{marginTop:'0.5rem', position:'relative'}}>
          멤버십 금액
          <InfoWrap>
            <img onClick={onClickMembershipPriceInfo} className="infoBtn" src={icon_info} />
          </InfoWrap>
          <MiniInfoDialog trianglePosition={'28%'} openStatus={membershipPriceInfoStatus}>
            설명이 들어갑니다. 설명이 들어갑니다. 설명이 들어갑니다. 설명이 들어갑니다.
          </MiniInfoDialog>
        </TitleWrap>
        <ItemWrap>
          <InputWrap>
            <Input type="number" placeholder="실제 멤버십 금액을 입력해주세요" onChange={handleChangeMembershipPrice} value={membershipPrice}></Input>
            <div className="notoBold" style={{ fontSize: '0.8125rem', color: 'rgba(49,49,49,0.31)' }}>￦(원)</div>
          </InputWrap>
        </ItemWrap>

        {/* 다음 결제일 */}
        <TitleWrap style={{marginTop:'0.5rem'}}>다음 결제일</TitleWrap>
        <InputWrap openStatus={paymentDayOpen} isBlocked={!paymentDay} onClick={onClickPaymentDayOpen}>
          <div>
            {
              paymentDay ? paymentDay :
                '결제일을 선택해주세요.'
            }
          </div>
          <div style={{ flexGrow: "1" }}></div>
          <div>
            {
              paymentDayOpen ?
                <img src={icon_arrow_up} style={{ width: "0.6875rem", height: "0.5rem" }} /> :
                <img src={icon_arrow_down} style={{ width: "0.6875rem", height: "0.5rem" }} />
            }
          </div>
        </InputWrap>
        <div>
          <Fade collapse when={paymentDayOpen} duration={500}>
            <SelectWrap>
              {
                NumberList.map((data, index) => {
                  return (
                    <SelectContent selectSatus={data == paymentDay} onClick={() => { onClickPaymentDayContent(data) }} key={index}>
                        {data}
                    </SelectContent>
                  )
                })
              }
            </SelectWrap>
          </Fade>
        </div>

        {/* 1인당 결제 금액 */}
        <TitleWrap style={{marginTop:'0.5rem'}}>1인당 결제 금액</TitleWrap>
        <ItemWrap>
          <InputWrap>
            <Input type="number" placeholder="1인당 내야할 금액을 입력해주세요" onChange={handleChangePricePerMember} value={pricePerMember}></Input>
            <div className="notoBold" style={{ fontSize: '0.8125rem', color: 'rgba(49,49,49,0.31)' }}>￦(원)</div>
          </InputWrap>
        </ItemWrap>

        {/* 모집 인원 */}
        <TitleWrap style={{marginTop:'0.5rem'}}>모집 인원</TitleWrap>
        <ItemWrap onClick={onClickPersonelOpen}>
          <InputWrap openStatus={personelOpen} isBlocked={partyPersonel === 0}>
            <div>
              {
                partyPersonel !== 0 ? partyPersonel :
                    '모집 인원을 선택해주세요'
              }
            </div>
            <div style={{ flexGrow: "1" }}></div>
            <div>
              {
                personelOpen ?
                    <img src={icon_arrow_up} style={{ width: "0.6875rem", height: "0.5rem" }} /> :
                    <img src={icon_arrow_down} style={{ width: "0.6875rem", height: "0.5rem" }} />
              }
            </div>
          </InputWrap>
        </ItemWrap>
        <div style={{ display: 'flex' }}>
          <div style={{ flexGrow: '1', flexBasis: '0'}}>
            <Fade collapse when={personelOpen} duration={500}>
              <SelectWrap>

                {
                  [2, 3, 4, 5, 6].map((data, index) => {
                    return (
                        <SelectContent selectSatus={data === partyPersonel} onClick={() => { onChangePersonel(data) }} key={index}>
                            {data}
                        </SelectContent>
                    )
                  })
                }

              </SelectWrap>
            </Fade>
          </div>
        </div>

        {/*  Bottom Notice Div*/}
        <BottomNoticeWrap openStatus={nextBtnStatus}>
          <div className="notice_wrap">
            <img className="notice_img" src={icon_notice_white_duck}></img>
            <div className="notice_text">
              <span className="weight_500">{today.getDate() > paymentDay ? today.getMonth()+2 : today.getMonth()+1}월 {paymentDay}일</span>
              부터 정산이 시작될 예정이에요. 10,000원의 멤버십에서 
              <span className="weight_600"> {pricePerMember*partyPersonel}원을 아낄 수 </span>
              있네요!
            </div>
          </div>
        </BottomNoticeWrap>


      </div>

      <BottomButton clickFunc={nextPage} text={'다음'} status={nextBtnStatus}/>
      


    </ChoosePaymentWrap>
  );
}

export default ChoosePayment;

const ChoosePaymentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
`;

const SelectWrap = styled.div`
  background-color:#ffffff;
  border:0.0625rem solid #e8e8e8;
  border-radius:'0.25rem';

  max-height:10.75rem;
  overflow-y:scroll;

  margin-top:0.3125rem;
  margin-bottom:1.125rem;

  box-shadow: 0 0 0.25rem 0.0625rem #efefef;
`;

const SelectContent = styled.div`
  font-size:0.75rem;
  color:#313131;
  height:0.75rem;
  padding:0.8125rem 0.875rem;

  background-color:${props => props.selectSatus ? 'rgba(216, 216, 216,0.15)' : '#ffffff'};
`;

const BottomNoticeWrap = styled.div`
  display : ${props => props.openStatus ? 'block' : 'none'};
  padding: 0.9688rem 1.1875rem 0.9rem 0.5687rem;
  background-color: #ffca17;
  border-radius: 0.1875rem;
  color: #fff;
  
  font-size: 0.75rem;
  font-family: 'Spoqa Han Sans';
  font-weight: 300;
  line-height: 1.67;
  margin-top: 0.5rem;
  margin-bottom: 3.125rem;
  position: relative;

  .notice_wrap {
    display: flex;
  }
  
  .notice_img {
    height: 100%;
  }

  .notice_text {
    margin-left: 0.35rem;
  }
  .weight_500 {
    font-weight: 500;
  }
  .weight_600 {
    font-weight: 600;
  }

  ::after{
    border-top:0px solid transparent; 
    border-left: 4px solid transparent; 
    border-right: 4px solid transparent; 
    border-bottom: 4px solid #ffca17; 
    position: absolute;
    content:"";
    top:-4px;
    left: 20%;
    transform:translate(-50%,0);
  }
`;