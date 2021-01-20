import React from "react";

import verticalLogo from "../../assets/images/logo_vertical.png";
import {PageContainer} from "../../components";

interface RateProps {

}

const Rate: React.FC<RateProps> =() => {
  // let history = useHistory();

  // const [randomMovie, setRandomMovie] = useState< MoviePreviewData[]>([]);
  // // const [filterdMovies, setFilterdMovies] = useState< MoviePreviewData[]>(randomMovie);
  
  // async function fetchMovies() {
  //   const authToken = localStorage.getItem("planet_auth_token");
  
  //   if (authToken){
  //     const fetchedMovies: APIMovieData[] | undefined = await getUnratedRandomMovie(authToken);
  //     if (fetchedMovies){
  //       const filteredMovies = getFormattedPreviewMovies(fetchedMovies);
  //       setRandomMovie(filteredMovies as MoviePreviewData[]);
  //     }
  //   }else {
  //     history.push("/welcome");
  //   }
  // }

  // useEffect(()=>{
  //   fetchMovies();
  // },[]);

  return (
    <PageContainer title="Rate random movies" >
      <img src={verticalLogo} alt="Logo"/>
    </PageContainer>
  );
};
export default Rate;
