import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`
export const MainContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 20px;
`
export const MemesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 20px;
  background-image: url(${props => props.Url});
  background-size: cover;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.fontSize};
  color: #ffffff;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #35469c;
  font-weight: bold;
  font-size: 34px;
`
export const Form = styled.form`
  background-color: transparent;
`

export const InputElement = styled.input`
  height: 40px;
  border: 1px;
  border-style: solid;
  border-color: #5a7184;
  font-family: 'Roboto';
  color: '#5a7184';
  border-radius: 4px;
  margin-bottom: 10px;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: #7e858e;
`

export const SelectTag = styled.select`
  height: 40px;

  border: 1px;
  border-style: solid;
  margin-bottom: 10px;
  border-color: #5a7184;
  font-family: 'Roboto';
  color: '#5a7184';
`
export const OptionElement = styled.option`
  height: 40px;
  border: 1px;
  border-style: solid;
  border-color: #5a7184;
  font-family: 'Roboto';
  color: '#5a7184';
  width: 30%;
  border-radius: 4px;
`
export const Button = styled.button`
  height: 30px;
  font-family: 'Roboto';
  color: #ffffff;
  border: 0px;
  font-size: 16px;
  border-radius: 6px;
  width: 100px;
  background-color: blue;
`
