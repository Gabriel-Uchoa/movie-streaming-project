import styled from "styled-components";

export const StyleFooter = styled.footer`
	width: 100%;
	bottom: 0;
	display: flex;
	color: #ffffff;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const DescribeFooter = styled.section`
	background-color: #3d3d3d;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 30px;
	gap: 20px;

	@media screen and (min-width: 768px) {
		max-width: 39vw;
	}
`;

export const TitleDescribe = styled.h1`
	font-weight: 500;
	font-size: 60px;
	line-height: 88px;
	@media (max-width: 768px) {
		font-size: 40px;
		line-height: 56px;
	}
`;

export const Paragraph = styled.p`
	line-height: 32px;
`;

export const NewsLetter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	& > p {
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
	}
`;

export const NewsLetterInput = styled.div`
	background-color: #525252;
	padding: 8px;
	border-radius: 8px;
	width: 100%;
	max-width: 282px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > input {
		background-color: #525252;
		color: white;
		outline: none;
		border: none;
		width: 100%;
	}
	& > button {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fed530;
		border: none;
		padding: 12px;
		border-radius: 8px;
		cursor: pointer;
	}
`;

export const NavFooter = styled.section`
	background-color: #2e2e2e;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 20px;
	padding: 30px 50px;
	@media screen and (min-width: 768px) {
		max-width: 61vw;
	}
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
	grid-gap: 20px;
	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	font-size: 16px;
	line-height: 32px;
	text-decoration: none;
	&:hover {
		color: gray;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	color: #fff;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const Contact = styled.div`
	display: flex;
	gap: 24px;
	& > div {
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 12px;

		& > div {
			margin-bottom: 12px;
		}
	}
`;
