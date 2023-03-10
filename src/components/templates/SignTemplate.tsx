import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"
import AuthForm from "../organisms/Sign"
const SignTemplate: React.FC = () => {
    return (
        <>
            <NavBar />
            <AuthForm />
            <Footer />
        </>
    )
}

export default SignTemplate