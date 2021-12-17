import { useState } from "react";
import s from "./Feedback.module.css";
import FeedbackOptions from "../Button/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onSetVoice = (state) => {
    switch (state) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  const keys = ["good", "neutral", "bad"];

  return (
    <div>
      <h1 className={s.title}>Please leave feedback</h1>
      <FeedbackOptions options={keys} onLeaveFeedback={onSetVoice} />

      <div className={s.statistics}>
        <h2 className={s.title__statistics}>Statistics</h2>
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positive={countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </div>
  );
}

export default Feedback;
