import { storiesOf } from '@kadira/storybook';
import Tiles from './Tiles.js';
import demoData from "./demoData.js";

storiesOf('Tiles', module)

    .add('default', () => (<Tiles tileSections={demoData}/>))
