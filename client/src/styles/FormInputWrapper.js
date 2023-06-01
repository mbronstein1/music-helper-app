import styled from 'styled-components';

const FormInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-block: 2rem;
  min-height: 45px;

  & label {
    display: inline-flex;
    text-align: start;
    width: 120px;
    max-width: 100%;
  }

  & input {
    width: 200px;
  }

  & label:has(+ input:required)::after {
    content: '*';
    color: red;
    margin-left: 0.2rem;
  }
`;

export default FormInputWrapper;
