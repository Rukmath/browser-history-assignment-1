import './index.css'

const HistoryItem = props => {
  const {itemDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="combined-container">
        <div className="logo-title-domain-container">
          <img className="logo-img" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          onClick={onDelete}
          className="delete-button"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
