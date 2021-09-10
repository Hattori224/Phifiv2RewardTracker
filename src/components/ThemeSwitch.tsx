import React from 'react';
import { Box, useTheme } from '@material-ui/core';
// import styled from 'styled-components';

// import DayIcon from '../assets/images/layout/day.png';
// import NightIcon from '../assets/images/layout/night.png';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

interface Props {
    light: boolean;
    setTheme: any;
}

const ThemeSwitch: React.FC<Props> = ({ light, setTheme }: any) => {
    const theme = useTheme();
    return (
        <Box onClick={() => setTheme(!light)}>
            {/* <img src={light ? DayIcon : NightIcon} alt='' /> */}
            <WbSunnyIcon style={{color: '#9999ff'}} />
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