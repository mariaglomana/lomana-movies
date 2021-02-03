import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { MoviePreviewData } from "types";
import { PageContainer } from "components";
import { RateMain } from "layout";
import { getUnratedRandomMovie } from "api";

const Rate: React.FC = () => {
  const history = useHistory();

  const [unratedMovie, setUnratedMovie] = useState<
    MoviePreviewData | undefined
  >(undefined);

  const memoizedLoadRandomMovie = useCallback(() => {
    const loadRandomMovie = async () => {
      const movie = await getUnratedRandomMovie();
      if (movie) {
        setUnratedMovie(movie as MoviePreviewData);
      } else {
        history.push("/");
      }
    };

    loadRandomMovie();
  }, [history]);

  useEffect(() => {
    memoizedLoadRandomMovie();
  }, [memoizedLoadRandomMovie]);

  return (
    <PageContainer title="Rate random movies">
      <RateMain
        unratedMovie={unratedMovie}
        memoizedLoadRandomMovie={memoizedLoadRandomMovie}
      />
    </PageContainer>
  );
};
export default Rate;
