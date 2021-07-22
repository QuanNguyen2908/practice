import { Box, IconButton } from "@material-ui/core";
import IconFacebook from "../Svg/IconFacebook";
import IconSkype from "../Svg/IconSkype";
import IconTwitter from "../Svg/IconTwitter";

const SocialShare = () => {
  return (
    <Box>
      <IconButton>
        <IconFacebook />
      </IconButton>
      <IconButton>
        <IconTwitter />
      </IconButton>
      <IconButton>
        <IconSkype />
      </IconButton>
    </Box>
  );
};

export default SocialShare
