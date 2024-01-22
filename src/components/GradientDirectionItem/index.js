import {CustomList, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {data, active, onClickDirection} = props
  const {displayText, value} = data

  const onDirection = () => {
    onClickDirection(value)
  }

  return (
    <CustomList>
      <Button onClick={onDirection} active={active}>
        {displayText}
      </Button>
    </CustomList>
  )
}

export default GradientDirectionItem
