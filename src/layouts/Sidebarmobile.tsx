import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
// import Dropdown from '../components/Dropdown';
import {isMobile} from 'react-device-detect';

// import Button from '../components/Button';
import HomeIcon from '@material-ui/icons/Home';
import PrintIcon from '@material-ui/icons/Print';
import NotificationsIcon from '@material-ui/icons/Notifications';

interface Props {
    connected:any;
    onConnect: any;
    chainId: any;
    clickedItem: "Dashboard" | "Recovery" | "Investment";
    onClickMenuItem:(clickedItem:string)=>void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%'
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
    item: {
        marginLeft: 15
    }
  }),
);

const Sidebarmobile: React.FC<Props> = ({ connected, onConnect, chainId, clickedItem, onClickMenuItem }:any) => {
    const classes = useStyles();
    const clickItem = (item: "Dashboard" | "Recovery" | "Investment")=>{
        if(item === clickedItem) return;
        onClickMenuItem(item);
    }
    return (
        <Box className={classes.root}>
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