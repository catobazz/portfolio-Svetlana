import styled from 'styled-components';

type Props = {
  title: string;
  text: string;
  src: string;
};

export const Work = ({ title, text, src }: Props) => {
  return (
    <StyledWork>
      <Image src={src} alt="" />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Link href={'#'}>demo</Link>
      <Link href={'#'}>code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
    background-color: #b8d358;
    width: 100%;
    max-width: 540px;
`;
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`;

const Title = styled.h3``;

const Link = styled.a``;

const Text = styled.p``;


