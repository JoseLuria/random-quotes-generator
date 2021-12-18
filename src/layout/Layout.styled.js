import styled from "styled-components";

export const MainLayout = styled.div`
	width: 100%;
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition-duration: var(--transitionDuration);
	background-color: ${({background}) => background};
	padding: 3rem 1rem;
`
