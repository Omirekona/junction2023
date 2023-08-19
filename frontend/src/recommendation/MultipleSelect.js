import React from "react";
import '../App.css';
import { Button, Checkbox } from '@mui/material';
import { FormGroup, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';

function MultipleSelect() {

  const customStyle = {
    padding: '1px', 
    border: '1px solid gray', 
    display: 'inline-block', 
    borderRadius: '8px',
    marginRight: '15px',
    cursor: 'pointer',
    marginLeft: '15px',
    fontWeight: 'bold',
  }

  return (
    <div>
      <div className="mb-10 mt-5">
      What kind of trip do you prefer?
      </div>
      
      <div className="mb-3 rounded-xl">
        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Family</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Single</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Couple</span>}
          labelPlacement="end"
        />
      </div>

      <div className="mb-3 rounded-xl">
        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Nature</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Festival</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Food</span>}
          labelPlacement="end"
        />
      </div>

      <div className="mb-3 rounded-xl">
        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Arts</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Film</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Shopping</span>}
          labelPlacement="end"
        />
      </div>

      <div className="mb-3 rounded-xl">
        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Random</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Music</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Bike</span>}
          labelPlacement="end"
        />
      </div>


      <div className="mb-3 rounded-xl">
        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Car</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Bus</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Train</span>}
          labelPlacement="end"
        />
      </div>

      <div className="mb-3 rounded-xl">
        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Ship</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>City</span>}
          labelPlacement="end"
        />

        <FormControlLabel
          style={customStyle}
          control={<Checkbox onChange={() => { }} />}
          label={<span style={{fontWeight: 'bold', marginRight: '10px'}}>Countryside</span>}
          labelPlacement="end"
        />
      </div>

      <Button variant="contained" style={{borderRadius: '10px', marginBottom: '10px', marginTop: '5px'}}>
        <Link to="/preference2" style={{textDecoration: 'none', color: 'black'}}>Next</Link>
      </Button>

      
    </div>
  );
}

export default MultipleSelect;
