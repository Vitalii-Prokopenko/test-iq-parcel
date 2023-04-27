import { refs } from './refs';
// import { renderHeaderWrap } from './render-header-wrap';

const handleClickOnStartBtn = event => {
  const target = event.target;
  console.log(target);

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log('hello');
  // Render header for test
  //   renderHeaderWrap();
};

const handleClickOnMenuStartLink = () => {
  console.log('hello');
  // Render header for test
  //   renderHeaderWrap();
};

refs.appBody.addEventListener('click', handleClickOnStartBtn);
refs.menuTest.addEventListener('click', handleClickOnMenuStartLink);
