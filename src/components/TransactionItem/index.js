import './index.css'

const TransactionItem = props => {
  const {historyDetails, deleteTransaction} = props
  const {id, title, amount, type} = historyDetails

  const onClickDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="historyItem">
      <p className="para">{title}</p>
      <p className="para">Rs {amount}</p>
      <p className="para">{type}</p>
      <button type="button" data-testid="delete" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="del-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
