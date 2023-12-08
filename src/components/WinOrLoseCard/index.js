// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgainBtn} = props
  let win = false
  if (score === 12) {
    win = true
  } else {
    win = false
  }
  const imgUrl = win
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const result = win ? 'You Won' : 'You Lose'
  const text = win ? 'Best Score' : 'Score'

  const onClickBtn = () => {
    playAgainBtn()
  }
  return (
    <div className="resultCard">
      <div className="card1">
        <h1 className="h1">{result}</h1>
        <div className="card2">
          <p className="h2">{text}</p>
          <p className="score">{score}/12</p>
          <button
            data-testid="Play again"
            onClick={onClickBtn}
            className="againBtn"
            type="button"
          >
            Play Again
          </button>
        </div>
      </div>
      <img className="img1" src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
