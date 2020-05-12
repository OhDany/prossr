import styled from '@emotion/styled';

const Boton = styled.a`
  font-weight: 700;
  trext-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: .8rem 2rem;
  margin-right: 1rem;
  background-color: ${props => props.bgColor ? '#da552f' : '#ffffff'};
  color: ${props => props.bgColor ? '#ffffff' : '#000000'};
  
  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
  `;

export default Boton;