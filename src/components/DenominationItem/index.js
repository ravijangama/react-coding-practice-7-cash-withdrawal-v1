// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, changeValue} = props
  const {value} = denominationDetails
  const onClickRupee = () => {
    changeValue(value)
  }
  const jsxElement = (
    <li className="li-container">
      <button type="button" className="button" onClick={onClickRupee}>
        {value}
      </button>
    </li>
  )
  return jsxElement
}
export default DenominationItem
