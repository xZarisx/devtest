import { storiesOf, action } from '@kadira/storybook';
import MainArticle from './MainArticle.js';
import demoData from './demoData.js';

storiesOf('MainArticle', module)

    .add('default', () => (<MainArticle  article={demoData}/>))
