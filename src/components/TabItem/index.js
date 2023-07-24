import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItems = () => {
    updateActiveId(tabId)
  }
  const isCompActive = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isCompActive}`}
        onClick={onClickTabItems}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
