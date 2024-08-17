import { Button } from "@mui/material";

type Props = {
  link: any;
  btnText: any;
};

export const MuiButton = ({ link, btnText }: Props) => {
  return (
    <Button variant="outlined" href={link}>
      {btnText}
    </Button>
  );
};
