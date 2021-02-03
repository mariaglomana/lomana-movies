import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import theme from "assets/theme";
import LogoImg from "./HeaderLogo";

const useStyles = makeStyles({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

interface SignPageContainerProps {
  children: React.ReactNode;
  title: string;
}

const SignPageContainer: React.FC<SignPageContainerProps> = ({
  children,
  title,
}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <LogoImg />
        <Box m={2}></Box>
        <Typography component="h1" variant="h5" paragraph>
          {title}
        </Typography>
        {children}
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};

export default SignPageContainer;
