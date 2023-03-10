import Footer from "../organisms/Footer"
import IndividualMovie from "../organisms/IndividualMovie"
import NavBar from "../organisms/NavBar"

const PageMovieTemplate: React.FC = () => {
    return (
        <>
        <NavBar />
        <IndividualMovie />
        <Footer />
    </>
    )   
}

export default PageMovieTemplate