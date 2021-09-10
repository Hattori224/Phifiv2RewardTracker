import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import {isMobile} from 'react-device-detect';
import ThemeSwitch from '../components/ThemeSwitch';

import DescriptionIcon from '@material-ui/icons/Description';

import Lightlogo from '../assets/images/lightlogo.jpg';
import Darklogo from '../assets/images/darklogo.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundColor: theme.palette.background.default,
        paddingTop: 15,
        paddingBottom: 15,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: theme.palette.text.primary,
        [theme.breakpoints.down("xs")]: {
            paddingRight: 0,
        },
        "@media (max-width: 1024px)": {
            display: 'none',
        },
        "@media (min-width: 1024px)": {
            marginRight: 200,
        }
    },
    menuIcon: {
        marginLeft: 20,
        color: '#cabffd',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        "@media (min-width: 1024px)": {
            display: 'none',
        },
        "@media (max-width: 1024px)": {
            marginRight: 0,
        }
    },
    search: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: theme.palette.text.primary,
        [theme.breakpoints.down("xs")]: {
            paddingRight: 0,
        }
    },
    themeIcon: {
        marginRight: 20,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: theme.palette.text.primary,
        [theme.breakpoints.down("xs")]: {
            paddingRight: 0,
        }
    },
    title: {
        fontWeight: 700,
        fontSize: 24,
        color: theme.palette.text.primary,
        [theme.breakpoints.down("xs")]: {
            fontSize: 18,
        }
    },
    asset: {
        padding: 8,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        border: '1px solid #666666',
        fontSize: 14,
        color: '#666666',
        background: theme.palette.background.paper
    },
    searchInput: {
        background: 'transparent',
        width: '100%',
        color: theme.palette.text.primary,
        border: 'none',
        outline: 'none',
    },
    assetIcon: {
        fill: '#9999ff',
    }
  }),
);

interface Props {
    connected:any;
    onConnect: any;
    chainId: any;
    menuShow: boolean;
    onClickMenuItem:()=>void
}

const Topbar: React.FC<Props> = ({ connected, setConnected, onConnect, chainId, menuShow, onClickMenuItem, light, setTheme }:any) => {
    const classes = useStyles();
    const MenuShow = ()=>{
        onClickMenuItem(!menuShow);
    }

    return (
        <Grid className={classes.root}>
            <Grid className={classes.logo} item xs={12} sm={2}>
                <img style={{width: 25, height: 25}} src={Darklogo} alt='The TIKI Bar' />
                <span style={{marginLeft:15}}>The TIKI Bar</span>
            </Grid>
            <Grid className={classes.menuIcon} item xs={12} sm={2} onClick={MenuShow}>
                <svg style={{width: 25, height: 25, cursor: 'pointer'}} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </Grid>
            <Grid className={classes.asset} item xs={12} sm={8}>
                <DescriptionIcon className={classes.assetIcon} />
                <input className={classes.searchInput} placeholder='Paste your address here' />
            </Grid>
            <Grid className={classes.themeIcon} item xs={12} sm={2}>
                <ThemeSwitch light={light} setTheme={setTheme} />
            </Grid>
        </Grid>
    );
}

export default Topbar;