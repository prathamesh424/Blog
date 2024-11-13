
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3"></Typography>
                <Text variant="h5">I'm a Software Engineer from well known College 
                        <h2>IIT Avasari </h2>
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Text  variant='5'>My github Account link is here </Text>
                        <Link href="https://github.com/dashboard" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    If want to contact me then you can chat with me on 
                    <Box component="span" style={{ margin:' 0px 10px' }}>
                        <Link href="" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box >  
                        or send me an Email 
                        <Link href=" " target="_blank" color="inherit"  style={{ marginLeft:'10px' }}>
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;