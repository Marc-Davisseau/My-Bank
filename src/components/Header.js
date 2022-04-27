import Logo from "./Logo"
import User from "./User"
import data from "../data.json"


const Header = (props) => {
return <div className="maincontainer">
<div className="Head">My Bank</div>
<User name={props.name}/>
<Logo logo={props.logo}/>
</div>


}

export default Header