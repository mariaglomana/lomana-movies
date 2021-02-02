import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Rating } from "../types";
import { PageContainer, ImageGridItem } from "../components";
import { ActionRateGroupButtons } from "../layout";
import { getRatings } from "../api";

const Favorites: React.FC = () => {
  const history = useHistory();

  const [ratings, setRatings] = useState<Rating[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const memoizedLoadRatings = useCallback(() => {
    const loadRatings = async () => {
      setIsLoading(true);
      const ratings = await getRatings();
      if (ratings) {
        setRatings(ratings);
      }
      setIsLoading(false);
    };

    loadRatings();
  }, [history]);

  useEffect(() => {
    memoizedLoadRatings();
  }, [memoizedLoadRatings]);

  return (
    <PageContainer title="Your favorite movies:">
      {isLoading ? (
        <CircularProgress />
      ) : !ratings.length ? (
        <h4>
          {"You haven't rated any movie yet"}
          <br />
          Please, visit the Rate section
        </h4>
      ) : (
        <ul>
          {ratings.map((rating) => (
            <li key={rating.id}>
              {rating.movie.title}: {rating.score}
            </li>
          ))}
        </ul>
      )}
    </PageContainer>
  );
};
export default Favorites;
