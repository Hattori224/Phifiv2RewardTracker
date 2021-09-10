import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Topbar from './Topbar';
import Contentbody from './Contentbody';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

    return (
        <Container className={classes.root} >
            <Topbar light={light} menuShow={isMenuShow} onClickMenuItem={onClickIsMenuShow} {...rest} />
            <Contentbody light={light} menuShow={isMenuShow} {...rest} />
        </Container>
    );
}

// Layout.propTypes = {
//     children: PropTypes.node.isRequired
// }

export default Layout;