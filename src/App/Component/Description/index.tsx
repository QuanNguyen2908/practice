import { Box, Typography } from "@material-ui/core";

interface DescriptionProps {
  content: string;
}

const Description = ({ content }: DescriptionProps) => {
  const dataDescription = content.split(".");
  return (
    <Box display='flex' style={{alignItems:'center', flexDirection:'column', marginTop:20}}>
      {dataDescription?.map((item, index) => {
        return <Typography key={index} style={{fontSize:14}} >{item.trim()}.</Typography>;
      })}
    </Box>
  );
};

export default Description
