import React from "react";
import "./styles/app.css";

let autoTime = null;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSecond: 0,
      isStart: false,
      records: []
    };
  }

  render() {
    const { timeSecond, records } = this.state;

    //화면에 떠야할 timesecond를 스테이트에서 가져옴

    return (
      <div className="timerBox">
        <div className="timerBox__time">
          <span>{timeSecond}</span>
        </div>
        <div className="timerBox__record">
          <ul>
            {records.map((re, index) => {
              return <li key={index}>{re}</li>;
            })}
          </ul>
        </div>
        <div className="timerBox__btn">
          <input type="button" value="START" onClick={this._startTimer} />
          <input type="button" value="STOP" onClick={this._stopTimer} />
          <input type="button" value="RECORD" onClick={this._record} />
          <input type="button" value="INIT" onClick={this._recordInit} />
        </div>
      </div>
    );
  }

  _recordInit = () => {
    this.setState({
      records: []
    });
  };

  _startTimer = () => {
    const { isStart } = this.state;

    if (!isStart) {
      this.setState({
        isStart: true
      });

      autoTime = setInterval(() => {
        this.setState({
          timeSecond: this.state.timeSecond + 1
        });
      }, 1000);
    }
  };

  //const로 타임세컨드를 미리 가져오면 값이 정해져버리기 때문에 초가 추가가 안됐었음 그래서 this.state.timeSecond로 바꿔주니 버그가 풀림

  //setInterber : 1초마다 무한히 재생임, 그래서 1초마다 state값이 바뀌며 +1씩 계속 추가함

  _stopTimer = () => {
    clearInterval(autoTime);
    this.setState({
      timeSecond: 0,
      isStart: false
    });
  };

  _record = () => {
    const { isStart, records } = this.state;

    if (isStart) {
      records.push(this.state.timeSecond);
    } else {
      return;
    }
  };
}
export default App;
