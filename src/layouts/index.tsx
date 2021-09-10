import React, {useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Topbar from './Topbar';
import Contentbody from './Contentbody';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import useWindowDimensions from 'useDimensions';
import Dashboard from '../components/dashboard/Dashboard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        position: 'relative',
        width: '100%',
        backgroundColor: theme.palette.background.default,
        fontFamily: 'Fira Sans',
        // marginLeft: 'unset',
        // marginRight: 'unset',
    },
  }),
);

interface Props {
    light: boolean,
    setTheme: any,
    connected: boolean,
    onConnect: any,
    chainId: any,
    children: any,
}

const Layout: React.FC<Props> = ({ light, ...rest }: any) => {
    const classes = useStyles();
    const [isMenuShow, setIsMenuShow] = useState(false)
    const onClickIsMenuShow = ()=>{
        setIsMenuShow(!isMenuShow);
    }

    const [isClickMobile, setIsClickMobile] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const screenWidth = useWindowDimensions().width
    useEffect(() => {
        if (screenWidth > 1024) {
            setIsMobile(false)
        }
        else {
            setIsMobile(true)
        }
    }, [screenWidth])

    return (
        <Container className={classes.root} >
            <Dashboard light={light} menuShow={isMenuShow} isClickMobile={isClickMobile} setIsClickMobile={setIsClickMobile} isMobile={isMobile} onClickMenuItem={onClickIsMenuShow} {...rest} />
            {/* <Topbar light={light} menuShow={isMenuShow} isClickMobile={isClickMobile} setIsClickMobile={setIsClickMobile} isMobile={isMobile} onClickMenuItem={onClickIsMenuShow} {...rest} />
            <Contentbody light={light} isClickMobile={isClickMobile} setIsClickMobile={setIsClickMobile} menuShow={isMenuShow} isMobile={isMobile} {...rest} /> */}
        </Container>
    );
}

// Layout.propTypes = {
//     children: PropTypes.node.isRequired
// }

export default Layout;