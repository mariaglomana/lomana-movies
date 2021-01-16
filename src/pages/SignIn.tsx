import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface SignInProps {
}

const SignIn: React.FC<SignInProps> =() => {
  return (
    <Container maxWidth="md" >
      <Box style={{flex: 1, verticalAlign: "center", marginTop: 40}} >
        <Typography variant="body2" color="textPrimary">
          Sign In
        </Typography>
      </Box>
    </Container>
  );
};
export default SignIn;
