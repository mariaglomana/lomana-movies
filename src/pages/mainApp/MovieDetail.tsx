import React, {useState, useEffect} from "react";

import {APIMovieData } from "../../types";
import {PageContainer} from "../../components";
import {getMovieDetail } from "../../api";

interface MovieDetailProps {
  movie_id: string;
}

const MovieDetail: React.FC<MovieDetailProps> =({movie_id}) => {
  const title=movie_id;

  const [movie, setMovie] = useState< APIMovieData| undefined>(undefined);

  useEffect(()=>{
    const loadMovieDetail = async () => {
      const movie = await getMovieDetail(movie_id);
      if (movie) {
        setMovie(movie);
      }
    };
  
    loadMovieDetail();
  },[movie_id]);

  return (
    <PageContainer title={`Movie detail of ${title}`} />
    // </PageContainer>
  );
};
export default MovieDetail;
