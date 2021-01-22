// do refactor
import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {StarGroupButtons} from "../components";

interface ActionRateGroupButtonsProps {
    rate?: number;
    loadRandomMovie:()=> void; 
    setRate:(rate?: number)=> void; 
    handleSaveRate:()=> void;
    handleClickStar: (i:number)=> void ;

    }

const ActionRateGroupButtons: React.FC<ActionRateGroupButtonsProps> =({
  rate, loadRandomMovie, setRate, handleSaveRate, handleClickStar}) => (
  <div>
    <StarGroupButtons handleClickStar={handleClickStar} selectedValue={rate}/>

    <Container style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
      {!rate ? (
        <Button
          style={{margin: 20}}
          variant="outlined"
          color="secondary"
          aria-label="Change the film"
          onClick={loadRandomMovie}>
          Change the film
        </Button>
      ):( <>
        <Button 
          style={{margin: 20}}
          variant="outlined"
          color="secondary"
          aria-label="Edit"
          onClick={()=>setRate(undefined)}
        >Edit</Button>
        <Button
          style={{margin: 20}}
          variant="contained"
          color="primary"
          aria-label="Save"
          onClick={handleSaveRate}
        >Save </Button>
      </>
      )}
    </Container>
  </div>
);
export default ActionRateGroupButtons;
