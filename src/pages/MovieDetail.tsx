import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { APIMovieData } from "types";
import { PageContainer } from "components";
import { MovieDetailBody } from "layout";
import { getMovieDetail } from "api";
interface MovieDetailProps {
  movie_id: string;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie_id }) => {
  const title = "Movie detail";

  const [movie, setMovie] = useState<APIMovieData | undefined>(undefined);

  useEffect(() => {
    const loadMovieDetail = async () => {
      const movie = await getMovieDetail(movie_id);
      if (movie) {
        setMovie(movie);
      }
    };

    loadMovieDetail();
  }, [movie_id]);

  return (
    <PageContainer title={title} withBackButton>
      <main>
        {!movie ? <CircularProgress /> : <MovieDetailBody movie={movie} />}
      </main>
    </PageContainer>
  );
};
export default MovieDetail;
