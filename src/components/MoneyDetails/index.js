import {v4} from 'uuid'
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <>
      <li key={v4()} className="money-list green">
        <img
          className="card-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="title">Your Balance</p>
          <p className="state" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li key={v4()} className="money-list blue">
        <img
          className="card-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="title">Your Income</p>
          <p className="state" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li key={v4()} className="money-list purple">
        <img
          className="card-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="title">Your Expenses</p>
          <p className="state" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
