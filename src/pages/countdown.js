import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import "./countodown.css"

class Countdown extends Component {
  state = {
    deadline: "Mar, 1, 2022",
    days: "34",
    hours: "16",
    minutes: "53",
    seconds: "11"
  };

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date()) ;
    if (time < 0) {
      console.log("Date passed");
    } else {
      var countDownDate = new Date("Mar 1, 2022 13:00:00").getTime();
      var now = new Date().getTime();
      var timeleft = countDownDate - now;
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top"></div>
          <div className="countdown_bottom">
            <div className="counter_item">
              <div className="countdown_time">
                {this.state.days}
                <div className="countdown_tag">Days</div>
              </div>
            </div>
            <div className="counter_item">
              <div className="countdown_time">
                {this.state.hours}
                <div className="countdown_tag">Hours</div>
              </div>
            </div>
            <div className="counter_item">
              <div className="countdown_time">
                {this.state.minutes}
                <div className="countdown_tag">Minutes</div>
              </div>
            </div>
            <div className="counter_item">
              <div className="countdown_time remove_padd">
                {this.state.seconds}
                <div className="countdown_tag">Sec</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Countdown;
