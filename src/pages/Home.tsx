import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import verticalLogo from "../assets/images/logo_vertical.png";
import {ReactComponent as PlanetLogo } from "../assets/images/planet_logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


function Copyright() {
  return (
    <Box style={{marginTop: 30}} >
      <Typography variant="body2" color="textSecondary">
        {"Code test for Frontend Position at "}
        <Link href="https://www.planetdataset.com/" target="_blank" rel="noreferrer" aria-label="go to PlanetDataset">
          <PlanetLogo style={{height: 15, width: "auto", marginBottom: -2}}/>
        </Link>
        {`  - ${new Date().getFullYear()}`}.
      </Typography>
    </Box>
  );
}

// const AuthButton: React.FC =() =>{
//   let history = useHistory();
//   let auth = useAuth();

//   return auth.user ? (
//     <button
//       onClick={() => {
//         auth.signout(() => history.push("/welcome"));
//       }}
//     >
//         Sign out
//     </button>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// };


interface HomeProps {

}

const Home: React.FC<HomeProps> =() => {
  return (
    <Container maxWidth="md" >
      <Box style={{flex: 1, verticalAlign: "center", marginTop: 80}} >
        <Typography variant="body2" color="textPrimary">
          Home
        </Typography>

        <img src={verticalLogo} alt="Logo"/>


        {/* <AuthButton /> */}
        <Copyright />

      </Box>
    </Container>
  );
};
export default Home;
