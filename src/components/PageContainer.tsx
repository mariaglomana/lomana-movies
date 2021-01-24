import React from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import theme from "../assets/theme";

const useStyles = makeStyles({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: theme.spacing(6),
    alignSelf: "flex-start",
    marginBottom: theme.spacing(4),
  }
});
interface PageContainerProps{
  children?: React.ReactNode;
  title: string;
  withBackButton?: boolean;
}

const PageContainer: React.FC<PageContainerProps>=({children, title, withBackButton}) =>{
  const classes = useStyles();
  let history = useHistory();

  return (
    <Container maxWidth="lg" >
      <div className={classes.paper}>
        <Title >
          {title}
        </Title>
        {children}
        {withBackButton && (
          <div className={classes.button}
          >
            <Button
              variant="contained"
              color="secondary"
              aria-label="Go back"
              startIcon={<ArrowBackIcon />}
              onClick={() => history.goBack()}>
            Go back
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};


export default PageContainer;