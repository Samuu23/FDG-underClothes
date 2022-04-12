import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

const UserWidget=()=> {
    return(
        <IconButton aria-label="UserAccount">
        <AccountCircleIcon fontSize="large" sx={{ color: "#00c853" }}></AccountCircleIcon>
    </IconButton>
    );
}

export default UserWidget;