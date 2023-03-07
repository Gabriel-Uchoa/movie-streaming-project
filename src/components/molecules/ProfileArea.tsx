import { ImageProfile, RightSideNavBar } from "../../styles/navBar"

const ProfileArea: React.FC = () => {
    return (
      <RightSideNavBar>
        <ImageProfile src="https://media.licdn.com/dms/image/D4D03AQH9RE7wVjlztA/profile-displayphoto-shrink_800_800/0/1673909633500?e=1683763200&v=beta&t=q1_XpoTuIi3mERyvbWlZep8VK_w5YsoAW_VnVaLw23k" alt="foto de perfil do usuário" />
        <span>Giovanna</span>
      </RightSideNavBar>
    )
  }
  
export default ProfileArea