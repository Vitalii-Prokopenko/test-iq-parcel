import { refs } from './refs';
import { renderTestHeaderWrap } from './render-test-header';
import { renderTestCompletionTrack } from './render-test-completion-track';

const handleClickOnStartBtn = event => {
  const target = event.target;
  console.log(target);

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log('hello');
  // Clean main and footer
  refs.appMain.innerHTML = '';
  refs.appFooter.innerHTML = '';
  // Render header for test
  renderTestHeaderWrap();
  // Render progress bar
  //   renderTestCompletionTrack();
  renderTestCompletionTrack;
};

const handleClickOnMenuStartLink = () => {
  console.log('hello');
  // Clean main and footer
  refs.appMain.innerHTML = '';
  refs.appFooter.innerHTML = '';
  // Render header for test
  renderTestHeaderWrap();
  // Render progress bar
  //   renderTestCompletionTrack();
  renderTestCompletionTrack;
};

refs.appBody.addEventListener('click', handleClickOnStartBtn);
refs.menuTest.addEventListener('click', handleClickOnMenuStartLink);
