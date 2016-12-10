import { storiesOf } from '@kadira/storybook';
import Tile from './Tile.js';
import demoData from "./demoData.js";

storiesOf('Tile', module)

    .add('default', () => (<Tile videoSrc={demoData.videoSrc} title={demoData.title} subtitle={demoData.subtitle} body={demoData.body}/>))
