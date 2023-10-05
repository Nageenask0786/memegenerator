import {Component} from 'react'

import {
  MainContainer,
  Heading,
  InputElement,
  LabelElement,
  SelectTag,
  OptionElement,
  Button,
  AppContainer,
  MemesContainer,
  Paragraph,
  Form,
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
  state = {
    inputImageUrl: '',
    topText: '',
    bottomText: '',
    Size: '',
    isClicked: false,
  }

  getTopText = event => {
    this.setState({topText: event.target.value})
  }

  getMeme = () => {
    this.setState({isClicked: true})
  }

  getBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeImageUrl = event => {
    this.setState({inputImageUrl: event.target.value})
  }

  onChangeSize = event => {
    this.setState({Size: event.target.value})
  }

  render() {
    const {inputImageUrl, topText, bottomText, Size, isClicked} = this.state
    const parsedSize = parseInt(Size)
    console.log(parsedSize)
    return (
      <AppContainer>
        <MainContainer>
          <Heading>Meme Generator</Heading>
          <Form>
            <LabelElement htmlFor="imageUrl">Image URl</LabelElement>
            <InputElement
              type="text"
              placeholder="Enter the Image URL"
              id="imageUrl"
              value={inputImageUrl}
              onChange={this.onChangeImageUrl}
            />
            <LabelElement htmlFor="topText">Top Text</LabelElement>
            <InputElement
              type="text"
              placeholder="Enter the Top Text"
              id="topText"
              onChange={this.getTopText}
              value={topText}
            />
            <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
            <InputElement
              type="text"
              placeholder="Enter the Bottom Text"
              id="bottomText"
              onChange={this.getBottomText}
              value={bottomText}
            />
            <LabelElement htmlFor="select">Font Size</LabelElement>
            <SelectTag id="select" onChange={this.onChangeSize} value={Size}>
              {fontSizesOptionsList.map(each => (
                <OptionElement key={each.optionId} value={each.displayText}>
                  {each.displayText}
                </OptionElement>
              ))}
            </SelectTag>
            <Button type="button" onClick={this.getMeme}>
              Generate
            </Button>
          </Form>
        </MainContainer>
        {isClicked && (
          <MemesContainer Url={inputImageUrl} data-testid="meme">
            <Paragraph fontSize={parsedSize}>{topText}</Paragraph>
            <Paragraph fontSize={parsedSize}>{bottomText}</Paragraph>
          </MemesContainer>
        )}
      </AppContainer>
    )
  }
}

export default MemeGenerator
