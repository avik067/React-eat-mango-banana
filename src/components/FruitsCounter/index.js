import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrementB = () => {
    console.log('first')
    this.setState(prevState => {
      return {mango: prevState.mango + 1, banana: prevState.banana}
    })
  }
  onIncrementM = () => {
    console.log('Second')
    this.setState(prevState => {
      return {mango: prevState.mango, banana: prevState.banana + 1}
    })
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="yellow">
        <div className="white">
          <h1>
            Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="side">
            <div className="up">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="btn-container">
                <button onClick={this.onIncrementM}>Eat Mango</button>
              </div>
            </div>
            <div className="up">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="btn-container">
                <button onClick={this.onIncrementB}>Eat Banana</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
