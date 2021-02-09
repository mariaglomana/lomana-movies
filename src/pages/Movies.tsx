import React from "react";

import { MoviesSearchForm } from "layout";
import { PageContainer } from "components";

const Movies: React.FC = () => {
  return (
    <PageContainer title="Your movies">
      <MoviesSearchForm />
    </PageContainer>
  );
};
export default Movies;
