import { Container, Typography, Grid, Box } from "@mui/material";
import profile from "../images/rebrand-image.png";
import { styled } from "@mui/system";

const About = () => {
  const StyledContainer = styled(
    Container,
    {}
  )({
    marginTop: 20,
    marginBottom: 20,
  });

  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h3"
            fontFamily="Quicksand"
          >
            Rebrandly
          </Typography>
          <Typography
            variant="p"
            color="textPrimary"
            component="p"
            fontFamily="Quicksand"
          >
            Rebrandly is the industry-leading link management platform to brand,
            track and share short URLs using a custom domain name
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <img src={profile} alt="Profile" />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default About;
