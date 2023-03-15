import { ImageProfile, RightSideNavBar, TitleName } from "./styles"

const ProfileArea: React.FC<{url:string, name:string}> = (props) => {
    return (
      <RightSideNavBar>
        <ImageProfile src={props.url ? props.url : "https://img.icons8.com/ios/50/ffffff/test-account.png"} alt="foto de perfil do usuário" />
        <TitleName>{props.name}</TitleName>
      </RightSideNavBar>
    )
  }
  
export default ProfileArea