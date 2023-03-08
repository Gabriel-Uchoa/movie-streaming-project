import clockImage from '../../../assets/images/clock.png'

const TimeAndTitle: React.FC = () => {
    return (
        <div>
            <div>
                <img src={clockImage} alt="imagem de um relógio representando a duração do filme" />
                <span>1h 24min</span>
            </div>
            <h1>Interspace</h1>
        </div>
    )
}

export default TimeAndTitle