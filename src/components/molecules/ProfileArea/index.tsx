import { ImageProfile, RightSideNavBar, TitleName } from "./styles"

const ProfileArea: React.FC<{url:string, name:string}> = (props) => {
  //"https://media.licdn.com/dms/image/D4D03AQH9RE7wVjlztA/profile-displayphoto-shrink_800_800/0/1673909633500?e=1683763200&v=beta&t=q1_XpoTuIi3mERyvbWlZep8VK_w5YsoAW_VnVaLw23k"
    return (
      <RightSideNavBar>
        <ImageProfile src={props.url} alt="foto de perfil do usuário" />
        <TitleName>{props.name}</TitleName>
      </RightSideNavBar>
    )
  }
  
export default ProfileArea