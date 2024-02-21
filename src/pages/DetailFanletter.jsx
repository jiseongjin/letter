import axios from "axios";
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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { liginData } from "shared/redux/modules/authSlice";
import { getLetters } from "shared/redux/modules/lettersSlice";

function DetailFanletter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [onFix, setOnFix] = useState(true);
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
        alert("로그인에 실패했습니다.");
        navigate("/");
      }
    };
    fetchData();
    fetchLetters();
  }, [navigate, dispatch]);

  const reduxLetters = useSelector((state) => {
    return state.lettersSlice;
  });

  const fetchLetters = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}?_sort=createdAt,-views`
    );
    dispatch(getLetters(data.reverse()));
  };

  const foundLettr = reduxLetters.find((item) => item.userId === params.id);
  // 수정 버튼
  const editButton = () => {
    setOnFix(false);
  };

  const [editText, setEditText] = useState(foundLettr.content);
  const changContent = (event) => {
    const inputValue = event.target.value;
    setEditText(inputValue);
  };

  //수정 완료 버튼
  const updateButton = async (id) => {
    if (foundLettr.content === editText) {
      alert("수정된 부분이 없습니다.");
    } else {
      axios.patch(`${process.env.REACT_APP_SERVER_URL}/${id}`, {
        content: editText,
      });
      setOnFix(true);
      navigate("/home");
    }
  };
  // 삭제 버튼
  const deleteButton = async (id) => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      axios.delete(`${process.env.REACT_APP_SERVER_URL}/${id}`);
      navigate("/home");
    }
  };
  return (
    <>
      <Link to={"/home"}>
        <MoveHomeButton>홈으로</MoveHomeButton>
      </Link>
      <DetailMain>
        <LetterDetailBox>
          <section>
            <LetterUser>
              <ImgUserName>
                <UserImg src={foundLettr.avatar} alt="" />
                <p>{foundLettr.nickname}</p>
              </ImgUserName>
              <time>{new Date(foundLettr.createdAt).toLocaleString()}</time>
            </LetterUser>
            <DetailIveName>To: {foundLettr.writedTo}</DetailIveName>
            <Detail disabled={onFix} onChange={changContent}>
              {editText}
            </Detail>
          </section>
          <DetailBoxButtons>
            {onFix ? (
              <>
                <BoxButton onClick={editButton}>수정</BoxButton>
                <BoxButton onClick={() => deleteButton(foundLettr.id)}>
                  삭제
                </BoxButton>
              </>
            ) : (
              <BoxButton onClick={() => updateButton(foundLettr.id)}>
                수정완료
              </BoxButton>
            )}
          </DetailBoxButtons>
        </LetterDetailBox>
      </DetailMain>
    </>
  );
}

export default DetailFanletter;
