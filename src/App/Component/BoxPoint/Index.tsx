import { Chip } from "@material-ui/core";

interface Point {
  increase: number;
  reduction: number;
}
interface BoxPointProps {
  point: Point;
}

const BoxPoint = ({ point }: BoxPointProps) => {
  return (
    <>
      {point.reduction && (
        <Chip
          style={{
            borderRadius: 4,
            backgroundColor: "#fff",
            color: "#FC5569",
          }}
          size="small"
          label={`-${point.reduction} Point`}
        />
      )}
      {point.increase && (
        <Chip
          style={{
            borderRadius: 4,
            backgroundColor: "#fff",
            color: "#1473E6",
            marginLeft: 5,
            marginRight: 5,
          }}
          size="small"
          label={`+${point.increase} Point`}
        />
      )}
    </>
  );
};

export default BoxPoint;
