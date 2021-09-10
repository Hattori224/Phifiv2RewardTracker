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
    asset: {
        marginTop: 30,
        padding: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: '#9933ff',
        fontSize: 17,
        fontWeight: 500,
        color: 'white',
    },
    assetLeft: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    assetRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        cursor: 'pointer',
    },
    assetIcon: {
        width: 25,
        height: 25,
    },
    assetTitle: {
        marginLeft: 10,
    },
    statusBar: {
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'center',
        "@media (min-width: 1024px)": {
            
        },
        "@media (max-width: 1024px)": {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }
    },
    statusItem: {
        marginTop: 30,
        padding: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: theme.palette.background.paper,
        fontSize: 17,
        fontWeight: 500,
        color: 'white',
    },
    statusItemOdd: {
        marginTop: 30,
        padding: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: theme.palette.background.paper,
        fontSize: 17,
        fontWeight: 500,
        color: 'white',
        "@media (min-width: 1024px)": {
            marginLeft: 15
        },
        "@media (max-width: 1024px)": {
            marginLeft: 0
        }
    },
    statusItemEven: {
        marginTop: 30,
        padding: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: theme.palette.background.paper,
        fontSize: 17,
        fontWeight: 500,
        color: 'white',
        "@media (min-width: 920px)": {
            marginLeft: 15
        },
        "@media (max-width: 920px)": {
            marginLeft: 0
        }
    },
    statusItemIcon: {
        width: 55,
        height: 70,
        minWidth: 55,
        maxWidth: 55,
        borderRadius: 5,
        background: '#ff5a1f',
        paddingLeft: 5,
        paddingRight: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusItemValue: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
    },
    statusTitle: {
        padding: 10,
        borderRadius: 6,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#3d0099',
        fontSize: 20,
        fontWeight: 500,
        color: '#555555',
        marginLeft: 15, 
        marginRight: 15
    },
    oneItem: {
        marginTop: 15,
        padding: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.background.paper,
        fontSize: 17,
        fontWeight: 500,
        color: 'white',
    },
    oneItemEven: {
        marginTop: 15,
        padding: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    firstgroup: {
        "@media (max-width: 920px)": {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        "@media (min-width: 920px)": {
            display: 'flex',
            flexDirection: 'row'
        }
    },
    secondgroup: {
        "@media (max-width: 920px)": {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        "@media (min-width: 920px)": {
            display: 'flex',
            flexDirection: 'row'
        }
    },
    lastgroup: {
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
                TIKI Earning Manager
            </Box>
            <Box className={classes.asset}>
                <Grid className={classes.assetLeft} item xs={12} sm={10}>
                    <Box className={classes.assetIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </Box>
                    <Box className={classes.assetTitle}>Please enter your address above</Box>
                </Grid>
                <Grid className={classes.assetRight} item xs={12} sm={2}>
                    <Box>Buy TIKI</Box>
                    <ArrowRightAltIcon />
                </Grid>
            </Box>
            <Grid className={classes.statusBar}>
                <Grid className={classes.firstgroup}  item xs={12}>
                    <Grid className={classes.statusItem}  item xs={12}>
                        <Grid className={classes.statusItemIcon} item xs={12} sm={3}>
                            <svg fill="none" style={{width: 20, height: 20}} viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                        </Grid>
                        <Grid className={classes.statusItemValue} item xs={12} sm={9}>
                            <Box style={{fontSize: 14, color: '#333333'}}>Your TIKI Holdings</Box>
                            <Box style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                                <Box style={{fontSize: 18}}>0</Box>
                                <Box style={{fontSize: 18, marginLeft: 10}}>TIKI</Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid className={classes.statusItemEven} item xs={12}>
                        <Grid className={classes.statusItemIcon} item xs={12} sm={3} style={{background: '#0e9f6e'}}>
                        <svg style={{width: 20, height: 20}} viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                        </Grid>
                        <Grid className={classes.statusItemValue} item xs={12} sm={9}>
                            <Box style={{fontSize: 14, color: '#333333'}}>Total BNB Paid</Box>
                            <Box style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                                <Box style={{fontSize: 18, color: 'yellow'}}>0.0000</Box>
                                <Box style={{fontSize: 18, color: 'green'}}>~$0.00</Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.secondgroup} item xs={12}>
                    <Grid className={classes.statusItemOdd} item xs={12}>
                        <Grid className={classes.statusItemIcon} item xs={12} sm={3} style={{background: '#3f83f8'}}>
                        <svg style={{width: 20, height: 20}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </Grid>
                        <Grid className={classes.statusItemValue} item xs={12} sm={9}>
                            <Box style={{fontSize: 14, color: '#333333'}}>Last Payout Time</Box>
                            <Box style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                                <Box style={{fontSize: 18}}>Never</Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid className={classes.statusItemEven} item xs={12}>
                        <Grid className={classes.statusItemIcon} item xs={12} sm={3} style={{background: '#c27803'}}>
                        <svg style={{width: 20, height: 20}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </Grid>
                        <Grid className={classes.statusItemValue} item xs={12} sm={9}>
                            <Box style={{fontSize: 14, color: '#333333'}}>Payout Loading</Box>
                            <Box style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                                <Box style={{fontSize: 18, color: 'yellow'}}>Processing</Box>
                                <Box style={{fontSize: 18,marginLeft: 10}}>| 0%</Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.oneItem} style={{}}>
                <Box className={classes.statusTitle} style={{}}>
                    Payload Is Processing
                </Box>
            </Grid>
            <Grid className={classes.oneItem} style={{}}>
                {/* <img style={{width: 100, height: 100, marginTop: 30}} src={Mainnet} alt='' /> */}
                <img style={{width: 150, height: 150, marginTop: 30}} src='https://tikitoken.app/static/media/bnb.162aaf57.png' />
                <Box style={{textAlign: 'center', fontSize: 32, marginTop: 30}}>Total BNB Paid To TIKI Holders</Box>
                <Box style={{display: 'flex', flexDirection: 'row', marginTop: 40}}>
                    <Box style={{fontSize: 64, color: '#31c48d'}}>21,707</Box>
                    <Box style={{fontSize: 64, color: '#faca15'}}>BNB</Box>
                </Box>
                <Box style={{fontSize: 64, marginTop: 40, color: '#31c48d', marginBottom: 30}}>= $8,938,080</Box>
            </Grid>
            <Grid className={classes.oneItem} style={{}}>
                <Box style={{textAlign: 'center', fontSize: 22, color: '#333333'}}>Estimations are based on a default of the last 24h of trading volume</Box>
                <Box style={{textAlign: 'center', fontSize: 22, color: '#333333'}}>Change the volume to predict earnings based on other volume figures</Box>
                <Box style={{fontSize: 22, color: '#333333', display: 'flex', alignItems: 'center', marginTop: 10}}>
                    Trading Volume = $ 
                    <input value='0' style={{background: 'white', height: 25, border: 'none', marginLeft: 5, fontSize: 22}} />
                </Box>
            </Grid>
            <Grid className={classes.lastgroup}>
                <Grid className={classes.oneItem} style={{}} item xs={12}>
                    <img style={{width: 150, height: 150, marginTop: 30}} src='https://tikitoken.app/static/media/money.d301ec34.png' />
                    <Box style={{fontSize: 32, marginTop: 30}}>Your 0 TIKI Earns:</Box>
                    <Box style={{display: 'flex', flexDirection: 'row', marginTop: 30}}>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>0.00</Box>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>BNB</Box>
                        <Box style={{fontSize: 25, color: '#31c48d', marginLeft: 5}}>($0.00)</Box>
                        <Box style={{fontSize: 25, color: '#555555', marginLeft: 5}}>Per Day</Box>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>0.00</Box>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>BNB</Box>
                        <Box style={{fontSize: 25, color: '#31c48d', marginLeft: 5}}>($0.00)</Box>
                        <Box style={{fontSize: 25, color: '#555555', marginLeft: 5}}>Per Week</Box>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>0.00</Box>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>BNB</Box>
                        <Box style={{fontSize: 25, color: '#31c48d', marginLeft: 5}}>($0.00)</Box>
                        <Box style={{fontSize: 25, color: '#555555', marginLeft: 5}}>Per Month</Box>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>0.00</Box>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>BNB</Box>
                        <Box style={{fontSize: 25, color: '#31c48d', marginLeft: 5}}>($0.00)</Box>
                        <Box style={{fontSize: 25, color: '#555555', marginLeft: 5}}>Per Year</Box>
                    </Box>
                    <Box style={{textAlign: 'center', fontSize: 18, color: '#555555', marginTop: 30, marginBottom: 10}}>Dynamic estimations based on trading volume of $95,057</Box>
                </Grid>
                <Grid className={classes.oneItemEven} item xs={12}>
                    <img style={{width: 150, height: 150, marginTop: 30}} src='https://tikitoken.app/static/media/money.d301ec34.png' />
                    <Box style={{textAlign: 'center', fontSize: 32, marginTop: 30}}>By Reinvesting Dividends Every Day, Your 0 TIKI Becomes:</Box>
                    <Box style={{display: 'flex', flexDirection: 'row', marginTop: 30}}>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>0</Box>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>TIKI</Box>
                        <Box style={{fontSize: 25, color: '#31c48d', marginLeft: 5}}>(0x Earnings)</Box>
                        <Box style={{fontSize: 25, color: '#555555', marginLeft: 5}}>In a Week</Box>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>0</Box>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>TIKI</Box>
                        <Box style={{fontSize: 25, color: '#31c48d', marginLeft: 5}}>(0x Earnings)</Box>
                        <Box style={{fontSize: 25, color: '#555555', marginLeft: 5}}>In a Month</Box>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>0</Box>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>TIKI</Box>
                        <Box style={{fontSize: 25, color: '#31c48d', marginLeft: 5}}>(0x Earnings)</Box>
                        <Box style={{fontSize: 25, color: '#555555', marginLeft: 5}}>In 6 Months</Box>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>0</Box>
                        <Box style={{fontSize: 25, color: '#faca15', marginLeft: 5}}>TIKI</Box>
                        <Box style={{fontSize: 25, color: '#31c48d', marginLeft: 5}}>(0x Earnings)</Box>
                        <Box style={{fontSize: 25, color: '#555555', marginLeft: 5}}>In 1 Year</Box>
                    </Box>
                    <Box style={{textAlign: 'center', fontSize: 18, color: '#555555', marginTop: 30, marginBottom: 10}}>Estimations are based on current $TIKI price ($0.0026)</Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;