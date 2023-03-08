import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"
import RenderSign from "../organisms/Sign"
const SignTemplate: React.FC = () => {
    return (
        <>
            <NavBar />
            <RenderSign />
            <Footer />
        </>
    )
}

export default SignTemplate