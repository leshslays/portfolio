import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Projects from '../projects/index';
import Avatar from '../components/avatar/index';
import Algotrade from "../projects/algotrade";
import Emailapp from "../projects/emailapp";
import Ninja from "../projects/ninjareport";
import '../App.css';
import Contact from "../components/contact/index";
import Resume from '../components/resume/index';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#547cb6",
        color: "white"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar style={{backgroundColor:"#547cb6"}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Avatar/>
                    <Typography variant="h6" noWrap>
                    Leshlye Rivera
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton style={{color:"white"}} onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem>
                        <Button href='/resume' style={{ width: '100%', textAlign: 'left', color: "white"}}><FindInPageIcon style={{color:"white"}}/> &nbsp; &nbsp; &nbsp; &nbsp; Resume</Button>
                    </ListItem>
                </List>
                <Divider />
                <List>
                        <ListItem>
                            <Button href='/' style={{ width: '100%', textAlign: 'left', color: "white"}}><SquareFootIcon style={{color:"white"}}/> &nbsp; &nbsp; Projects</Button>
                        </ListItem>
                        <ListItem>
                            <Button href='contact' style={{ width: '100%', textAlign: 'left', color: "white"}}><SendIcon style={{color:"white"}}/> &nbsp; &nbsp; &nbsp; Contact</Button>
                        </ListItem>

                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Projects} />
                        <Route exact path="/algotrade" component={Algotrade} />
                        <Route exact path="/emailapp" component={Emailapp} />
                        <Route exact path="/ninjareport" component={Ninja} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/resume" component={Resume} />
                    </Switch>
                </Router>
            </main>
        </div>
    );
}
