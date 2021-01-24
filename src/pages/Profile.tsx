import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

import theme from "../assets/theme";
import {PageContainer} from "../components";
import {UserForm, ProfilePreview} from "../layout";
import {User} from "../types";
import {getUserData } from "../api";


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
  const [user, setUser] = useState< User| undefined>(undefined);

  const closeFormAfterChange =(userToSave?: User) => {
    if(userToSave){
      setUser(userToSave);
    }
    setShowForm(false);
  };

  useEffect(()=>{
    const loadUser = async () => {
      const fetchedUser = await getUserData();
      if (fetchedUser){
        setUser(fetchedUser);
      } 
    };
  
    loadUser();
  },[]);

  return (
    <PageContainer title="Your profile" >
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          {!user ? (<CircularProgress />): (
            showForm ? (
              <UserForm type="profile" user={user} closeFormAfterChange={closeFormAfterChange} />
            ) : (
              <ProfilePreview user={user} setShowForm={setShowForm}/>
            )
          )}
        </div>
        <Box mt={8}>
        </Box>
      </Container>

    </PageContainer>
  );
};
export default Profile;
