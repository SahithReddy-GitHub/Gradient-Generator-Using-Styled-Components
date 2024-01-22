import styled from 'styled-components'

export const CustomBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
`
export const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MainHead = styled.h1`
  color: #ededed;
  font-size: 28px;
`
export const Head = styled(MainHead)`
  font-size: 22px;
  color: #ffffff79;
  font-weight: 500;
  margin-left: 25px;
  margin-right: 25px;
`
export const CustomUL = styled.ul`
  list-style-type: none;
  display: flex;
`
export const ColorCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const ColorInput = styled.input`
  width: 100px;
  height: 40px;
  background-color: transparent;
  border: none;
  margin-left: 25px;
  cursor: pointer;
  margin-right: 25px;
`
export const Button = styled.button`
  margin-top: 25px;
  padding: 10px;
  width: 100px;
  height: 100%;
  color: #1e293b;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: #00c9b7;
  cursor: pointer;
`
