import React, {useState, useEffect} from "react";
import { useHistory} from "react-router-dom";

import {ImageGridList} from "../../layout";
import {getMovies } from "../../api";
import {MoviePreviewData, APIMovieData } from "../../types";
import {getFormattedPreviewMovies} from "../../utils";
import {PageContainer} from "../../components";
interface SearchProps {

}

const Search: React.FC<SearchProps> =() => {

  let history = useHistory();
  const [allMovies, setAllMovies] = useState< MoviePreviewData[]>([]);
  // const [filterdMovies, setFilterdMovies] = useState< MoviePreviewData[]>(allMovies);
  
  async function fetchMovies() {
    const authToken = localStorage.getItem("planet_auth_token");
  
    if (authToken){
      const fetchedMovies: APIMovieData[] | undefined = await getMovies(authToken);
      if (fetchedMovies){
        const filteredMovies = getFormattedPreviewMovies(fetchedMovies);
        setAllMovies(filteredMovies as MoviePreviewData[]);
      }
    }else {
      history.push("/welcome");
    }
  }

  useEffect(()=>{
    fetchMovies();
  },[]);

  return (
    <PageContainer title="Your movies" >
      <ImageGridList title="All the available movies" data={allMovies} />
    </PageContainer>
  );
};
export default Search;
