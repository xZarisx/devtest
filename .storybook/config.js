import { configure } from '@kadira/storybook';

function loadStories() {
    // require('../src/app/components/Welcome/WelcomeStory.js');
    // require('../src/app/components/Button/ButtonStory.js');
    // require('../src/app/components/Hero/HeroStory.js');
    // require('../src/app/components/BigOList/BigOListStory.js');
    require('../src/app/components/MainArticle/MainArticle.story.js');
}

configure(loadStories, module);
