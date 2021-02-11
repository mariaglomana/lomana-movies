import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  copyright: {
    marginTop: theme.spacing(4),
  },
  link: {
    fontWeight: 700,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary,
    },
  },
}));

const Copyright: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.copyright}>
      <Typography
        variant="body2"
        color="textSecondary"
        component="span"
        style={{ flexDirection: "row" }}>
        {"Made with 💜 by "}
        <Link
          href="https://www.linkedin.com/in/mariagarciadelomana/"
          target="_blank"
          rel="noreferrer"
          aria-label="go to mariaglomana linkedin"
          className={classes.link}
          underline="none">
          <Typography
            variant="body2"
            component="span"
            className={classes.link}
            color="textSecondary">
            {"mariaglomana"}
          </Typography>
        </Link>
        {` - ${new Date().getFullYear()}`}.
      </Typography>
    </Box>
  );
};

export default Copyright;
