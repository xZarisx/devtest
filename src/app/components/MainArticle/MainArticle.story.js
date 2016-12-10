import { storiesOf, action } from '@kadira/storybook';
import MainArticle from './MainArticle.js';
import demoData from './demoData.js';
import styles from './demo.css'

storiesOf('MainArticle', module)

    .add('default', () => (
        <div className={styles.demoWrapper}>
            <MainArticle  article={demoData}/>
        </div>
    ))
