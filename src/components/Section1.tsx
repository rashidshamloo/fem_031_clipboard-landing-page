import { forwardRef, Ref } from "react";

// material ui
import { Box, Typography, Container } from "@mui/material";

// components
import ButtonSection from "./ButtonSection";

// styles
import {
  containerStylesWithBG,
  mainHeaderStyles,
  mainSubHeaderStyles,
} from "../styles/global";

// interfaces
interface ISection1Props {
  id: string;
}

const Section1 = forwardRef(({ id }: ISection1Props, ref: Ref<HTMLElement>) => {
  return (
    <Container component="header" sx={containerStylesWithBG} id={id} ref={ref}>
      {/* separating text and button section so they can
          spread out with "justify-content: space-evenly;" on mobile */}
      <Box>
        <img
          src="images/logo.svg"
          alt="Clipboard Logo"
          aria-hidden="true"
          data-aos="fade-down"
          data-aos-duration="1500"
        />
        <Typography
          component="h1"
          sx={mainHeaderStyles}
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          A history of everything you copy
        </Typography>
        <Typography
          sx={mainSubHeaderStyles}
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </Typography>
      </Box>
      <ButtonSection />
    </Container>
  );
});

export default Section1;
