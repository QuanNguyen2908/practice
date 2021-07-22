import { Box } from "@material-ui/core";
import ViewStatic from "../ViewStatic";
import Hidden from "@material-ui/core/Hidden";
import ItemComponent from "../ItemComponent";

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
const HomePage = () => {
  return (
    <Box
      display="flex"
      style={{ flexDirection: "column", flex: 1, justifyContent: "center" }}
    >
      <Box display="flex" style={{ flexDirection: "row" }}>
        <Box display="flex" flex={1}>
          <ViewStatic />
        </Box>
        <Hidden mdDown>
          <Box display="flex" flex={1} style={{ marginLeft: 15 }}>
            <ViewStatic chart />
          </Box>
        </Hidden>
      </Box>
      <Box style={{ marginTop: 40 }}>
        <Hidden lgUp>
          <Box display="flex" flex={1}>
            <ViewStatic chart />
          </Box>
        </Hidden>
      </Box>
      <Box display="flex" style={{ flexWrap: "wrap", justifyContent:'center'}}>
        {data?.map((item, index) => {
          return <ItemComponent item={item} key={index} />;
        })}
      </Box>
    </Box>
  );
};

export default HomePage;
