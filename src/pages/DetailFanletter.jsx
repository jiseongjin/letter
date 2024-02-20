import {
  BoxButton,
  Detail,
  DetailBoxButtons,
  DetailIveName,
  DetailMain,
  ImgUserName,
  LetterDetailBox,
  LetterUser,
  MoveHomeButton,
  UserImg,
} from "components/styled/Styled";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  editedButton,
  deleteLetter,
} from "shared/redux/modules/fanLettersReducer";

function DetailFanletter() {
  // redux 데이터
  const reduxData = useSelector((state) => {
    return state.fanLettersReducer;
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const foundData = location.state.item;
  console.log(navigate);

  const [onFix, setOnFix] = useState(true);

  // 수정 버튼
  const editButton = () => {
    setOnFix(false);
    console.log("생각중");
  };

  const [editText, setEditText] = useState(foundData.detail);
  const changDetail = (event) => {
    const inputValue = event.target.value;
    setEditText(inputValue);
  };

  //수정 완료 버튼
  const addButton = () => {
    if (foundData.detail === editText) {
      alert("수정된 부분이 없습니다.");
    } else {
      const addFanLetter = reduxData.map((item) =>
        item.id === foundData.id ? { ...item, detail: editText } : item
      );
      dispatch(editedButton(addFanLetter));
      setOnFix(true);
      navigate("/");
    }
  };
  // 삭제 버튼
  const deleteButton = () => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      const updatFanletters = reduxData.filter(
        (item) => item.id !== foundData.id
      );
      dispatch(deleteLetter(updatFanletters));
      navigate("/");
    }
  };
  return (
    <>
      <Link to={"/"}>
        <MoveHomeButton>홈으로</MoveHomeButton>
      </Link>
      <DetailMain>
        <LetterDetailBox>
          <section>
            <LetterUser>
              <ImgUserName>
                <UserImg src={foundData.avatar} alt="이미지" />
                <p>{foundData.name}</p>
              </ImgUserName>
              <time>{new Date(foundData.date).toLocaleString()}</time>
            </LetterUser>
            <DetailIveName>To: {foundData.iveName}</DetailIveName>
            <Detail disabled={onFix} onChange={changDetail}>
              {editText}
            </Detail>
          </section>
          <DetailBoxButtons>
            {onFix ? (
              <>
                <BoxButton onClick={editButton}>수정</BoxButton>
                <BoxButton onClick={deleteButton}>삭제</BoxButton>
              </>
            ) : (
              <BoxButton onClick={addButton}>수정완료</BoxButton>
            )}
          </DetailBoxButtons>
        </LetterDetailBox>
      </DetailMain>
    </>
  );
}

export default DetailFanletter;
