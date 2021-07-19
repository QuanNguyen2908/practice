import { Box, Typography } from "@material-ui/core";
import IconEye from "../Svg/IconEye";

interface ShowTotalProps {
  total?: number;
}

const ShowTotal = ({ total }: ShowTotalProps) => {
  return (
    <Box
      display="flex"
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <IconEye />
      <Typography style={{ marginLeft: 10 }}>
        {total ? total : 0} Point
      </Typography>
    </Box>
  );
};

export default ShowTotal;
