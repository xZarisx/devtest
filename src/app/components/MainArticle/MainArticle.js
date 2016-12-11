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
        const { title, subtitle, images, bodySections } = this.props.article;
        return(
            <div className={styles.MainArticle}>
                <h2 className={styles.subHeading}>{subtitle}</h2>
                <h1 className={styles.heading}>{title}</h1>
                <Images images={images}  activeImage={this.state.activeImage} setActiveImage={this.setActiveImage}/>
                <BodySection bodySections={bodySections}/>
            </div>
        )
    }
}
