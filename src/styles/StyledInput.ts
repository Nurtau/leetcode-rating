import styled from "styled-components";

export const StyledInput = styled.input`
	font-size: 18px;
	border: 0;
	background: 0;
	border-bottom: 1px solid #EEEEEE;
	color: #eeeeeea5;
	padding-top: 0rem;
	width: 300px;
	&:focus {
		outline: 0;
	}
	@media (max-width: 768px) {
		width: 250px;
	}
`;
