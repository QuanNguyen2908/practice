import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../../Constant";
import IconBell from "../Svg/IconBell";
import IconLogOut from "../Svg/IconLogOut";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
interface MainHeaderProps {
  handleDrawerToggle: () => void;
  activeTab: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

const MainHeader = ({ handleDrawerToggle, activeTab }: MainHeaderProps) => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      color="inherit"
      style={{ justifyContent: "space-between", flexDirection: "row" }}
    >
      <Box>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginLeft: 25 }}
          >
            <Typography variant="h6" noWrap>
              {activeTab.toUpperCase()}
            </Typography>
          </Box>
        </Toolbar>
      </Box>
      <Box display="flex" style={{ alignItems: "center", marginRight: 20 }}>
        <Box style={{ marginRight: 20 }} display="flex">
          <Box display='flex' style={{flexDirection:'column', alignItems:'flex-end',justifyContent:'center', marginRight:15}}>
            <Typography variant="subtitle2" style={{fontSize:16, lineHeight:1}}>Thien Le</Typography>
            <Typography variant="caption" style={{fontSize:11, lineHeight:1, fontWeight:'lighter'}} >UX/UI Designer</Typography>
          </Box>
          <Avatar
            style={{ width: 40, height: 40 }}
            alt="Avatar"
            src="logo192.png"
          />
        </Box>
        <Divider orientation="vertical" style={{ height: "70%" }} />
        <Box display="flex" style={{ marginLeft: 5 }}>
          <IconButton>
            <IconBell />
          </IconButton>
          <IconButton>
            <IconLogOut />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default MainHeader;
