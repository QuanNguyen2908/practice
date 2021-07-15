import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../../Constant";
import MainHeader from "../MainHeader";
import { Box } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Profile from "../Profile";
import Item from "../Item";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import IconHomeBold from "../Svg/IconHomeBoid";
import IconHomeLight from "../Svg/IconHomeLight";
import IconProfileBold from "../Svg/IconProfileBold";
import IconProfileLight from "../Svg/IconProfileLight";
import IconPagerBold from "../Svg/IconPagerBold";
import IconPagerLight from "../Svg/IconPagerLight";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: DRAWER_WIDTH,
      backgroundColor: "#373B53",
      borderRightWidth: 0,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    iconStyle: {
      display: "flex",
      justifyContent: "center",
      paddingRight: 10,
    },
    activeTab: {
      backgroundColor: "white",
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      paddingTop: 18,
      paddingBottom: 18,
      "&:hover": {
        backgroundColor: "white",
      },
    },
    inActiveTab: {
      paddingTop: 18,
      paddingBottom: 18,
    },
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function MainMenu(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    setActiveTab(pathName.substring(1));
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickMenu = (tab: string) => {
    setActiveTab(tab);
    history.push(`/${tab}`);
  };

  const drawer = (
    <div>
      <Divider />
      <Box display="flex" justifyContent="center" style={{ paddingTop: 29 }}>
        <img src="logo.png" alt="Logo" />
      </Box>

      <List style={{ paddingLeft: 10 }}>
        <ListItem
          button
          className={
            activeTab === "home" ? classes.activeTab : classes.inActiveTab
          }
          onClick={() => handleClickMenu("home")}
          style={{
            marginTop: 18,
            marginBottom: 18,
          }}
        >
          <ListItemIcon className={classes.iconStyle}>
            {activeTab === "home" ? <IconHomeBold /> : <IconHomeLight />}
          </ListItemIcon>
        </ListItem>
        <ListItem
          button
          onClick={() => handleClickMenu("profile")}
          className={
            activeTab === "profile" ? classes.activeTab : classes.inActiveTab
          }
        >
          <ListItemIcon className={classes.iconStyle}>
            {activeTab === "profile" ? (
              <IconProfileBold />
            ) : (
              <IconProfileLight />
            )}
          </ListItemIcon>
        </ListItem>
        <ListItem
          button
          onClick={() => handleClickMenu("item")}
          className={
            activeTab === "item" ? classes.activeTab : classes.inActiveTab
          }
        >
          <ListItemIcon className={classes.iconStyle}>
            {activeTab === "item" ? <IconPagerBold /> : <IconPagerLight />}
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainHeader
        handleDrawerToggle={handleDrawerToggle}
        activeTab={activeTab}
      />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/item" component={Item} />
						{/* <Redirect to='/redaction' />  */}
        </Switch>
      </main>
    </div>
  );
}

export default MainMenu;
