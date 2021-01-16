import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface SignUpProps {
}

const SignUp: React.FC<SignUpProps> =() => {
  return (
    <Container maxWidth="md" >
      <Box style={{flex: 1, verticalAlign: "center", marginTop: 40}} >
        <Typography variant="body2" color="textPrimary">
          Sign Up
        </Typography>
      </Box>
    </Container>
  );
};
export default SignUp;
