import { Box } from "@material-ui/core";
import ViewStatic from "../ViewStatic";
import Hidden from "@material-ui/core/Hidden";
const HomePage = () => {
  return (
    <Box display="flex" style={{ flexDirection: "column", flex:1, justifyContent:'center' }}>
      <Box display="flex" style={{ flexDirection: "row"}}>
        <Box display="flex" flex={1}>
          <ViewStatic />
        </Box>
        <Hidden mdDown>
          <Box display="flex" flex={1} style={{ marginLeft: 15 }}>
            <ViewStatic chart />
          </Box>
        </Hidden>
      </Box>
      <Box style={{marginTop:40}}>
        <Hidden lgUp>
          <Box display="flex" flex={1}>
            <ViewStatic chart />
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default HomePage;
