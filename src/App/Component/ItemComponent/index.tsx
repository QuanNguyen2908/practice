import { Box, Typography } from "@material-ui/core";

interface Item {
  url?: string;
  price: number;
  title: string;
  subTitle: string;
}

interface ItemComponentProps {
  item: Item;
}

const ItemComponent = ({ item }: ItemComponentProps) => {
  if (item.url) {
    return (
      <Box
        display="flex"
        style={{
          width: 350,
          height: 170,
          borderRadius: 10,
          marginRight: 24,
          marginTop: 10,
          flexDirection: "column",
          position: "relative",
        }}
      >
        <img
          src={item.url}
          alt="1111"
          style={{ width: 350, height: 170, borderRadius: 10 }}
        />
        <Box
          display="flex"
          style={{
            background:
              "linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
            width: 350,
            height: 170,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            marginRight: 24,
            position: "absolute",
            alignItems: "flex-end",
          }}
        >
          <Box
            style={{
              background: "transparent",
              width: 350,
              height: 57,
              marginLeft: 12,
            }}
          >
            <Box>
              <Typography style={{ color: "#fff", fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography style={{ color: "#fff", fontSize: 14 }}>
                {item.subTitle}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      display="flex"
      style={{
        backgroundColor: "#000",
        width: 350,
        height: 170,
        borderRadius: 10,
        marginRight: 24,
        alignItems: "flex-end",
        marginTop: 10,
      }}
    >
      <Box
        style={{
          background: "transparent",
          width: 350,
          height: 57,
          marginLeft: 12,
        }}
      >
        <Box>
          <Typography style={{ color: "#fff", fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography style={{ color: "#fff", fontSize: 14 }}>
            {item.subTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemComponent;
