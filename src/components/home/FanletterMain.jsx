import GlobalStyle from "components/GlobalStyle";
import React, { useState } from "react";
import { Main, NoFanletter } from "../styled/Styled";
import Fanletters from "./Fanletters";
import IveMembers from "./IveMembers";
import FanletterWrite from "./FanletterWrite";
import { useDispatch, useSelector } from "react-redux";
import { addLetter } from "../../shared/redux/modules/fanLettersReducer.js";

function FanletterMain() {
  // redux 데이터
  const lettersData = useSelector((state) => {
    return state.fanLettersReducer;
  });

  // dispatch
  const dispatch = useDispatch();

  // 팬레터 추가 버튼
  const addButton = ({
    userName,
    detail,
    iveMember,
    setUserName,
    setDetail,
  }) => {
    const newLetter = {
      date: Date(),
      name: userName,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaW3SfW7ZP7a7QSiL5_hliZmyZukjKufZQwg&usqp=CAU",
      detail,
      iveName: iveMember,
      id: crypto.randomUUID(),
    };
    if (
      newLetter.name.length <= 0 ||
      newLetter.name.length > 20 ||
      newLetter.detail.length <= 0 ||
      newLetter.detail.length > 100
    ) {
      alert(
        "닉네임, 내용이 공백 또는 형식에 맞지 않습니다.(닉네임 최대 20자 / 내용 최대 100자)"
      );
    } else {
      dispatch(addLetter(newLetter));
      setUserName("");
      setDetail("");
    }
  };

  // 선택 멤버 저장
  const [selectedMember, setSelectedMember] = useState("");
  // 멤버 선택시 팬레터 변경
  const selectMembers = (event) => {
    const inputValue = event.target.value;
    setSelectedMember(inputValue);
  };

  // 팬레터 리스트 함수
  const renderFilteredMembers = () => {
    const filteredLetters = lettersData.filter(
      (item) => selectedMember === "" || item.iveName === selectedMember
    );
    if (filteredLetters.length > 0) {
      return filteredLetters.map((item) => (
        <Fanletters key={item.id} item={item} />
      ));
    } else {
      return (
        <NoFanletter>
          아직 등록된 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되주세요!
        </NoFanletter>
      );
    }
  };

  return (
    <>
      <GlobalStyle />
      <Main>
        {/* 멤버 선택 버튼 */}
        <IveMembers
          selectMembers={selectMembers}
          selectedMember={selectedMember}
        />
        {/* 팬레터 작성  */}
        <FanletterWrite addButton={addButton} />
        <div>
          {/* 팬레터 리스트들 map */}
          {renderFilteredMembers()}
        </div>
      </Main>
    </>
  );
}

export default FanletterMain;
