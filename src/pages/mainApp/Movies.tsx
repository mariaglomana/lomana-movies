import React, {useState, useEffect} from "react";
import { useHistory} from "react-router-dom";

import { SearchForm} from "../../layout";
import {MoviePreviewData } from "../../types";
import {PageContainer} from "../../components";
import {getMovies } from "../../api";

interface SearchProps {
}

const Movies: React.FC<SearchProps> =() => {
  let history = useHistory();

  const [allMovies, setAllMovies] = useState< MoviePreviewData[]>([]);


  useEffect(()=>{
    const loadMovies = async () => {
      const movies = await getMovies();
      if (movies){
        setAllMovies(movies as MoviePreviewData[]);
      } else {
        history.push("/welcome");
      }
    };
  
    loadMovies();
  },[history]);

  return (
    <PageContainer title="Your movies" >
      < SearchForm movies={allMovies}/>
    </PageContainer>
  );
};
export default Movies;
