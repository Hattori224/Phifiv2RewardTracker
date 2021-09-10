import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
// import { isWhiteSpaceLike } from 'typescript';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Mainnet from '../../../assets/images/layout/Mainnet.png';

interface Props {
    connected:any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        [theme.breakpoints.down("xs")]: {
            marginTop: 15,
            marginBottom: 12,
        }
    },
    title: {
        fontWeight: 700,
        fontSize: 30,
        color: theme.palette.text.primary,
        [theme.breakpoints.down("xs")]: {
            fontSize: 18,
        }
    },
    oneItem: {
        marginTop: 15,
        padding: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: theme.palette.background.paper,
        fontWeight: 400,
        color: '#aaaaaa',
    },
    oneItemEven: {
        marginTop: 15,
        padding: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: theme.palette.background.paper,
        fontWeight: 400,
        color: theme.palette.text.primary,
        "@media (min-width: 920px)": {
            marginLeft: 15
        },
        "@media (max-width: 920px)": {
            marginLeft: 0
        }
    },
    firstrow: {
        "@media (max-width: 920px)": {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        "@media (min-width: 920px)": {
            display: 'flex',
            flexDirection: 'row'
        }
    }
  }),
);

const Header: React.FC<Props> = ({ connected }:any) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                TIKI Recovery Program for MOAI Lossholders
            </Box>
            <Grid className={classes.firstrow}>
                <Grid className={classes.oneItem} style={{}} item xs={12} sm={12}>
                    <Box style={{textAlign: 'left',fontSize: 32, marginTop: 30}}>Claimable Balance:</Box>
                    <Box style={{textAlign: 'center', fontSize: 25, marginTop: 30}}>Your currently claimable BNB balance from the recovery protocol is:</Box>
                    <Box style={{textAlign: 'center', color: '#faca15', fontSize: 25, marginTop: 30}}>CONNECT YOUR WALLET</Box>
                    <Box style={{textAlign: 'center', fontSize: 25, marginTop: 30}}>Click <span style={{color: '#9061f9', cursor: 'pointer'}}>HERE</span> to claim your pending balance.</Box>
                </Grid>
                <Grid className={classes.oneItemEven} style={{backgroundColor: '#7e3af2'}} item xs={12} sm={12}>
                    <Box style={{textAlign: 'left',fontSize: 32, marginTop: 30, color: '#ffffff'}}>Remaining Balance:</Box>
                    <Box style={{textAlign: 'center', fontSize: 25, marginTop: 30, color: '#ffffff'}}>
                        You have claimed 
                        <span style={{color: '#faca15', cursor: 'pointer'}}>CONNECT YOUR WALLET</span> 
                        from the recovery protocol. Your total amount to be paid from the recovery protocol is 
                        <span style={{color: '#faca15', cursor: 'pointer'}}>CONNECT YOUR WALLET</span>
                        . Please continue to check here as the claimable balance grows to meet your full loss.
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;