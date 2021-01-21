import React, {useState, useEffect} from "react";
import { useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";

import {ImageGridList} from "../../layout";
import {MoviePreviewData } from "../../types";
import {PageContainer, RateGroupButtons} from "../../components";
import {getUnratedRandomMovie, registerRate } from "../../api";

interface RateProps {

}

const Rate: React.FC<RateProps> =() => {
  let history = useHistory();

  const [unratedMovie, setUnratedMovie] = useState< MoviePreviewData[]>([]);
  const [rate, setRate] = useState< number | undefined>(undefined);

  const handleSaveRate = () => {
    const response = registerRate(unratedMovie[0].id, rate as number);
    //post rate
    loadRandomMovie();
    setRate(undefined);
  };

  const handleClickStar =(value:number)=> {
    setRate(value);
  };

  const loadRandomMovie = async () => {
    const movie = await getUnratedRandomMovie();
    if (movie){
      setUnratedMovie(movie as MoviePreviewData[]);
    } else {
      history.push("/welcome");
    }
  };

  useEffect(()=>{
    loadRandomMovie();
  },[]);

  return (
    <PageContainer title="Rate random movies" >
      <ImageGridList title={""} data={unratedMovie} />

      <RateGroupButtons handleClickStar={handleClickStar} selectedValue={rate}/>

      {!rate ? (
        <Button
          variant="outlined"
          color="secondary"
          aria-label="Change the film"
          onClick={loadRandomMovie}>
          Change the film
        </Button>
      ):( <div style={{flex: 1, flexDirection: "row"}}> 
        <Button
          variant="outlined"
          color="secondary"
          aria-label="Edit"
          onClick={()=>setRate(undefined)}
        >        Edit     </Button>
        <Button
          variant="contained"
          color="primary"
          aria-label="Save"
          onClick={handleSaveRate}
        >Save </Button>
      </div>
      )}
     
    </PageContainer>
  );
};
export default Rate;
