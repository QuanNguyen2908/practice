import { Chip, Typography } from "@material-ui/core";

interface Status {
  bug: boolean;
  bonus: boolean;
  done: boolean;
}
interface BoxStatusProps {
  title: Status;
}

const BoxStatus = ({ title }: BoxStatusProps) => {
  return (
    <>
      {title.bug && (
        <Chip
          style={{
            borderRadius: 4,
            backgroundColor: "#FEE5DD",
            color: "#FC5569",
          }}
          size="small"
          label="Bug"
        />
      )}
      {title.bonus && (
        <Chip
          style={{
            borderRadius: 4,
            backgroundColor: "#DAE9FC",
            color: "#1473E6",
            marginLeft: 5,
            marginRight: 5,
          }}
          size="small"
          label="Bonus"
        />
      )}
      {title.done && (
        <Chip
          style={{
            borderRadius: 4,
            backgroundColor: "#DAE9FC",
            color: "#1473E6",
          }}
          size="small"
          label="Well Done"
        />
      )}
    </>
  );
};

export default BoxStatus;
