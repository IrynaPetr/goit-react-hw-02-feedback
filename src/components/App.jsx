import { Component } from 'react';
import  Section  from '../components/Section/Section';
import  Statistics  from '../components/Statistics/Statistics';
import  Notification  from '../components/Notification/Notification';
import  Feedback  from '../components/Feedback/Feedback';
export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
 
    handleClick = key => {
      this.setState(currState => ({
        [key]: currState[key] +1,
      }));
    }

    countTotalFeedback = () => {
      const values = Object.values(this.state);
      return values.reduce((acc, value) => acc + value, 0);
    }

    counPositiveFeedbackPercentage = (total, good) => {
      const persentage = Math.round((good / total) * 100);
      return persentage;
    }
    render () {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      const positivePercentage = this.counPositiveFeedbackPercentage(total, good);

      const options = Object.keys(this.state);
      return (
        <>
         <Section title="Please leave feedback">
          <Feedback options={options} onClick={this.handleClick}/>
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
             <Statistics good={good} 
                        neutral={neutral}
                         bad={bad} 
                         total={total} 
                         positivePercentage={positivePercentage}/>) : 
                         (<Notification message="There is no feedback" />)}
        </Section>
        </>
      );
     
    }
};
