import {Component} from 'react'

import {
  MainContainer,
  Heading,
  InputElement,
  labelElement,
  selectTag,
  optionElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  render() {
    return (
      <MainContainer>
        <Heading>Meme Generator</Heading>
        <labelElement htmlFor="imageUrl">Image URl</labelElement>
        <InputElement
          type="text"
          placeholder="Enter the Image URL"
          id="imageUrl"
        />
        <labelElement htmlFor="topText">Top Text</labelElement>
        <InputElement
          type="text"
          placeholder="Enter the Top Text"
          id="topText"
        />
        <labelElement htmlFor="bottomText">Bottom Text</labelElement>
        <InputElement
          type="text"
          placeholder="Enter the Bottom Text"
          id="bottomText"
        />
        <selectTag>
          {fontSizesOptionsList.map(each => (
            <optionElement key={each.optionId} value={each.displayText}>
              {each.displayText}
            </optionElement>
          ))}
        </selectTag>
      </MainContainer>
    )
  }
}

export default MemeGenerator
