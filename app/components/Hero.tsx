import { Box, Button, Typography } from "@mui/material";
import { MuiButton } from "./MuiButton";
import MuiCard from "./MuiCard";
import MuiButtonLink from "./MuiButtonLink";
import Link from "next/link";

export const Hero = () => {
  return (
    <Box className="relative">
      <Box component={"section"} aria-label="hero-background-image">
        <div className="h-[100vh] bg-gradient-to-br from-cyan-400 to-cyan-700 md:bg-fixed bg-cover bg-center bg-norepeat"></div>
        <div className="absolute top-0 left-0 right-0 h-[100vh] bg-black/50"></div>
        <Box
          component={"section"}
          className="absolute top-32 md:top-44 left-0 right-0 container mx-auto z-10 px-8 lg:px-40 text-center flex items-center justify-center flex-col"
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
        aria-label="our-products"
      >
        <Box className="my-[50px] mx-[8.3333%] sm:mx-[6.3333%]">
          <Box className="mb-8 text-center">
            <Typography
              variant="subtitle2"
              gutterBottom
              className="text-cyan-600"
            >
              Future Logistics & Investment Products
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className="capitalize font-semibold"
            >
              our Product Lines
            </Typography>
            <Typography variant="body1" className="">
              Future Logistics & Investment company limited specializes in a
              range of products and goods, including but not limited to the
              following:
            </Typography>
          </Box>
          <Box className="flex justify-around flex-wrap flex-row gap-12 my-8">
            <MuiCard
              title="Construction Material"
              description="Future Logistics & Investment offers a broad array of health and safety products. From reflective tapes to gloves, we have products to keep everyone safe"
              subTitle={"Construction & Building Materials"}
              category={"Building & Construction"}
              imageUrl={"/construction.jpg"}
              altText={"construction site"}
              link={"../services/construction-materials"}
            />
            <MuiCard
              title="Hospitality & Accommodation"
              description="We provide custom supplies, brand supplies, and custom products which include world-class operating tools for housekeeping, hotel rooms, front office, and more."
              subTitle={" Hospitality - Hotel Supply Products"}
              category={"Hotel Supplies"}
              imageUrl={"/hospitality.avif"}
              altText={"hotel bed"}
              link={"../services"}
            />

            <MuiCard
              title="Foodstuff"
              description="We supply seasonal high-quality foodstuff products such as rice, dates, grains, etc. We ensure great food experiences that supersede what is expected."
              subTitle={"Food Stuffs Products"}
              category={"Foodstuff Trading"}
              imageUrl={"/farming.avif"}
              altText={"Wheat"}
              link={"../services"}
            />

            <MuiCard
              title="Health and Medical"
              description="Future Logistics deals with the sales and service of laboratory equipment, therapeutic tools, medical diagnostic equipment, medical devices, hospital furniture, and accessories."
              subTitle={"Medical Equipments"}
              category={"Health & Wellness"}
              imageUrl={"medic-equipments.avif"}
              altText={"Medical equipment"}
              link={"../services"}
            />

            <MuiCard
              title="Consumer Goods"
              description="We provide efficient consumer goods logistics, offering tailored supply chain solutions, from warehousing to delivery, ensuring timely and cost-effective distribution to meet market demands."
              subTitle={"Consumer Products"}
              category={"Retail Trading"}
              imageUrl={"/grocery.avif"}
              altText={"E-commerce"}
              link={"../services"}
            />
            <MuiCard
              title="Transportation"
              description="We offer reliable, cost-effective transportation services, ensuring timely delivery of goods via road, rail, sea, and air with tailored solutions for every client."
              subTitle={"Transportation & Logistics"}
              category={"Logistics"}
              imageUrl={"/transportation.jpg"}
              altText={"Transportation Truck"}
              link={"../services"}
            />
          </Box>
        </Box>
      </Box>
      <Box
        component={"section"}
        className=" bg-gray-50 py-8 "
        aria-label="our-products"
      >
        <Box className=" text-center my-[50px] mx-[8.3333%] sm:mx-[6.3333%]">
          <Typography
            variant="subtitle2"
            gutterBottom
            className="text-cyan-600"
          >
            Our Services
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="capitalize font-medium"
          >
            We offer a wide range of services to drive progress!
          </Typography>
          <Typography variant="body1" className="">
            At Future Logistics & Investment, we deliver a range of services to
            our clients in the Republic of South Sudan and globally.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
