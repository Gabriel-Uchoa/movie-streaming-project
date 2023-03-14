import { TextViewMore } from "./styles"

const ViewMore: React.FC<{onClick: () => void, viewMore: boolean}> = (props) => {
    return (
        <TextViewMore onClick={props.onClick}>{props.viewMore ? 'Ver menos' : 'Ver mais'}</TextViewMore>
    )
}

export default ViewMore