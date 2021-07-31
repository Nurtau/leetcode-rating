import { createGlobalStyle } from "styled-components";

const textFontSize = "24px";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		min-height: 100vh;
		background-color: #222831;
		color: #EEEEEE;
		font-size: ${textFontSize};
		/* color: #FFD369; */
		/* color: #393E46; */
	}

	a {
		color: #EEEEEE;
		text-decoration: none;
		font-size: ${textFontSize};
		margin-right: 1.7rem;
		@media (max-width: 1024px) {
			font-size: ${textFontSize};
		}
	}

`;
