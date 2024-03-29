import React, { useCallback, useState } from "react";
import styled from "styled-components";

import delete_icon from "../../assets/ic_card_numberdelete@3x.png";

const Keyboard = ({setKeyboardUp, num2, num3, setNum2, setNum3, two, setTwo, three, setThree, handleChangeThree}) => {
  let nums_init = Array.from({ length: 10 }, (v, k) => k);
  const [nums, setNums] = useState(nums_init);

  
  const shuffle = (nums) => {
    let num_length = nums.length;
    while (num_length) {
      let random_index = Math.floor(num_length-- * Math.random());
      let temp = nums[random_index];
      nums[random_index] = nums[num_length];
      nums[num_length] = temp;
    }
    return nums;
  };

  const handlePasswordChange = useCallback(
    (num) => {
      if(two){
        if(num2.length>=4){
          setTwo(false);
          setThree(true);
          return;
       }
        setNum2(num2+num);
        if (num2.length >= 3) {
          setTwo(false);
          setThree(true);
       }
      }

      if(three){
        if(num3.length>=4){
          setThree(false);
          setKeyboardUp(false);
          return;
        }
        setNum3(num3+num);
        if (num3.length >= 3) {
        setThree(false);
        setKeyboardUp(false);
        handleChangeThree();
       }
      }
    },
    [two, three, num2, num3]
  );

  const erasePasswordOne = 
    (e) => {
      if(two){
        setNum2(
          num2.slice(0, num2.length === 0 ? 0 : num2.length - 1)
        );
      }
      if(three){
        setNum3(
          num3.slice(0, num3.length === 0 ? 0 : num3.length - 1)
        );
      }
    }

  const shuffleNums = useCallback(
    (num) => (e) => {
      // 0 ~ 9 섞어주기
      let nums_random = Array.from({ length: 10 }, (v, k) => k); // 이 배열을 변경해 입력문자 변경 가능
      setNums(shuffle(nums_random));
      handlePasswordChange(num);
    },
    [handlePasswordChange]
  );

  const closeKeyboard = () =>{
    setKeyboardUp(false);
    if(two===true){
      setTwo(false);
    }
    if(three===true){
      setThree(false);
    }
  }

  return (
      <KeyboardWrap>
        <span className="notoMedium" onClick={closeKeyboard}>닫기</span>
        <ButtonWrap>
          {nums.map((n, i) => {
            const Basic_button = (
              <NumberButton value={n} onClick={shuffleNums(n)} key={n.id}>
                {n}
              </NumberButton>
            );
            return i == nums.length - 1 ? (
              <>
                <NumberButton></NumberButton>
                {Basic_button}
              </>
            ) : (
              Basic_button
            );
          })}
          <NumberButton onClick={erasePasswordOne}><img src={delete_icon} className="erase-img"/></NumberButton>
        </ButtonWrap>
      </KeyboardWrap>
  );
};

const KeyboardWrap = styled.div`
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height: 18.5625rem;
  background-color: #fff;
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 1.4375rem 2.5rem;
  border-radius: 1.25rem;

  span{
    text-align: right;
    font-size: 0.75rem;
    color: #6a6a6a;
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 0.375rem;
`;

const NumberButton = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  width: 5rem;
  height: 2.625rem;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;

  .erase-img{
    width:1.325rem;
    height: 0.9688rem;
  }
`;

export default Keyboard;