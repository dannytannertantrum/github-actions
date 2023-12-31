import { string } from 'prop-types';

import './HelpBox.css';

// Entering a comment which will be skipped by a commit message

function HelpBox({ title, text }) {
  return (
    <article className='help-box'>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
