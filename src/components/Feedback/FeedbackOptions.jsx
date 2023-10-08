import css from './Feedback.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <div className={css.btnWrapper}>
        <button
          name="good"
          className={css.btn}
          type="button"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          name="neutral"
          className={css.btn}
          type="button"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          name="bad"
          className={css.btn}
          type="button"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    </>
  );
};
