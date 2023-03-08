import clockImage from '../../../assets/images/clock.png'
import { ClockImage, DivTime } from './styles'

const TimeAndTitle: React.FC = () => {
    return (
        <div>
            <DivTime>
                <ClockImage src={clockImage} alt="imagem de um relógio representando a duração do filme" />
                <span>1h 24min</span>
            </DivTime>
            <h1>Interspace</h1>
        </div>
    )
}

export default TimeAndTitle