import styles from "./BodySection.css";

const Video = ({src, title, caption}) => (
    <div className={styles.videoContainer}>
        {/* temp video just for layout */}
        <div className={styles.videoWapper}>
            <img className={styles.video} src={src}/>
        </div>
        <h2 className={styles.videoTitle}>{title}</h2>
        <h3 className={styles.videoCaption}>{caption}</h3>
    </div>
)

export const Images = ({bodySections}) => (
    <div>
        {bodySections.map(({paragraphs, subtitle}, i) => (
            <div key={i}>
                {subtitle && <h2 className={styles.title}>{subtitle}</h2>}
                {paragraphs.map((item, i) => (
                    typeof item === "object" ? Video(item) : <p className={styles.para} key={i}>{item}</p>
                ))}
            </div>
        ))}
    </div>
)

export default Images;
