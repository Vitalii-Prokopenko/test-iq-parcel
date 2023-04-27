// Function to render test question
import { refs } from './refs';
import { markupTestCompletionTrack } from './render-test-completion-track';

export const renderTestQuestion = () => {
  const markupTestQuestion = `
    <section class="test">
      <div class="container test__container">
      ${markupTestCompletionTrack}
      </div>
    </section>
          `;
  refs.appMain.insertAdjacentHTML('beforeend', markupTestQuestion);
};
