export const Images = ({bodySections}) => (
    <div>
        {bodySections.map(({paragraphs, subtitle}, i) => (
            <div key={i}>
                subtitle && <h2>{subtitle}</h2>
                {paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </div>
        ))}
    </div>
)

export default Images;
