import styles from "./Images.css";

export const Images = ({ images, activeImage, setActiveImage }) => (
    <div className={styles.Images}>
        <div className={styles.mainImageWrapper}>
            <img className={styles.mainImage} src={images[activeImage].src}/>
        </div>
        <div className={styles.bottomWrapper}>
            <div className={styles.activeImageInfo}>
                <h2 className={styles.title}>{images[activeImage].title}</h2>
                <h3>{images[activeImage].caption}</h3>
            </div>
            <div className={styles.thumbNails}>
            {images.map(({src}, index) => {
                if(index != activeImage){
                    return(
                        <div className={styles.thumbNailWrapper}>
                            <img className={styles.thumbNail}
                                src={src}
                                key={index}
                                onClick={()=>{setActiveImage(index)}}
                            />
                        </div>
                    )
                }
            })}
            </div>
        </div>
    </div>
)

export default Images;
