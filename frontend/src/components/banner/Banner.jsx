
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: hsla(20, 2%, 17%, 0.99);;
    line-height: 1 ;
    font-weight : bold ;
    font-family:Arial, Helvetica, sans-serif;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 12s ease infinite;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading> Write Your Thought's</Heading>
            <SubHeading> Still waiting , Start wrting now.....</SubHeading>
        </Image>
    )
}

export default Banner;