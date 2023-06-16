import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineBehance,
} from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <img className="logo" src="/assets/rast-mobile.svg" alt="Rast Mobile" />
      <Grid item>
        <Grid container spacing={2} className="navigation">
          <Typography>Hakkımızda</Typography>
          <Typography>Jüri-Yarışma Yazılımı</Typography>
          <Typography>Word Ninja</Typography>
          <Typography>Word Pyramids</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={2} style={{padding:"15px", cursor:"pointer"}}>
          <Grid item >
            <Typography className="social-icon">
              <AiOutlineYoutube size="30px" />
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="social-icon">
              <AiOutlineInstagram size="30px" />
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="social-icon">
              <AiOutlineBehance size="30px" />
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="social-icon">
              <AiFillLinkedin size="30px" />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
