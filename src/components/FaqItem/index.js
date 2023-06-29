import './index.css'

const FaqItem = props => {
  const {faqItemDetails, onClickPlusButton} = props
  const {id, questionText, answerText, isClickedOnPlusButton} = faqItemDetails

  const onClickPlusIcon = () => {
    onClickPlusButton(id)
  }

  let plusMinusIcon
  let altValue
  if (isClickedOnPlusButton) {
    plusMinusIcon =
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    altValue = 'minus'
  } else {
    plusMinusIcon =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    altValue = 'plus'
  }

  return (
    <li className="each-faq-container">
      <div className="faq-question-and-icon-container">
        <h1 className="question-text">{questionText}</h1>
        <button className="plus-button" type="button" onClick={onClickPlusIcon}>
          <img src={plusMinusIcon} alt={altValue} />
        </button>
      </div>
      {isClickedOnPlusButton && (
        <div className="answer-container">
          <hr size="1px" color="#e4e7eb" />
          <p className="answer-text">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
