import * as React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import theme from "../assets/theme";

interface PageContainerProps {
  children?: React.ReactNode;
  title: string;
}

const useStyles = makeStyles({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});


export default function PageContainer({children, title}: PageContainerProps) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" >
      <div className={classes.paper}>
        <Title >
          {title}
        </Title>
        {children}
      </div>
    </Container>

  );
}
