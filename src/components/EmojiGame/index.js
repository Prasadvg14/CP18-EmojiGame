/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, ids: [], over: false}

  onClickEmoji = id => {
    const {ids, score} = this.state

    if (score > 12) {
      this.setState({over: true})
    }
    if (ids.includes(id)) {
      this.setState({over: true, ids: []})
    } else {
      this.setState(prevState => ({
        ids: [...prevState.ids, id],
        score: prevState.score + 1,
      }))
    }
  }

  playAgainBtn = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }

    this.setState({score: 0, over: false})
  }

  render() {
    const {over, score, topScore} = this.state
    const {ids} = this.state
    console.log(ids)
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const shuffledEmojis = shuffledEmojisList()

    const gameOrResultCard = () => {
      if (over === true) {
        return (
          <WinOrLoseCard
            playAgainBtn={this.playAgainBtn}
            score={score}
            className="ul"
          />
        )
      }
      return (
        <ul className="ul">
          {shuffledEmojis.map(each => (
            <EmojiCard
              key={each.id}
              emoji={each}
              onClickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} over={over} />
        {gameOrResultCard()}
      </div>
    )
  }
}

export default EmojiGame
