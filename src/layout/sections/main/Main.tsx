import styled from 'styled-components';
import photo from './../../../assets/image/photo-1.webp';

export const Main = () => {
  return (
    <div>
      <div>
        <span>Hi There</span>
        <h2>I am Svetlana Dyablo</h2>
        <h1>A Web Developer. </h1>
      </div>
      <Photo src={photo} alt="" />
    </div>
  );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;
