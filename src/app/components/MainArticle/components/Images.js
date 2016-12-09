export const Images = ({images}) => (
    <div>
        {images.map(({src}) => (
            <img src={src}/>
        ))}
    </div>
)

export default Images;
