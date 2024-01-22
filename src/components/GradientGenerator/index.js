import {Component} from 'react'
import {
  CustomBg,
  Button,
  ColorCard,
  Con,
  CustomUL,
  MainHead,
  Head,
  ColorInput,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1Input: '#8ae323',
    color2Input: '#014f7b',
    directionInput: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
  }

  onClickDirection = value => {
    this.setState({directionInput: value})
  }

  onColorChange1 = event => {
    this.setState({color1Input: event.target.value})
  }

  onColorChange2 = event => {
    this.setState({color2Input: event.target.value})
  }

  onGenerate = () => {
    const {color1Input, color2Input, directionInput} = this.state

    this.setState({
      color1: color1Input,
      color2: color2Input,
      direction: directionInput,
    })
  }

  render() {
    const {
      color1Input,
      color1,
      color2,
      color2Input,
      direction,
      directionInput,
    } = this.state

    return (
      <CustomBg
        color1={color1}
        color2={color2}
        direction={direction}
        data-testid="gradientGenerator"
      >
        <Con>
          <MainHead>Generate a CSS Color Gradient</MainHead>
          <Head as="p">Choose Direction</Head>
          <CustomUL>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                data={eachItem}
                active={directionInput === eachItem.value}
                onClickDirection={this.onClickDirection}
              />
            ))}
          </CustomUL>
          <Head as="p">Pick the Colors</Head>
          <ColorCard>
            <Head as="p">{color1Input}</Head>
            <Head as="p">{color2Input}</Head>
          </ColorCard>
          <ColorCard>
            <ColorInput
              onChange={this.onColorChange1}
              type="color"
              value={color1Input}
            />
            <ColorInput
              onChange={this.onColorChange2}
              type="color"
              value={color2Input}
            />
          </ColorCard>
          <Button type="button" onClick={this.onGenerate}>
            Generate
          </Button>
        </Con>
      </CustomBg>
    )
  }
}

export default GradientGenerator
