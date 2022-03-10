import styled from 'styled-components'

export const ContainerButton = styled.button`
  padding: 9px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: ${props => (props.error ? 'not-allowed' : 'pointer')};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;

  &:hover {
    opacity: ${props => (props.error ? 'none' : '0.8')};
  }
  &:active {
    opacity: ${props => (props.error ? 'none' : '0.6')};
  }
`
