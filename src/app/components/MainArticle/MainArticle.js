import {Component} from 'react';
import Images from './components/Images';
import BodySection from './components/BodySection';
import styles from './MainArticle.css';

export default class extends Component {
    constructor(props) {
        super(props);
        this.setActiveImage = this.setActiveImage.bind(this);
        this.state = {activeImage: 0};
    }

    setActiveImage(index) {
        this.setState({activeImage: index});
    }

    render () {
        const { title, subtitle, images, video, bodySections } = this.props.article;
        return(
            <div className={styles.MainArticle}>
                <h2>{subtitle}</h2>
                <h1>{title}</h1>
                <Images images={images}  activeImage={this.state.activeImage} setActiveImage={this.setActiveImage}/>
                <div className={styles.video}>
                    {/* temp video just for layout */}
                    <img src={video.src}/>
                    <h2>{video.title}</h2>
                    <h3>{video.caption}</h3>
                </div>
                <BodySection bodySections={bodySections}/>
            </div>
        )
    }
}
