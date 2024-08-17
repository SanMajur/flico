import { Box, Button, Typography } from "@mui/material";
import { MuiButton } from "./MuiButton";
import MuiCard from "./MuiCard";

export const Hero = () => {
  return (
    <Box className="relative">
      <Box component={"section"} aria-label="hero-background-image">
        <div className="h-[100vh] bg-gradient-to-br from-cyan-400 to-cyan-700 md:bg-fixed bg-cover bg-center bg-norepeat"></div>
        <div className="absolute top-0 left-0 right-0 h-[100vh] bg-black/50"></div>
        <Box
          component={"section"}
          className="absolute top-36 md:top-52 left-0 right-0 container mx-auto z-10 px-8 lg:px-40 text-center flex items-center justify-center flex-col"
        >
          <Typography variant="h4" component="h1" className="mb-8">
            Welcome to Future Logistics & Investment
          </Typography>
          <Typography variant="body1" className="w-[75%] mx-auto mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            fugit, nostrum magnam quae excepturi reprehenderit, deleniti, aut
            dolor sit molestias voluptate sapiente provident asperiores. Commodi
            aperiam in est aut rem.
          </Typography>
          <MuiButton link="../about-us" btnText="Learn More" />
        </Box>
      </Box>
      <Box
        component={"section"}
        className="my-[50px] mx-[8.3333%]"
        aria-label="about-us"
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          className="capitalize"
        >
          about us
        </Typography>
      </Box>
      <Box
        component={"section"}
        className=" bg-gray-200 py-4"
        aria-label="our-services"
      >
        <Box className="my-[50px] mx-[8.3333%] sm:mx-[6.3333%]">
          <Box className="mb-8 text-center">
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className="capitalize"
            >
              our services
            </Typography>
            <Typography variant="body1" className="">
              Future Logistics & Investment specializes in a range of products
              and goods, including but not limited to the following:
            </Typography>
          </Box>
          <Box className="flex flex-col justify-start sm:flex-row gap-8 flex-wrap">
            <MuiCard
              title="Construction Material"
              description="Future Logistics & Investment offers a broad array of health and safety products. From reflective tapes to gloves, we have products to keep everyone safe"
              subTitle={"Construction & Building Materials"}
              category={"Building & Construction"}
              imageUrl={"/construction.jpg"}
              altText={"construction site"}
            />
            <MuiCard
              title="Hospitality & Accommodation"
              description="We provide custom supplies, brand supplies, and custom products which include world-class operating tools for housekeeping, hotel rooms, front office, and more."
              subTitle={" Hospitality - Hotel Supply Products"}
              category={"Hotel Supplies"}
              imageUrl={"/hospitality.avif"}
              altText={"hotel bed"}
            />
            <MuiCard
              title="Foodstuff"
              description="We supply seasonal high-quality foodstuff products such as rice, dates, grains, etc. We ensure great food experiences that supersede what is expected."
              subTitle={"Foodstuff Products"}
              category={"Foodstuff Trading"}
              imageUrl={"/farming.avif"}
              altText={"construction site"}
            />
            <MuiCard
              title="Foodstuff"
              description="We supply seasonal high-quality foodstuff products such as rice, dates, grains, etc. We ensure great food experiences that supersede what is expected."
              subTitle={"Foodstuff Products"}
              category={"Foodstuff Trading"}
              imageUrl={"/farming.avif"}
              altText={"construction site"}
            />
            <MuiCard
              title="Foodstuff"
              description="We supply seasonal high-quality foodstuff products such as rice, dates, grains, etc. We ensure great food experiences that supersede what is expected."
              subTitle={"Foodstuff Products"}
              category={"Foodstuff Trading"}
              imageUrl={"/farming.avif"}
              altText={"construction site"}
            />
            <MuiCard
              title="Foodstuff"
              description="We supply seasonal high-quality foodstuff products such as rice, dates, grains, etc. We ensure great food experiences that supersede what is expected."
              subTitle={"Foodstuff Products"}
              category={"Foodstuff Trading"}
              imageUrl={"/farming.avif"}
              altText={"construction site"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
