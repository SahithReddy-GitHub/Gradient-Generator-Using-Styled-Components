import styled from 'styled-components'

export const CustomList = styled.li`
  width: 100px;
  margin: 5px;
`
export const Button = styled.button`
  padding: 10px;
  width: 100px;
  background-color: #ffffff;
  border: none;
  border-radius: 3px;
  height: 100%;
  color: #334155;
  outline: none;
  opacity: ${props => (props.active ? 1 : 0.5)};
  border: none;
  cursor: pointer;
`
