import { members } from "assets/ivemembers";
import {
  ContentText,
  FillBox,
  FillBoxTexts,
  FillContent,
  RegisterButton,
} from "components/styled/Styled";
import { useState } from "react";
import { useSelector } from "react-redux";

const FanletterWrite = ({ addButton }) => {
  // 닉네임,내용,보내는 멤버 useState
  const [detail, setDetail] = useState("");
  const [iveMember, setIveMember] = useState("안유진");

  const loginUser = useSelector((state) => {
    return state.authSlice;
  });
  // 내용 입력
  const onChangeDetail = (event) => {
    const inputValue = event.target.value;
    setDetail(inputValue);
  };
  // 멤버 선택
  const onChangeIveName = (event) => {
    const inputValue = event.target.value;
    setIveMember(inputValue);
  };

  return (
    <FillBox>
      <FillBoxTexts>
        <FillContent>닉네임:&nbsp;</FillContent>
        <p>{loginUser.nickname}</p>
      </FillBoxTexts>
      <FillBoxTexts>
        <FillContent>내용:&nbsp;</FillContent>
        <ContentText
          type="text"
          placeholder="최대 100자까지만 작성할 수 있습니다."
          value={detail}
          onChange={onChangeDetail}
        />
      </FillBoxTexts>
      <article>
        누구에게 보내실 건가요?&nbsp;
        <select onChange={onChangeIveName} value={iveMember}>
          {members.map((member) => {
            return (
              <option value={member} key={member}>
                {member}
              </option>
            );
          })}
        </select>
      </article>
      <RegisterButton
        onClick={() => {
          addButton({ detail, iveMember, setDetail, loginUser });
        }}
      >
        팬레터 등록
      </RegisterButton>
    </FillBox>
  );
};

export default FanletterWrite;
