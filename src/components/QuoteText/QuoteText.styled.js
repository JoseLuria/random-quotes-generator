import styled from "styled-components"

export const Text = styled.p`
  font-size: ${({type}) => type === "author" ? "0.8rem" : "1.2rem"};
  font-style: ${({type}) => type === "author" ? "italic" : "normal"};
  margin-bottom: 2rem;
`
