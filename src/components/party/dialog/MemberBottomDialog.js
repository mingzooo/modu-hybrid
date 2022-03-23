import { useDispatch, useSelector } from "react-redux";
import { MemberBottomDialogCloseAction } from "../../../reducers/party/popup";
import { BottomDialogDiv, BottomDialogWrap } from "../../../styled/shared/wrap";

const MemberBottomDialog = () => {

  const dispatch = useDispatch();
  const { memberBottomDialogStatus } = useSelector(state => state.party.popup);

  const closeDialog = () => {
    dispatch(MemberBottomDialogCloseAction);
  };

  return(
    <BottomDialogWrap openStatus={memberBottomDialogStatus}>
      <BottomDialogDiv>
        <div className="btn_style margin_bottom">
          {/* 해지하기 or 해지 취소하기 */}
          <div className="one_btn gray_border_bottom">해지하기</div>
          <div className="one_btn">신고하기</div>
        </div>
        <div onClick={closeDialog} className="btn_style one_btn">취소</div>
      </BottomDialogDiv>
    </BottomDialogWrap>
  );
}

export default MemberBottomDialog;

