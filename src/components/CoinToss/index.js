import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, d: 2}

  onToss = () => {
    const num = Math.round(Math.random(0, 1))
    if (num === 1) {
      this.setState(prev => ({tails: prev.tails + 1}))
      this.setState({d: num})
    } else {
      this.setState({d: num})
      this.setState(prev => ({heads: prev.heads + 1}))
    }
  }

  render() {
    const {heads, tails, d} = this.state
    const total = heads + tails
    console.log(this.num)
    const url =
      d === 1
        ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

    return (
      <div className="main">
        <div className="sub">
          <div className="sub1">
            <h1>Coin Toss Game</h1>
            <p>Heads (or) Tails</p>
            <img src={url} alt="toss result" />
            <button onClick={this.onToss} type="button">
              Toss coin
            </button>
          </div>
          <div className="sub2">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
