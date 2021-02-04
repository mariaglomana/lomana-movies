import React, { Suspense } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useNearScreen } from "hooks";

const RateCounterMessage = React.lazy(() => import("./RateCounterMessage"));

export default function LazyRateCounterMessage() {
  const { isNearScreen, fromRef } = useNearScreen({
    distance: "0px",
  });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<CircularProgress />}>
        {isNearScreen ? <RateCounterMessage /> : <CircularProgress />}
      </Suspense>
    </div>
  );
}
