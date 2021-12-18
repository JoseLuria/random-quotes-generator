import styled from "styled-components"

export const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 1.9rem;
  margin-top: 1rem;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition-duration: var(--transitionDuration);
  color: ${({color}) => color};
`
