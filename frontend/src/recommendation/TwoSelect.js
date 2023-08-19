import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Autocomplete, TextField } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function TwoSelect() {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const handleSelect = (ranges) => {
        setDateRange(ranges.selection);
        console.log(ranges.selection);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <div>Create New Journey</div>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginTop: '10px' }}>
              <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={koreanCities}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Select a city" />}
              />
          </div>
          
          <DateRangePicker
              ranges={[dateRange]}
              onChange={handleSelect}
          />
          
          <Button 
              variant="contained" 
              style={{borderRadius: '10px', marginBottom: '10px', marginTop: '5px', textTransform: 'none', width: '10%', marginLeft: 'auto', marginRight: 'auto'}}
          >
              <Link 
                  to="/maps" 
                  className="white"
                  style={{textDecoration: 'none'}}
              >
                  Next
              </Link>
          </Button>
      </div>
  );
}

const koreanCities = [
    { label: 'Seoul' },
    { label: 'Busan' },
    { label: 'Incheon' },
    { label: 'Daegu' },
    { label: 'Daejeon' },
    { label: 'Gwangju' },
    { label: 'Suwon' },
    { label: 'Ulsan' },
    { label: 'Goyang' },
    { label: 'Seongnam' },
];

export default TwoSelect;
