import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={'codeSvg'}/>
            <SkillTitle>HTML</SkillTitle>
            <SkillText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur culpa distinctio et,
                facilis illum iusto molestiae mollitia nam nisi perspiciatis quis recusandae rem vel veniam. Ad et qui
                quos!
            </SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div``;

const SkillTitle = styled.h3``;

const SkillText = styled.p``;
