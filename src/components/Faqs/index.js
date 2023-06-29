// Write your code here.

import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {
      faqsList,
      targetId: '',
    }
  }

  onChangeOnClickPlusButton = id => {
    const {faqsList} = this.state
    const updatedFaqsList = faqsList.map(eachItem => {
      if (eachItem.id === id) {
        return {
          ...eachItem,
          isClickedOnPlusButton: !eachItem.isClickedOnPlusButton,
        }
      }
      return {...eachItem}
    })

    return updatedFaqsList
  }

  onClickPlusButton = id => {
    this.setState({
      faqsList: this.onChangeOnClickPlusButton(id),
      targetId: id,
    })
  }

  render() {
    const {faqsList, targetId} = this.state
    const targetFaq = faqsList.find(eachFaq => eachFaq.id === targetId)

    return (
      <div className="faqs-app-main-container">
        <div className="faqs-container">
          <h1 className="faqs-main-heading">FAQs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                faqItemDetails={eachFaq}
                onClickPlusButton={this.onClickPlusButton}
                key={eachFaq.id}
                modifiedFaq={targetFaq}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

//   <div className="answer-container">
//     <hr size="1px" color="#e4e7eb" />
//     <p className="answer-text">{faqsList.targetId.answerText}</p>
//   </div>
