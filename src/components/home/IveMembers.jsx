import { members } from "assets/ivemembers";
import { MemberNames, NameButton } from "components/styled/Styled";

const IveMembers = ({ selectMembers, selectedMember }) => {
  return (
    <MemberNames>
      {members.map((member) => {
        return (
          <NameButton
            value={member}
            onClick={selectMembers}
            key={member}
            selected={selectedMember === member}
          >
            {member}
          </NameButton>
        );
      })}
    </MemberNames>
  );
};

export default IveMembers;
