import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { AlertPageWrapCloseAction, AlertPageCloseAction } from "../../reducers/main/alert";

import icon_back from "../../assets/icon-back-arrow.svg";

import { TextMiddle } from '../../styled/shared';
import { PageClose, PageWrapClose } from '../../reducers/info/page';


const PhoneChangePage = () => {

    const dispatch = useDispatch();

    //페이지 상태값
    const {
        loginSubPageKind
    } = useSelector(state => state.info.page);

    //state
    const [title, setTitle] = useState('');

    useEffect(() => {

        switch (loginSubPageKind) {
            case 'serviceDetail': {
                setTitle('서비스 이용약관');
                break
            }
            case 'personDetail': {
                setTitle('개인정보 수집 동의서');
                break
            }
            case 'marketingDetail': {
                setTitle('마케팅 정보 수집 동의서');
                break
            }
            default: {
                break
            }
        }

    }, [loginSubPageKind])

    const closePage = () => {

        test = false;

        dispatch({
            type: PageClose,
            data: 'loginPhone'
        });

        setTimeout(() => {
            dispatch({
                type: PageWrapClose,
                data: 'loginPhone'
            });
        }, 300)
    };



    return (
        <div>
            <PageWrap style={loginSubPageKind == 'loginPhone' ? { display: 'block' } : { display: 'none' }}>
                <HeaderWrap className="spoqaBold" onClick={closePage}>
                    <div className="back_link_sub" style={{ position: "absolute", top: "55%", left: "1.25rem", transform: "translate(0,-55%)" }}>
                        <img src={icon_back}></img>
                    </div>

                    <TextMiddle>휴대폰 번호 변경 안내</TextMiddle>
                </HeaderWrap>
                <div style={{ padding: '2.0625rem 1.25rem 0 1.25rem' }}>
                    <div className="spoqaBold" style={{ fontSize: '0.875rem', lineHeight: '1.4375rem', marginBottom: '0.625rem' }}>
                        <span style={{ marginRight: '0.375rem' }}>01</span>휴대폰 번호를 변경
                </div>
                    <div className="notoRegular" style={{ fontSize: '0.8125rem', lineHeight: '1.3125rem', color: 'rgba(49,49,49,0.65)', wordBreak: 'keep-all', marginBottom: '4.375rem' }}>
                        휴대폰 번호가 변경되었을 시, 마이페이지에서 전화번호 변경 기능을 사용하여 데이터 이전이 가능합니다.
                </div>

                    <div className="spoqaBold" style={{ fontSize: '0.875rem', lineHeight: '1.4375rem', marginBottom: '0.625rem' }}>
                        <span style={{ marginRight: '0.375rem' }}>02</span>휴대폰 번호와 휴대폰 기기 모두 변경
                </div>
                    <div className="notoRegular" style={{ fontSize: '0.8125rem', lineHeight: '1.3125rem', color: 'rgba(49,49,49,0.65)', wordBreak: 'keep-all' }}>
                        휴대폰 번호와 핸드폰 전부 변경되어서 불가능한 경우,  아래 내용을 1:1 문의로 남겨주시면 데이터를 이전해드립니다.
                    <br /><br />
                    1. 기존 전화번호<br />
                    2. 모두에서 제공한 고유번호 6자리
                </div>
                </div>
                <a href="https://pf.kakao.com/_tKfKs" target="blank" style={{ textDecoration: 'none' }}>
                    <QuestionButtonWrap pageConfirmStatus={false}>
                        <div className="spoqaBold" style={{ width: '100%', textAlign: 'center' }}>
                            1:1 문의하기
                </div>
                    </QuestionButtonWrap>
                </a>

            </PageWrap>

            <PageWrap style={loginSubPageKind != 'loginPhone' ? { display: 'block' } : { display: 'none' }}>
                <HeaderWrap className="spoqaBold" onClick={closePage}>
                    <div className="back_link_sub" style={{ position: "absolute", top: "55%", left: "1.25rem", transform: "translate(0,-55%)" }}>
                        <img src={icon_back}></img>
                    </div>
                    <TextMiddle>
                        {title}
                    </TextMiddle>
                </HeaderWrap>

                {/* 이용약관 */}
                <AgreeContentWrap className="notoRegular" style={loginSubPageKind == 'serviceDetail' ? { display: 'block' } : { display: 'none' }}>
                    서비스 이용 약관<br />
                    <br />
                    사용자 여러분 안녕하세요.<br />
                    항상 저희 서비스를 이용해 주셔서 감사합니다. 구독 관리 서비스를 제공하는 모두가 준비한 약관을 읽어주시면 감사드리겠습니다.<br />
                    <br />
                    제 1조(목적)<br />
                    <br />
                    본 약관은 팀모두(이하 “회사”라고 함)가 제공하는 ‘모두 - 나의 구독 서비스 관리’(이하 “모두 앱”이라고 함)를 이용함에 있어 회사와 이용자의 권리ㆍ의무 및 책임사항, 서비스의 이용과 절차, 기타 필요한 사항을 목적으로 합니다.<br />
                    <br />
                    제 2조(정의)<br />
                    <br />
                    ① 서비스 : 회사의 어플리케이션 및 웹 사이트를 통해 사용자에게 제공하는 모든 서비스를 말합니다.<br />
                    <br />
                    ② 회원 : 이 약관에 승인하고 회사와 서비스 이용계약을 체결한 자를 말합니다.<br />
                    <br />
                    ③ 비회원 : 회원가입을 하지 않고 회사가 제공하는 서비스를 이용하는 모든 고객을 말합니다.<br />
                    <br />
                    ④ 사용자 : 회원과 비회원을 합한 모든 고객<br />
                    <br />
                    제 3조(약관 등의 명시와 설명 및 개정)<br />
                    <br />
                    회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스가 제공되는 모바일 어플리케이션 및 웹 사이트에 게시합니다.<br />
                    <br />
                    회사는 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.<br />
                    <br />
                    본 약관이 변경되는 경우 변경 사항을 서비스 초기화면에 게시하며, 변경 된 약관은 게시한 날로부터 7일 후부터 효력이 발생합니다.<br />
                    <br />
                    변경된 약관을 게시한 날로부터 효력이 발생되는 날까지 약관변경에 대한 사용자의 의견을 기다릴 것이며, 위 기간이 지나도록 사용자의 의견이 접수되지 않으면, 사용자가 변경된 약관에 따라 서비스를 이용하는 데 동의하는 것으로 보겠습니다.<br />
                    <br />
                    사용자가 변경된 약관에 동의하지 않는 경우 해당 서비스의 이용이 더 이상 불가능하게 됩니다.<br />
                    <br />
                    제 4조(서비스의 이용계약의 성립)<br />
                    <br />
                    회사가 제공하는 서비스에 관한 이용계약<br />
                    <br />
                    이용신청자는 실명으로 가입신청을 하여야 하며, 실명이 아니거나 타인의 정보를 도용하여 회원으로 가입한 자는 회사가 제공하는 서비스를 이용할 수 없으며, 이용하여서도 안됩니다.<br />
                    <br />
                    회사와 회원 사이 서비스 이용계약은 이용하고자 하는 자가 애플리케이션 또는 웹 사이트를 통해 회사가 정한 양식에 따라 회원가입을 하고, “이용약관”과 “개인정보 처리방침”, “개인 정보 수집, 이용 동의서”의 내용에 동의를 해 회사가 승낙하며 이뤄집니다.<br />
                    <br />
                    회사는 가입신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로합니다. 단, 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.<br />
                    <br />
                    다른 사람의 명의나 휴대전화 번호 등 개인정보를 이용해 계정을 생성하려 한 경우<br />
                    <br />
                    가입신청자가 이 약관에 의해 이전에 회원자격을 상실한 적이 있는 경우<br />
                    <br />
                    허위 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우<br />
                    <br />
                    사기 정보 모음 사이트나 정부기관 사이트 등에서 거래 사기 이력이 있는 휴대전화 번호로 확인된 경우<br />
                    <br />
                    회원의 이용 목적이나 서비스 이용 방법이 회사의 재산권이나 영업권을 침해하거나 침해할 우려가 있는 경우<br />
                    <br />
                    회사의 정책에 적합하지 않는 회원으로 판단되는 경우 또는 서비스 제공이 곤란한 경우<br />
                    <br />
                    부정한 용도로 서비스를 사용하고자 하는 경우<br />
                    <br />
                    이용자의 귀책 사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우<br />
                    <br />
                    제 5조(서비스의 중단)<br />
                    서비스는 장비의 유지ㆍ보수를 위한 정기 또는 임시 점검 또는 다른 상당한 이유로 서비스의 제공이 일시 중단될 수 있으며, 이때는 미리 공지하겠습니다. 만약, 예측할 수 없는 이유로 서비스가 중단된다면 상황을 파악하는 즉시 통지하도록 하겠습니다.<br />
                    <br />
                    <br />
                    제 6조(이용신청 및 체결)<br />
                    <br />
                    서비스를 이용하고자 하는 자는 회사가 온라인으로 제공하는 가입신청양식에 따라 사실대로 기재하여야 합니다. 또한, 휴대번호를 이용한 본인인증 절차를 필요로 합니다.<br />
                    <br />
                    서비스 이용을 위해 필요한 개인 정보의 수집과 이용에 대한 동의를 받을 수 있습니다.<br />
                    <br />
                    가입 신청자가 1,2항에 정한 사항을 거부할 경우 회원가입 및 서비스 이용이 제한될 수 있으며, 타인의 정보를 도용하여 회원으로 가입한 자는 서비스를 이용할하여서는 안 됩니다.<br />
                    <br />
                    회원은 회원 가입 시 기재한 개인정보의 내용에 변경이 발생한 경우, 변경사항을 정정하여 기재하여야 합니다. 변경의 지체로 인해 발생한 회원의 불이익에 회사는 책임을 지지 않습니다.<br />
                    <br />
                    제 7조(이용계약의 종료)<br />
                    <br />
                    사용자는 서비스의 이용을 더 이상 원치 않을 때에는 언제든지 애플리케이션 내에서 제공되는 메뉴를 이용하여 서비스 이용계약의 해지 신청을 할 수 있으며, 회사는 법령이 정하는 바에 따라 신속히 처리합니다.<br />
                    <br />
                    이용계약은 회원의 해지의사가 회사에게 도달한 때에 종료됩니다.<br />
                    <br />
                    이용계약이 해지되면 법령 및 개인정보처리방침에 따라 사용자 정보를 보유하는 경우를 제외하고는 사양자 정보나 사용자가 작성한 게시물 등 모든 데이터는 삭제됩니다. 다만, 다른 회원에 의해 스크랩되어 등록된 게시물은 삭제되지 않습니다.<br />
                    <br />
                    제 4조 4항에 의한 이유에 의해서 회사가 계약을 해지할 수 있습니다.<br />
                    <br />
                    제 8조(회원에 대한 통지)<br />
                    <br />
                    회사가 회원에 대한 통지를 하는 경우, 회원이 지정한 휴대전화 번호로 통지합니다.<br />
                    <br />
                    회사는 불특정다수 회원에 대한 통지의 경우 1주일간 공지사항에 게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.<br />
                    <br />
                    제 9조(회사의 의무)<br />
                    <br />
                    회사는 계속적이고 안정적인 서비스를 제공하기 위해 최선을 다합니다.<br />
                    <br />
                    회사는 회원이 안전하게 서비스를 이용할 수 있도록 제공하는 서비스에 적합한 보안시스템을 갖추고 운영합니다.<br />
                    <br />
                    회사는 회원으로부터 제기되는 불만이 정당하다고 인정할 경우 이를 처리하여야 합니다. 이때 처리과정을 회원에게 전달합니다.<br />
                    <br />
                    회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전자상거래법 등의 서비스의 운영, 유지와 관련 있는 법규를 준수합니다.<br />
                    <br />
                    제 10조(회원의 의무)<br />
                    <br />
                    회원의 휴대폰번호의 관리책임은 회원에게 있으며, 이를 제3자가 이용하도록 해서는 안됩니다.<br />
                    <br />
                    회원은 다음 건에 해당하는 행위를 해서는 안됩니다.<br />
                    <br />
                    이용 신청 또는 회원정보 변경 시 허위내용 등록<br />
                    <br />
                    타인의 정보를 도용<br />
                    <br />
                    회사가 게시한 정보의 변경<br />
                    <br />
                    운영자, 회사를 사칭 및 정보를 도용<br />
                    <br />
                    회사와 다른 회원을 위협하거나 명예를 손상시키는 행위<br />
                    <br />
                    해킹을 통해 다른 사용자의 정보를 취득하는 행위<br />
                    <br />
                    기타 현행 법령에 위반되는 불법적인 행위<br />
                    <br />
                    회원은 이 약관의 규정, 이용안내 및 서비스와 관련한 공지사항, 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 해서는 안 됩니다.<br />
                    <br />
                    회원은 회사의 사전 허락 없이 회사가 정한 이용 목적과 방법에 반하여 영업/광고활동 등을 할 수 없고, 회원의 서비스 이용이 회사의 재산권, 영업권 또는 비즈니스 모델을 침해하여서는 안됩니다.<br />
                    <br />
                    제 11조(회원정보의 변경)<br />
                    <br />
                    회원이 직접 입력하거나 회원의 동의 하에 수집되는 정보가 변경되었을 경우, 회원은 변경사항을 수정해야합니다.<br />
                    <br />
                    회원정보가 변경되었음에도 해당 사항을 수정하지 않아 발생한 각종 손해 또는 잘못된 수정으로 인한 손해에 대해 회사는 아무런 책임을 지지 않습니다.<br />
                    <br />
                    제 12조(서비스의 제공 및 변경)<br />
                    <br />
                    회사는 다음과 같은 서비스를 제공합니다.<br />
                    <br />
                    사용자가 등록한 구독 서비스 관리<br />
                    구독 서비스명<br />
                    결제 금액<br />
                    멤버십 종류<br />
                    카테고리<br />
                    결제주기<br />
                    체험기간<br />
                    다음 결제일<br />
                    구독 서비스 결제일 전 푸시알림<br />
                    <br />
                    사용자의 소비내역 분석<br />
                    사용중인 구독 서비스 카테고리별 이용 현황 표출<br />
                    이번 달 결제 예정 비용 표출<br />
                    저번달 결제 금액, 다음달 결제 예정 금액 표출<br />
                    <br />
                    인기있는 구독 서비스 추천<br />
                    <br />
                    사용자 정보 변경<br />
                    이름 변경<br />
                    전화번호 변경<br />
                    회사는 전항의 서비스 내용을 추가하거나 변경할 수 있으며, 변경이 예정된 경우 내용을 미리 사용자에게 통지합니다.<br />
                    <br />
                    회사가 제공하는 서비스의 형태와 기능, 디자인 등은 필요한 경우 수시로 변경되거나 중단될 수 있습니다. 회사는 이 경우 개별적인 변경에 대해서는 회원에게 사전 통지하지 않습니다. 단, 회원에게 불리할 것이라 판단되는 내용에 경우 푸시알림 또는 휴대폰 메시지를 통해 미리 공지합니다.<br />
                    <br />
                    서비스가 변경 및 중단될 경우 무료 제공되는 서비스에 대해서는 회원에게 별도로 보상하지 않습니다.<br />
                    <br />
                    제 13조(서비스의 제한 및 중단)<br />
                    <br />
                    회사는 천재지변이나 국가비상사태, 해결이 곤란한 기술적 결함 또는 서비스 운영의 심각한 변화 등 불가항력적인 경우가 발생 또는 발생이 예상될 때는 서비스의 전부 또는 일부를 예고 없이 제한하거나 중지할 수 있습니다.<br />
                    <br />
                    회사는 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간 서비스를 제공합니다. 단, 정보통신설비 시스템 정기점검, 서버의 증설 및 교체, 버그 패치, 새로운 서비스로의 교체 등 운영상 필요한 경우, 일정기간 동안 서비스를 일시 중지할 수 있습니다.<br />
                    <br />
                    서비스를 이용하게 됨으로써 이용약관에 명시된 사항 및 서비스 영역 외에서 발생하는 회원 사이의 문제에 대해 회사는 책임을 지지 않습니다.<br />
                    <br />
                    회원의 관리 소홀에 의해 본인인증이 되어 서비스 이용상의 데이터 손실 및 변조 또는 손해가 발생하거나 제 3자에 의한 부정이용 등으로 회원의 의무조항을 위반한 경우 해당 아이디의 이용이 제한될 수 있습니다.<br />
                    <br />
                    회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 공지사항에 공시한 바에 따릅니다.<br />
                    <br />
                    사용자가 본 약관에 위배되는 행동을 한 경우, 서비스 이용 제한 및 동의 없이 이용계약을 해지할 수 있습니다.<br />
                    <br />
                    제 14조(서비스 고지 및 광고의 게재)<br />
                    <br />
                    회사는 서비스 운영과 관련하여 회원이 입력한 정보를 활용해 광고를 게재할 수 있습니다. 회원은 서비스 이용 시 노출되는 맞춤 광고 게재에 대해 동의합니다.<br />
                    <br />
                    회사는 사전 동의를 한 회원에 한해 마케팅 관련 정보 송신을 할 수 있습니다.<br />
                    <br />
                    회사는 광고에 회원이 참여해 제 3자와 거래를 함으로써 발생하는 손실과 손해에 대해서는 어떠한 책임도 부담하지 않습니다.<br />
                    <br />
                    제 15조(저작권의 귀속 및 이용제한)<br />
                    <br />
                    사용자가 게시한 게시물 등의 저작권은 해당 게시물의 저작자에게 귀속됩니다.<br />
                    <br />
                    사용자의 게시물이 정보통신망법 및 저작권법 등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 회사는 관련법에 따라 조치를 취하여야 합니다.<br />
                    <br />
                    게시물 등은 사이트를 통해 노출될 수 있으며, 검색결과 또는 관련 프로모션 등에도 노출될 수 있습니다. 해당 노출을 위해 필요한 범위내에서 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우, 회사는 저작권법 규정을 준수하며, 사용자는 언제든지 고객 문의를 통해 해당 게시물 등에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 회사에 요청할 수 있습니다.<br />
                    <br />
                    <br />
                    제 16조(손해배상)<br />
                    <br />
                    회사의 과실로 인하여 사용자가 손해를 입게 될 경우 법령에 따라 사용자의 손해를 배상하여야 합니다. 단, 회사의 제휴사가 제공하는 서비스의 하자로 인한 피해, 서비스에 접속 또는 이용과정에서 발생하는 개인적인 손해, 제 3자가 불법으로 회사의 서버에 접속해 서버를 이용해 발생하는 손해 등에 대하여 책임을 부담하지 않습니다. 또한 법률상 허용되는 한도 내에서 간접 손해, 특별 손해, 결과적 손해, 징계적 손해, 및 징벌적 손해에 대한 책임을 부담하지 않습니다.<br />
                    <br />
                    사용자가 이 약관의 의무를 위반함으로 인해 회사에 손해를 입힌 경우 또는 사용자가 서비스의 이용과 관련해 회사에 손해를 입힌 경우 회사에 대하여 손해를 배상하여야 합니다.<br />
                    <br />
                    사용자가 서비스를 이용함에 있어 행한 불법행위 또는 본 약관을 위반한 행위로 회사가 당해 제 3자로부터 손해배상청구 또는 소송 등 각종 불이익을 받는 경우, 해당 이용자는 자신의 책임과 비용으로 회사를 면책시켜야 하며, 회사가 면책되지 못한 경우 해당 사용자는 그에따라 회사에 발생한 모든 손해를 배상할 책임이 있습니다.<br />
                    <br />
                    제 17조(책임의 한계)<br />
                    <br />
                    회사는 회원의 약관, 서비스 이용 방법 및 이용 기준을 준수하지 않는 등 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.<br />
                    <br />
                    회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임을 부담하지 않습니다.<br />
                    <br />
                    회사는 사전에 공지된 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 서비스가 중지되거나 장애가 발생한 경우에 대하여 책임이 면책됩니다.<br />
                    <br />
                    회사는 서비스를 통하여 게재된 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 보증하지 않습니다.<br />
                    <br />
                    회사는 회원 간 또는 회원과 제 3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에 대하여 책임을 부담하지 않습니다.<br />
                    <br />
                    회사는 무료로 제공되는 서비스 이용관 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.<br />
                    <br />
                    회사는 회원이 서비스를 이용하여 기대하는 효용을 얻지 못한 것에 대해 책임을 지지 않으며 서비스에 대한 취사 선택 또는 이용으로 발생하는 손해 등에 대하여 책임이 면제됩니다.<br />
                    <br />
                    제 18조(사용자 의견)<br />
                    <br />
                    사용자는 언제든지 1:1 문의(카카오톡 채널)를 통해 회사에 의견을 보낼 수 있습니다. 회사는 회원에게 푸시 알림, 카카오톡 채널, 휴대폰 메시지 등으로 여러 가지 소식 및 알림을 드릴 것이며, 사용자 모두에게 해당하는 공지는 공지사항 메뉴에 게시함으로 효력이 발생합니다.<br />
                    <br />
                    제 19조(준거법 및 재판관할)<br />
                    <br />
                    회사와 회원 간 제기된 소송에는 대한민국법을 준거법으로 합니다.<br />
                    <br />
                    회사와 회원간 발생한 분쟁에 관한 소송은 민사소송법 상의 관할법원에 제소합니다.<br />
                    <br />
                    제 20조(부칙)<br />
                    본 약관은 2021년 7월 1일부터 시행합니다.
                </AgreeContentWrap>

                {/* 개인정보 수집 동의서 */}
                <AgreeContentWrap className="notoRegular" style={loginSubPageKind == 'personDetail' ? { display: 'block' } : { display: 'none' }}>
                    개인정보 수집 및 활용에 대한 이용 동의서<br />
                    <br />
                    「팀모두」 운영을 위하여 다음과 같은 내용의 개인정보 수집·이용 및 제3자 제공을 하고자 합니다. 내용을 자세히 읽으신 후 동의 여부를 결정하여 주십시오.<br />
                    <br />
                    ※ 개인정보의 수집항목 및 수집방법<br />
                    <br />
                    팀모두가 제공하는 서비스 이용을 위한 신청인의 개인정보를 수집하고 있습니다.<br />
                    <br />
                    가. 개인정보 수집이용자 : 팀모두<br />
                    나. 개인정보 수집방법 : 회원가입(이용 신청)<br />
                    다. 개인정보 이용내역: 서비스내 회원 구분, 본인인증, 푸시알림<br />
                    라. 개인정보 수집내역: 성명, 휴대전화 번호, 성별, 연령대<br />
                    <br />
                    ※ 개인정보의 수집.이용목적 및 보유.이용기간<br />
                    <br />
                    정보  제공자가 제공한 모든 정보는 「팀모두」의 원활한 운영을 위하여 사용됩니다. 신청인의 개인정보는 5년 동안 수집 ·이용합니다.<br />

                </AgreeContentWrap>

                {/* 마케팅 정보 수집 동의서 */}
                <AgreeContentWrap className="notoRegular" style={loginSubPageKind == 'marketingDetail' ? { display: 'block' } : { display: 'none' }}>
                    마케팅 정보 수집 동의 상세 내용
                </AgreeContentWrap>

            </PageWrap>
        </div>
    )
};

const PageWrap = styled.div`

    position:absolute;
    top:3.0625rem;
    left:0;
    right:0;
    bottom:0;

    display:flex;
    flex-direction:column;

    overflow-y:scroll;
`;
const HeaderWrap = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;

    height:3.0625rem;

    background-color:#ffffff;
    text-align:center;

    font-size:0.875rem;
    color:#313131;
    
    box-shadow: 0 0 0.25rem 0.0625rem #efefef;
`;


const QuestionButtonWrap = styled.div`
    position:absolute;

    left:0;
    right:0;
    bottom: 0;

    display:flex;
    margin:1.25rem;

    background-color:#ffca17;
    border-radius:0.375rem;

    padding:0.875rem 0 0.8125rem 0;

    font-size:0.8125rem;
    color:#ffffff;
`;

const AgreeContentWrap = styled.div`
    padding:1rem 1.25rem;
    font-size:0.8125rem;

    line-height:1.3125rem;

    color:#313131;
    opacity:0.65;

    word-break:keep-all;
`;

export default PhoneChangePage;