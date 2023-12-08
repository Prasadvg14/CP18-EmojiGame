// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, over} = props
  const scoreBoard = over ? null : (
    <div className="score1">
      <p className="p">Score: {score}</p>
      <p className="p">Top Score: {topScore}</p>
    </div>
  )

  return (
    <nav>
      <h1 className="heading">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        Emoji Game
      </h1>
      {scoreBoard}
    </nav>
  )
}

export default NavBar
