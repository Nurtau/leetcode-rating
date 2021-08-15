import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 1.2rem;
  width: 80%;
  display: flex;
	justify-content: space-between;
	label {
    width: 30%;
    display: inline-block;
  }
  @media (max-width: 768px) {
    flex-direction: column;
		label {
			margin-bottom: 0.85rem;
		}
  }
`;
