import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Autocomplete, TextField } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import IconButton from '@mui/material/IconButton';


function TwoSelect() {
    const navigate = useNavigate();
    const [value, setValue] = useState([null, null]);

    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const handleSelect = (ranges) => {
        setDateRange(ranges.selection);
        console.log(ranges.selection);
    };

    const goBack = () => {
      navigate("/preference1");
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '10px' }}>
       <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={goBack} style={{ marginRight: '20px' }}> {/* Arrow Icon */}
                <ArrowBackIcon />
            </IconButton>
            Create New Journey
        </div>
        
        <div style={{ marginBottom: '20px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Select a City</div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={koreanCities}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Select a Date</div>
            <DateRangePicker
                ranges={[dateRange]}
                onChange={handleSelect}
            />
        </div>

        <Button 
            variant="contained" 
            style={{borderRadius: '10px', marginBottom: '10px', textTransform: 'none', width: '13%', marginLeft: 'auto', marginRight: 'auto'}}
        >
            <Link 
                to="/maps" 
                className="white"
                style={{textDecoration: 'none'}}
            >
                Complete
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
