import React, {useState} from "react";
import styled from "styled-components";

const InputComponent = ({
  id,
  type,
  placeholder,
  maxLength,
  value,
  onChange,
  keyboardUp,
  setKeyboardUp,
  setFocusThree,
  setFocusTwo
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <InputWrap openStatus={isFocus}>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        onFocus={(e) => {
          setIsFocus(true);
          if(keyboardUp===true){
            setKeyboardUp(false);
            setFocusTwo(false);
            setFocusThree(false);
          }
        }}
        onBlur={(e) => {
          setIsFocus(false);
        }}
      ></Input>
    </InputWrap>
  );
};

const InputWrap = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;

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

export default InputComponent;
