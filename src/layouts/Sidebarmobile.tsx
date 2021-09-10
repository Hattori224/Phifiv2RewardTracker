import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
// import Dropdown from '../components/Dropdown';
import {isMobile} from 'react-device-detect';

// import Button from '../components/Button';
import HomeIcon from '@material-ui/icons/Home';
import PrintIcon from '@material-ui/icons/Print';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Lightlogo from '../assets/images/lightlogo.png';
import Darklogo from '../assets/images/darklogo.png';

interface BgProps {
    isShow: any;
}

interface Props {
    connected:any;
    onConnect: any;
    chainId: any;
    clickedItem: "Dashboard" | "Recovery" | "Investment";
    onClickMenuItem:(clickedItem:string)=>void;
    isClickMobile: boolean;
}

const useStyles = makeStyles((theme: Theme ) =>
  createStyles({
    root: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%',
        transition: '.3s',
        width: (props:BgProps) => props.isShow * 250,
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#666666',
        cursor: 'pointer',
    },
    logo: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: theme.palette.text.primary,
        marginTop: 20,
        marginBottom: 20,
        cursor: 'pointer',
        [theme.breakpoints.down("xs")]: {
            paddingRight: 0,
        }
    },
    item: {
        marginLeft: 15
    }
  }),
);

const Sidebarmobile: React.FC<Props> = ({ connected, onConnect, chainId, isClickMobile, setIsClickMobile, clickedItem, onClickMenuItem, light }:any) => {
    const clickItem = (item: "Dashboard" | "Recovery" | "Investment")=>{
        if(item === clickedItem) return;
        onClickMenuItem(item);
        setIsClickMobile(false);
    }
    
    const mobileWidth = {
        isShow: isClickMobile
    };

    const classes = useStyles(mobileWidth);

    return (
        <Box className={classes.root}>
            <Grid className={classes.logo} onClick={()=>clickItem("Dashboard")}>
                {!light && <img style={{width: 25, height: 25}} src={Darklogo} alt='The TIKI Bar' />}
                {light && <img style={{width: 25, height: 25}} src={Lightlogo} alt='The TIKI Bar' />}
                <span style={{marginLeft:15}}>The TIKI Bar</span>
            </Grid>
            <Grid className={classes.menuItem} onClick={()=>clickItem("Dashboard")}>
                <HomeIcon />
                <span className={classes.item}>Dashboard</span>
            </Grid>
            <Grid className={classes.menuItem} onClick={()=>clickItem("Recovery")}>
                <PrintIcon />
                <span className={classes.item}>Recovery</span>
            </Grid>
            <Grid className={classes.menuItem} onClick={()=>clickItem("Investment")}>
                <NotificationsIcon />
                <span className={classes.item}>Grow Your Investment</span>
            </Grid>
        </Box>
    );
}

export default Sidebarmobile;