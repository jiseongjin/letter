import { Link } from "react-router-dom";
import {
  FanLetterList,
  Fanletter,
  FanletterContent,
  FanletterDetail,
  Profile,
} from "../styled/Styled";

const Fanletters = ({ item }) => {
  return (
    // 디테일 페이지 이동
    <Link to={`/detail/${item.userId}`} state={{ item }}>
      <FanLetterList>
        <Fanletter>
          <Profile src={item.avatar} alt="" />
          <FanletterContent>
            <p>{item.nickname}</p>
            <p>{new Date(item.createdAt).toLocaleString()}</p>
            <FanletterDetail>{item.content}</FanletterDetail>
          </FanletterContent>
        </Fanletter>
      </FanLetterList>
    </Link>
  );
};

export default Fanletters;
