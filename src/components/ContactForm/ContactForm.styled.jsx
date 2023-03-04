import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  width: 400px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: 20px;
`;

export const Input = styled.input`
  width: 200px;
`;

export const Button = styled.button`
  margin-top: 12px;
  border-radius: 4px;
  font-size: 14px;
  border: lightgray;
  padding: 6px;
`;
