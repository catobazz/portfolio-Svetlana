import { Icon } from '../../../../components/icon/Icon.tsx';
import styled from 'styled-components';

type Props = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill = ({ iconId, title, description }: Props) => {
  return (
    <StyledSkill>
      <Icon iconId={iconId} />
      <SkillTitle>{title}</SkillTitle>
      <SkillText>{description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
    width: 30%;
    background-color: rgba(246, 241, 191, 0.53);
    margin: 10px;
`;

const SkillTitle = styled.h3``;

const SkillText = styled.p``;
