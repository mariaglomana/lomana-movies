import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import theme from "../../assets/theme";
import {PageContainer} from "../../components";
import {UserForm, ProfilePreview} from "../../layout";
import {User} from "../../types";

const useStyles = makeStyles({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

interface ProfileProps {

}

const Profile: React.FC<ProfileProps> =() => {
  const classes = useStyles();
  const [showForm, setShowForm] = useState<boolean>(false);

  const user: User = {
    id: "vdwaflkeñ",
    first_name: "María",
    last_name: "García", 
    email: "maria@gmail.com",
  };

  return (
    <PageContainer title="Your profile" >
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>

          {showForm ? (
            <UserForm type="profile" user={user} setShowForm={setShowForm}/>
          ) : (
            <ProfilePreview user={user} setShowForm={setShowForm}/>
          )}
        </div>
        <Box mt={8}>
        </Box>
      </Container>

    </PageContainer>
  );
};
export default Profile;
