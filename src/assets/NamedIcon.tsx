import React from 'react';
import styled from "styled-components";


interface NamedIconProps {
	description: string;
}

export const NamedIcon: React.FC<NamedIconProps> = ({description, children}) => {
	return (
		<IconContainer>
			{children}
			<p>{description}</p>
		</IconContainer>
	)
}

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	p {
		margin-left: 1rem;
	}
	@media (max-width: 768px) {
		p {
			display: none;
		}
	}
`;