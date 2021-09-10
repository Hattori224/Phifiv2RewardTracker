import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import {isMobile} from 'react-device-detect';

import Sidebar from './Sidebar';
import MenuContent from './MenuContent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    sidebar: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: '100%',
        maxWidth: '250px',
        minWidth: '250px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        "@media (max-width: 1024px)": {
            display: 'none',
        }
    },
    sidebarmobile: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: '100%',
        maxWidth: '250px',
        minWidth: '250px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        "@media (max-width: 1024px)": {
            display: 'none',
        },
        "@media (min-width: 1024px)": {
            display: 'flex',
        }
    },
    menucontent: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
  }),
);

interface Props {
    light: boolean,
}

const Contentbody: React.FC<Props> = ({ light, menuShow, ...rest }:any) => {
    const classes = useStyles();
    const [clickedItem, setClickItem] = useState("Dashboard")
    const onClickMenuItem = (item:string)=>{
        setClickItem(item);
    }
    return (
        <Grid className={classes.root}>
        {menuShow && <Grid className={classes.sidebarmobile}>
            <Sidebar light={light} {...rest} clickedItem={clickedItem} onClickMenuItem={onClickMenuItem} item xs={12} sm={3} />
        </Grid>}
        {/* <Grid className={classes.sidebar}>
            <Sidebar light={light} {...rest} clickedItem={clickedItem} onClickMenuItem={onClickMenuItem} item xs={12} sm={3} />
        </Grid> */}
        <Grid className={classes.menucontent} item xs={12} sm={12}>
            <MenuContent light={light} {...rest} clickedItem={clickedItem}/>
        </Grid>
        </Grid>
    );
}

export default Contentbody;