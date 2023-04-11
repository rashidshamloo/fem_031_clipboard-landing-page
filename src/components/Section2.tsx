import { forwardRef, Ref } from "react";

// material ui
import {
  Box,
  Container,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

// styles
import {
  containerStyles,
  headerStyles,
  subHeaderStyles,
} from "../styles/global";
import {
listItemHeaderStyles,
listItemSubHeaderStyle,
} from "../styles/section2";

// interfaces
interface ISection2Props {
  id: string;
}

const Section2 = forwardRef(({ id }: ISection2Props, ref: Ref<HTMLElement>) => {
  return (
    <Container component="section" sx={containerStyles} id={id} ref={ref}>
      <Box>
        <Typography component="h2" sx={headerStyles} data-aos="fade-in">
          Keep track of your snippets
        </Typography>
        <Typography
          sx={subHeaderStyles}
          data-aos="fade-in"
          data-aos-delay="200"
        >
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </Typography>
      </Box>
      <Stack
        sx={{
          mt: { xs: 6, md: 0 },
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "15rem", md: "auto" },
            mb: { xs: 5, md: 0 },
            backgroundImage: 'url("/images/image-computer.png")',
            backgroundPosition: { xs: "center", md: "right" },
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-in"
          data-aos-delay="400"
        />
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <List
            sx={{
              px: { xs: 0, md: 11 },
              py: { xs: 0, md: 6 },
            }}
          >
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={listItemHeaderStyles}
                  >
                    Quick Search
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle1" sx={listItemSubHeaderStyle}>
                    Easily search your snippets by content, category, web
                    address, application, and more.
                  </Typography>
                }
                data-aos="fade-left"
                data-aos-delay="600"
              />
            </ListItem>
            <ListItem sx={{ mt: { xs: 1, md: 4 } }}>
              <ListItemText
                primary={
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={listItemHeaderStyles}
                  >
                    iCloud Sync
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle1" sx={listItemSubHeaderStyle}>
                    Instantly saves and syncs snippets across all your devices.
                  </Typography>
                }
                data-aos="fade-left"
                data-aos-delay="900"
              />
            </ListItem>
            <ListItem sx={{ mt: { xs: 1, md: 4 } }}>
              <ListItemText
                primary={
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={listItemHeaderStyles}
                  >
                    Complete History
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle1" sx={listItemSubHeaderStyle}>
                    Retrieve any snippets from the first moment you started
                    using the app.
                  </Typography>
                }
                data-aos="fade-left"
                data-aos-delay="1200"
              />
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Container>
  );
});

export default Section2;
