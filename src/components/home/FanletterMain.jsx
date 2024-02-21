import GlobalStyle from "components/GlobalStyle";
import React, { useEffect, useState } from "react";
import { Main, NoFanletter } from "../styled/Styled";
import Fanletters from "./Fanletters";
import IveMembers from "./IveMembers";
import FanletterWrite from "./FanletterWrite";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { liginData } from "shared/redux/modules/authSlice";
import { addLetters, getLetters } from "shared/redux/modules/lettersSlice";

function FanletterMain() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const letters = useSelector((state) => {
    return state.lettersSlice;
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "https://moneyfulpublicpolicy.co.kr/user",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(liginData(response.data));
      } catch (error) {
        alert("로그인이 실패했습니다");
        navigate("/");
      }
    };
    fetchData();
    fetchLetters();
  }, [navigate, dispatch]);

  const fetchLetters = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}?_sort=createdAt,-views`
    );
    dispatch(getLetters(data.reverse()));
  };

  // 팬레터 추가 버튼
  const addButton = async ({ content, iveMember, setContent, loginUser }) => {
    const newLetter = {
      id: crypto.randomUUID(),
      nickname: loginUser.nickname,
      content,
      avatar: "",
      writedTo: iveMember,
      createdAt: Date(),
      userId: loginUser.id,
    };
    if (newLetter.content.length <= 0 || newLetter.content.length > 100) {
      alert(
        "닉네임, 내용이 공백 또는 형식에 맞지 않습니다.(닉네임 최대 20자 / 내용 최대 100자)"
      );
    } else {
      axios.post(process.env.REACT_APP_SERVER_URL, newLetter);
      dispatch(addLetters(newLetter));
      setContent("");
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
    const filteredLetters = letters?.filter(
      (item) => selectedMember === "" || item.writedTo === selectedMember
    );
    if (filteredLetters && filteredLetters.length > 0) {
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
