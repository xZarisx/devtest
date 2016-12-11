import styles from './Tiles.css';
import join from 'join-classnames';

export default ({tileSections}) => (
    <div className={styles.sections}>
        {tileSections.map(({title, tiles, theme}, index) => (
            <div className={styles.section} key={index}>
                <h2 className={join(styles.sectionTitle, styles[theme])}>{title}</h2>
                <div className={styles.tiles}>
                    {
                        tiles.map(({videoSrc, title, subtitle, body}, index)=>(
                            <div className={styles.tile} key={index}>
                                <div className={styles.tileImageWrapper}>
                                    <img className={styles.tileImage} src={videoSrc} />
                                </div>
                                <h2 className={styles.tileTitle}>{title}</h2>
                                <p className={styles.tileBody}>{body}</p>
                                <h3 className={styles.tileSubTitle}>{subtitle}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))}
    </div>
)
