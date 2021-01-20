import React, {useState, useEffect} from "react";
import { useHistory} from "react-router-dom";

import {ImageGridList} from "../../layout";
import {MoviePreviewData } from "../../types";
import {PageContainer} from "../../components";
import {getMovies } from "../../api";

interface SearchProps {

}

const Search: React.FC<SearchProps> =() => {

  let history = useHistory();
  const [allMovies, setAllMovies] = useState< MoviePreviewData[]>([]);
  // const [filterdMovies, setFilterdMovies] = useState< MoviePreviewData[]>(allMovies);

  const loadMovies = async () => {
    const movies = await getMovies();
    if (movies){
      setAllMovies(movies as MoviePreviewData[]);
    } else {
      history.push("/welcome");
    }
  };

  useEffect(()=>{
    loadMovies();
  },[]);

  return (
    <PageContainer title="Your movies" >
      <ImageGridList title="All the available movies" data={allMovies} />
    </PageContainer>
  );
};
export default Search;
