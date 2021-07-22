import { Avatar, Box, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Description from "../Description";
import ItemComponent from "../ItemComponent";
import SocialShare from "../SocialShare";

interface Item {
  url?: string;
  price: number;
  title: string;
  subTitle: string;
}
const data: Item[] = [
  {
    url: "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-lamborghini-full-hd-xanh-den-ben-duong-bien.jpg",
    price: 123456,
    title: "NETFLIX",
    subTitle: "Netflix Premium 2021",
  },
  {
    price: 123456,
    title: "Rapoo V500SE Rainbow Blue Switch",
    subTitle: "Rapoo V500SE 2021",
  },
  {
    url: "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-lamborghini-full-hd-xanh-den-ben-duong-bien.jpg",
    price: 123456,
    title: "NETFLIX",
    subTitle: "Netflix Premium 2021",
  },
  {
    price: 123456,
    title: "Rapoo V500SE Rainbow Blue Switch",
    subTitle: "Rapoo V500SE 2021",
  },
  {
    url: "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-lamborghini-full-hd-xanh-den-ben-duong-bien.jpg",
    price: 123456,
    title: "NETFLIX",
    subTitle: "Netflix Premium 2021",
  },
  {
    price: 123456,
    title: "Rapoo V500SE Rainbow Blue Switch",
    subTitle: "Rapoo V500SE 2021",
  },
  {
    url: "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-lamborghini-full-hd-xanh-den-ben-duong-bien.jpg",
    price: 123456,
    title: "NETFLIX",
    subTitle: "Netflix Premium 2021",
  },
  {
    price: 123456,
    title: "Rapoo V500SE Rainbow Blue Switch",
    subTitle: "Rapoo V500SE 2021",
  },
];

const Profile = () => {
  const content = "Thien le. I love play table tennis as well on free time.";
  return (
    <Box display="flex" style={{ flex: 1 }}>
      <Box display="flex" style={{ flex: 3, flexDirection: "column" }}>
        <Box>
          <Typography
            style={{ fontSize: 24, marginTop: 50, fontWeight: "bold" }}
          >
            My Item
          </Typography>
        </Box>
        <Box display='flex' style={{flexWrap:'wrap'}} >
          {data?.map((item, index) => {
            return <ItemComponent item={item} key={index} />;
          })}
        </Box>
      </Box>
      <Box
        display="flex"
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 70,
          flexDirection: "column",
          minWidth: 350,
        }}
      >
        <Avatar
          style={{ width: 200, height: 200 }}
          alt="Avatar"
          src="https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-lamborghini-full-hd-xanh-den-ben-duong-bien.jpg"
        />
        <Typography
          variant="subtitle2"
          style={{ fontSize: 20, lineHeight: 1, marginTop: 42 }}
        >
          Thien Le
        </Typography>
        <Typography
          variant="caption"
          style={{
            fontSize: 16,
            lineHeight: 1,
            fontWeight: 400,
            marginTop: 20,
            color: "#181C2F",
          }}
        >
          UX/UI Designer
        </Typography>
        <Description content={content} />
        <SocialShare />
        <Divider style={{ width: "80%", marginTop: 40 }} />
        <Box style={{ width: "80%", marginTop: 35, marginBottom: 45 }}>
          <Box display="flex" style={{ marginBottom: 10 }}>
            <Typography style={{ color: "gray" }}>Phone: </Typography>
            <Typography style={{ marginLeft: 30 }}>
              +(84) 986 745 848
            </Typography>
          </Box>
          <Box display="flex">
            <Typography style={{ color: "gray" }}>E-mail:: </Typography>
            <Typography style={{ marginLeft: 30 }}>
              lechithien93@gmail.com
            </Typography>
          </Box>
        </Box>
        <Divider style={{ width: "80%" }} />
      </Box>
    </Box>
  );
};

export default Profile;
