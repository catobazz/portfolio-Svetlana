import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.tsx';
import {Button} from "../../../components/Button.tsx";

export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={'name'} />
        <Field placeholder={'subject'} />
        <Field placeholder={'massage'} as={'textarea'} />
          <Button type={'submit'}>Send message</Button>
      </StyledForm>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  background-color: rgba(211, 99, 250, 0.87);
  min-height: 100vh;
`;

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`;

const Field = styled.input``;
