import React from "react";
import '../App.css';
import { Button, Checkbox } from '@mui/material';
import { FormGroup, FormControlLabel } from '@mui/material';

function MultipleSelect() {
    return (
    <div>What kind of trip do you prefer?
      <div className="mb-3 rounded-xl">
      <label style={{ padding: '5px', border: '1px solid gray', display: 'inline-block', borderRadius: '8px' }} className='mr-3 custom-checkbox'>
    <input type="checkbox" onChange={() => { }} />
    <span className="ml-2 mr-2 font-bold font text-slate-500">Family</span>
</label>

      <label>
        <input type="checkbox" onChange={() => {}} className="rounded-full " />
        <span className="ml-2 mr-2">Single</span>
      </label>
      <label>
        <input type="checkbox" onChange={() => {}} className="rounded-full " />
        <span className="ml-2 mr-2">Couple</span>
      </label>
      </div>

      <div>
      <label style={{padding: '3px'}} className='rounded br-2 border-black bg-red-500'>
        <input type="checkbox" onChange={() => {}}/>
        <span className="ml-2 mr-2" >Nature</span>
      </label>
      <label>
        <input type="checkbox" onChange={() => {}} className="rounded-full " />
        <span className="ml-2 mr-2">Festival</span>
      </label>
      <label>
        <input type="checkbox" onChange={() => {}} className="rounded-full " />
        <span className="ml-2 mr-2">Food</span>
      </label>
      </div>

      <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>



      <div className="mt-8 mb-10">
    <Button variant="contained" >
      Next
    </Button>
      </div>

    </div>
      


    );
  }
  
  export default MultipleSelect;   