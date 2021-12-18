import styled from "styled-components";

export const QuoteContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background-color: white;
  color: ${({color}) => color};
  transition-duration: var(--transitionDuration);
  animation: fadeIn 0.5s;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
