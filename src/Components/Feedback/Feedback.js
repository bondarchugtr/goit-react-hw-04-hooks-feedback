import React, { Component } from "react";
import s from "./Feedback.module.css";
import FeedbackOptions from "../Button/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onSetVoice = (type) => {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const objKey = Object.keys(this.state);
    return objKey.reduce((total, el) => (total += this.state[el]), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const keys = Object.keys(this.state);

    return (
      <div>
        <h1 className={s.title}>Please leave feedback</h1>
        <FeedbackOptions options={keys} onLeaveFeedback={this.onSetVoice} />

        <div className={s.statistics}>
          <h2 className={s.title__statistics}>Statistics</h2>
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positive={positive}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </div>
    );
  }
}

export default Feedback;
