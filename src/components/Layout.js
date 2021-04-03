import { makeStyles } from '@material-ui/core';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { format } from 'date-fns';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: "#f9f9f9",
            width: "100%",
            padding: theme.spacing(3)//! default spacing in material ui is 8px
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: "flex"
        },
        active: {
            backgroundColor: "#f4f4f4",
            color: "#000080"
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

const Layout = ({ children }) => {

    const classes = useStyles();
    let history = useHistory();
    let location = useLocation();

    const menuItems = [
        {
            id: 1,
            text: "My Notes",
            icon: <SubjectOutlined color="secondary" />,
            path: "/"
        },
        {
            id: 2,
            text: "Create Note",
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: "/create"
        }
    ];

    let date = format(new Date(), "do MMMM Y");

    return (
        // App Bar

        // Side Drawer
        <div className={classes.root}>
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography variant="h5" className={classes.date}>
                        Today Is {date}
                    </Typography>
                    <Typography variant="h5">
                        Aryan
                    </Typography>
                    <Avatar src="/face.png" className={classes.avatar} />
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h4" className={classes.title}>
                        React Notes
                    </Typography>
                </div>

                {/* list and links */}

                <List>
                    {menuItems.map((item) => {
                        return (
                            <ListItem
                                key={item.id}
                                button
                                onClick={() => history.push(item.path)}
                                className={location.pathname === item.path ? classes.active : null}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        );
                    })}
                </List>

            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    );
}

export default Layout;
