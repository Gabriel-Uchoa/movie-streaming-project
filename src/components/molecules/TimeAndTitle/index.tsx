import clockImage from '../../../assets/images/clock.png'
import { ClockImage, DivTime, MovieTitle } from './styles'

const TimeAndTitle: React.FC<{title: string, runtime: string}> = (props) => {
    return (
        <div>
            <DivTime>
                <ClockImage src={clockImage} alt="imagem de um relógio representando a duração do filme" />
                <span>{props.runtime}</span>
            </DivTime>
            <MovieTitle>{props.title}</MovieTitle>
        </div>
    )
}

export default TimeAndTitle