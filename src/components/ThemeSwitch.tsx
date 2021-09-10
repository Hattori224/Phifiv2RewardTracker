import React from 'react';
import { Box, useTheme } from '@material-ui/core';
// import styled from 'styled-components';

// import DayIcon from '../assets/images/lightlogo.png';
// import NightIcon from '../assets/images/darklogo.png';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

interface Props {
    light: boolean;
    setTheme: any;
}

const ThemeSwitch: React.FC<Props> = ({ light, setTheme }: any) => {
    // const theme = useTheme();
    return (
        <Box onClick={() => setTheme(!light)}>
            {/* <img src={light ? DayIcon : NightIcon} alt='' /> */}
            {!light && <WbSunnyIcon style={{color: '#9999ff'}} />}
            {light && <NightsStayIcon style={{color: '#9999ff'}} />}
            {/* <svg fill="currentColor" style={{color: '#9999ff'}} viewBox="0 0 20 20" aria-hidden="true">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg> */}
        </Box>
    );
}

// const StyledContainer = styled(Box) <{ theme: any; light: any;}>`
//     transition: .5s;
//     border-radius: 66px; 
//     width: 29px;
//     height: 14px;
//     background: ${({ theme }) => theme.palette.themeswitch.main};
//     position: relative;
//     img {
//         position: absolute;
//         width: 11px;
//         height: 11px;
//         transition: .3s;
//         ${({ light }) => light==='true' ? 'left: 2px' : 'left: 16px'};
//         top: 1px;
//     }
// `;

export default ThemeSwitch;