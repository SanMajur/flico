import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
import { MuiButton } from "./MuiButton";

type Props = {
  title: any;
  description: any;
  imageUrl?: any;
  subTitle: any;
  category: any;
  altText: any;
};

export default function MuiCard({
  title,
  description,
  imageUrl,
  subTitle,
  category,
  altText,
}: Props) {
  return (
    <Card
      sx={{ maxWidth: 405 }}
      className="relative sm:max-w-[18rem]  md:max-w-[16rem] mx-auto sm:mx-0"
    >
      <CardMedia
        component={"img"}
        image={imageUrl}
        alt={altText}
        className="h-[217px] w-full"
      />
      <CardContent component={"section"}>
        <Box className="bg-black/80 absolute top-36 left-0 right-0">
          <Typography
            variant="h5"
            className="flex items-center justify-center py-2 text-sm text-gray-100 gap-2"
          >
            {subTitle}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          className="text-xs border border-gray-500 w-36 rounded-full py-1 text-center bg-gray-100 absolute top-52 right-4"
        >
          {category}
        </Typography>
        <Typography
          variant="h5"
          component="h1"
          className="my-4 text-sky-600 text-sm font-bold"
        >
          {title}
        </Typography>
        <Typography variant="body2" className="text-base text-gray-600 mb-4">
          {description}
        </Typography>
        <CardActions>
          <MuiButton link="../about-us" btnText="Learn More" />
        </CardActions>
      </CardContent>
    </Card>
  );
}
