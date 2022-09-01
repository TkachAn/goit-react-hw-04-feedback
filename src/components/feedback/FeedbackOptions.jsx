import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  return [{ val: 'good' }, { val: 'neutral' }, { val: 'bad' }].map(option => (
    <button
      type="button"
      className={css.button}
      key={option.val}
      onClick={() => onLeaveFeedback(option.val)}
    >
      {option.val}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
