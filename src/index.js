import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography } from "@material-ui/core";
import ReactDOM from "react-dom";

function App() {
  const [unit, setUnit] = useState("");
  function unitHandleChange(event) {
    if (event.target.value === unit) {
      setUnit("");
    } else {
      setUnit(event.target.value);
    }
  }
  return (
    <div>
      <Typography
                style={{ marginLeft: "13px", marginTop: "3px" }}
                color="textSecondary"
              >
                Unit
              </Typography>
              <RadioGroup
                aria-label="ageunit"
                name="ageunit1"
                style={{
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-around"
                }}
                value={unit}
                row={true}
              >
                <FormControlLabel
                  value="year"
                  labelPlacement="left"
                  label="Year"
                  style={{ height: "30px" }}
                 /*  className={classes.fontSize} */
                  control={<Radio size="small" color="primary" 
                  onClick={unitHandleChange} onKeyDown={e => e.key === 'Enter' && unitHandleChange(e)}/>}
                />
                <FormControlLabel
                  value="month"
                  labelPlacement="left"
                  style={{ height: "30px" }}
                 /*  className={classes.fontSize} */
                  control={<Radio size="small" color="primary" 
                  onClick={unitHandleChange} onKeyDown={e => e.key === 'Enter' && unitHandleChange(e)}/>}
                  label="Month"
                />
                <FormControlLabel
                  value="day"
                  labelPlacement="left"
                  style={{ height: "30px" }}
                 /*  className={classes.fontSize} */
                  control={<Radio size="small" color="primary" 
                  onClick={unitHandleChange} onKeyDown={e => e.key === 'Enter' && unitHandleChange(e)}/>}
                  label="Day"
                />
              </RadioGroup>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
