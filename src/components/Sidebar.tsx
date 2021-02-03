import React from "react";
import { replace, upperFirst } from "lodash";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { dataParam } from "types";
import imdb from "assets/images/imdb.png";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const LogoImg = styled.img`
  width: 60px;
  height: "auto";
`;

interface SidebarProps {
  title: string;
  data: dataParam[];
  url: string;
}

const Sidebar: React.FC<SidebarProps> = ({ title, data, url }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.sidebarAboutBox}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box mb={2}>
        {data.map((info, i) => (
          <Typography key={i}>
            {replace(info.key as string, "_", " ") +
              ": " +
              upperFirst(info.value)}
          </Typography>
        ))}
      </Box>
      <Link
        display="block"
        variant="body1"
        href={url}
        key="imdb-link"
        target="_blank"
        rel="noreferrer"
        aria-label="go to movie detail at IMDb">
        <Grid container direction="row" spacing={1} alignItems="center">
          <Grid item>
            <LogoImg src={imdb} alt="IMDb Logo" />
          </Grid>
          <Grid item>See more</Grid>
        </Grid>
      </Link>
    </Paper>
  );
};

export default Sidebar;
