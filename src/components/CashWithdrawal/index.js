// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onClickChange = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const jsxElement = (
      <div className="bg-container">
        <div className="sub-container">
          <div className="name-container">
            <p className="s-heading">S</p>
            <p className="name-heading">Sarah Williams</p>
          </div>
          <div className="flex-container">
            <p className="balance">Your Balance</p>
            <p className="total-amount">
              {amount}
              <br />
              <span className="span-el">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw </p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="rupee-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                key={eachDenomination.id}
                changeValue={this.onClickChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default CashWithdrawal
