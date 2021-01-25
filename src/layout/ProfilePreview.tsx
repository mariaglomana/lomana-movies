import React from "react";
import { upperFirst } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { User } from "../types";

const useStyles = makeStyles((theme) => ({
  description: {
    padding: theme.spacing(3, 0),
  },
  title: {
    marginTop: theme.spacing(3),
  },
}));

interface ProfilePreviewProps {
  user: User;
  setShowForm: (showForm: boolean) => void;
}

const ProfilePreview: React.FC<ProfilePreviewProps> = ({
  setShowForm,
  user,
}) => {
  const classes = useStyles();
  const warningText =
    "* The email associated to your account can't be changed.";
  return (
    <>
      <AccountCircleIcon fontSize="large" />
      <Typography variant="h6" gutterBottom className={classes.title}>
        {upperFirst(user.first_name)} {upperFirst(user.last_name)}
      </Typography>
      <Divider />
      <Typography variant="body1" className={classes.description} gutterBottom>
        {user.email}
      </Typography>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        aria-label="Edit profile"
        onClick={() => setShowForm(true)}>
        Edit profile
      </Button>
      <Typography
        variant="caption"
        className={classes.description}
        gutterBottom>
        {warningText}
      </Typography>
    </>
  );
};

export default ProfilePreview;
