import Images from './components/Images';
import BodySection from './components/BodySection';

export default ({article}) => {
    const { title, subtitle, images, video, bodySections } = article;
    return(
        <div>
            <h2>{subtitle}</h2>
            <h1>{title}</h1>
            {/* <Images images={images} /> */}
            <BodySection bodySections={bodySections} />
        </div>
    )
};
