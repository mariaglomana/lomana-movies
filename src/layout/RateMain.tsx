import React, { useState, useEffect } from "react";

import { MoviePreviewData } from "types";
import { ImageGridItem } from "components";
import { ActionRateGroupButtons } from "layout";

interface RateMainProps {
  unratedMovie?: MoviePreviewData;
  changeMovies: () => void;
  handleSaveRate: (rate: number) => void;
}

const RateMain: React.FC<RateMainProps> = ({
  unratedMovie,
  changeMovies,
  handleSaveRate,
}) => {
  const [rate, setRate] = useState<number | undefined>(undefined);

  const handleClickStar = (value: number) => {
    setRate(value);
  };

  useEffect(() => {
    setRate(undefined);
  }, [unratedMovie]);

  return (
    <>
      <ImageGridItem item={unratedMovie} />
      <ActionRateGroupButtons
        rate={rate}
        changeMovies={changeMovies}
        setRate={setRate}
        handleSaveRate={() => handleSaveRate(rate as number)}
        handleClickStar={handleClickStar}
      />
    </>
  );
};
export default RateMain;
