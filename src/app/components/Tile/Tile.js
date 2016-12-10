import {Component} from 'react';
import styles from './Tile.css';
import join from 'join-classnames';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {videoOpen: false}
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    setOpen() {
        this.setState({
            videoOpen: true
        });
    }

    setClose() {
        this.setState({
            videoOpen: false
        });
    }

    toggleOpen() {
        this.state.videoOpen ? this.setClose() : this.setOpen()
    }

    render() {
        const { videoSrc, title, subtitle, body } = this.props;
        const { videoOpen } = this.state;

        return(
            <div>
                <img className={join(styles.mockImages, videoOpen ? styles.open : styles.close)}
                    src={videoSrc}
                    onClick={() => this.toggleOpen()}
                />
                <h3 className={styles.subTitle}>{subtitle}</h3>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.body}>{body}</p>
            </div>
        )
    }
}
