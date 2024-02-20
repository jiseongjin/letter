import { members } from "assets/ivemembers";
import {
  ContentText,
  FillBox,
  FillBoxTexts,
  FillContent,
  NameText,
  RegisterButton,
} from "components/styled/Styled";
import { useState } from "react";

const FanletterWrite = ({ addButton }) => {
  // 닉네임,내용,보내는 멤버 useState
  const [userName, setUserName] = useState("");
  const [detail, setDetail] = useState("");
  const [iveMember, setIveMember] = useState("안유진");

  // 닉네임 입력
  const onChangeName = (event) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
  };
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
        <NameText
          type="text"
          placeholder="최대 20글자까지 작성할 수 있습니다."
          value={userName}
          onChange={onChangeName}
        />
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
          addButton({ userName, detail, iveMember });
        }}
      >
        팬레터 등록
      </RegisterButton>
    </FillBox>
  );
};

export default FanletterWrite;
