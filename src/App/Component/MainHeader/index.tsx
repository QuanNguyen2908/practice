import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../../Constant";

interface MainHeaderProps {
  handleDrawerToggle: () => void;
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

const MainHeader = ({ handleDrawerToggle }: MainHeaderProps) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar} color='inherit'>
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
            HOME
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
