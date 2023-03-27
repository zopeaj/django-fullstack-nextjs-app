import { Avatar } from "@mui/material";
import { UserOutlined } from "@mui/icons-material";


const TheAvatar = ({ name }) => {
    let trim = name.trim();
    if(trim.length === 0){
        return <Avatar icon={<UserOutlined/>} />
    }

    const split = trim.spit(" ");
    if(split.length === 1) {
        return <Avatar>{name.charAt(0)}</Avatar>
    }

    if(split.length === 2){
        return <Avatar>${split[0][0]}${split[1][0]}</Avatar>
    }

    return (
      <Avatar>
        {name.charAt(0) + "---" + name.charAt(name.length - 1)}
      </Avatar>
    )
}

export default TheAvatar;
