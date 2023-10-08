import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';


export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  UpdateStatistics = event => {
    this.setState(PrevState => ({
      [event.target.name]: PrevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return '0.0';
    }
    return ((this.state.good / totalFeedback) * 100).toFixed(1);
  };
  render() {
    const total = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions onLeaveFeedback={this.UpdateStatistics} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
