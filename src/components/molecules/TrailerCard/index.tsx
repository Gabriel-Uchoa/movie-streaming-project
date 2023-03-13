import { DivTrailerCard, TextStyle } from "./styles"

const TrailerCard: React.FC<{keyTrailer: string, numberTrailer: string }> = (props) => {

    return (
        <DivTrailerCard>
        <iframe width="296" height="150" src={`https://www.youtube.com/embed/${props.keyTrailer}`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <TextStyle>{props.numberTrailer}</TextStyle>
        </DivTrailerCard>
    )
}

export default TrailerCard