import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(each => id !== each.id)
    this.setState({transactionList: filteredList})
  }

  onAddTransaction = e => {
    e.preventDefault()
    const {title, amount, type} = this.state

    const typeOption = transactionTypeOptions.find(
      each => each.optionId === type,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
    console.log(title === '', amount === '')
  }

  getBalance = () => {
    const {transactionList} = this.state
    let income = 0
    let expenses = 0

    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      } else {
        expenses += each.amount
      }
    })
    return income - expenses
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenses = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenses += each.amount
      }
    })
    return expenses
  }

  onChangeTitle = e => {
    this.setState({title: e.target.value})
  }

  onChangeAmount = e => {
    this.setState({amount: e.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {title, amount, transactionList, type} = this.state

    return (
      <div className="container">
        <div className="title-card">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>

        <ul className="cards-container">
          <MoneyDetails
            balance={this.getBalance()}
            income={this.getIncome()}
            expenses={this.getExpenses()}
          />
        </ul>

        <div className="bottom-container">
          <form onSubmit={this.onAddTransaction}>
            <h1 className="heading">Add Transaction</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              id="title"
              placeholder="TITLE"
              type="text"
              className="input"
              value={title}
              onChange={this.onChangeTitle}
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <input
              id="amount"
              placeholder="AMOUNT"
              type="text"
              className="input"
              value={amount}
              onChange={this.onChangeAmount}
            />
            <label htmlFor="select" className="label">
              TYPE
            </label>
            <select
              id="select"
              className="input"
              onChange={this.onChangeType}
              value={type}
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="btn">
              Add
            </button>
          </form>

          <div className="card">
            <h1 className="heading">History</h1>
            <ul className="history-container">
              <li key={v4()} className="th">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {transactionList.map(each => (
                <TransactionItem
                  key={each.id}
                  historyDetails={each}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
