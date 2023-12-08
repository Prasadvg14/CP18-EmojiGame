// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {emojiUrl, id, emojiName} = emoji
  const onClickBtn = () => {
    onClickEmoji(id)
  }
  return (
    <li>
      <button onClick={onClickBtn} type="button" className="e-card">
        <img className="img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
