
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: hsl(0, 0%, 0%);;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    font-family:Arial, Helvetica, sans-serif;
    text-transform: uppercase;

    & > a {
        padding: 20px;
        margin : 0px 3%  ;
        font-weight: bold ;
        color: white ;
        text-decoration: none;
    }
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;