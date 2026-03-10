import React from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
      sx={{
        mt: 30,
        py: 6,
        borderTop: "1px solid",
        borderColor: "divider"
      }}
    >
      <Container maxWidth="md">

        <Typography variant="h6" fontWeight="bold" textAlign="center">
          Apoorva Dixit
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 3 }}
        >
          <IconButton
            component="a"
            href="https://github.com/Apoorva65"
            target="_blank"
            rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/apoorva-dixit-0b6698217/"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href="mailto:apoorvasdixit@gmail.com"
          >
            <EmailIcon />
          </IconButton>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} Apoorva Dixit. All rights reserved.
        </Typography>

      </Container>
    </Box>
  );
}

export default Footer;