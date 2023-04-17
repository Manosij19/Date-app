import React, { useState } from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';


import { Link, useNavigate } from "react-router-dom";


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
  });






  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({ name: '', age: '', location: '' });
  };

  const handleEdit = () => {
    // Reset form data
    setFormData({ name: '', age: '', location: '' });
  };

  const handleLogout = () => {
    // Reset form data
  };

  

  return (
    <>
    
    <div className='input-form'>

    <Typography variant="h2" component="h2" sx={{fontFamily: 'PT Serif'}}>
   Enter Details
</Typography>





    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="About me"
              name="About me"
              placeholder = "Write about yourself to get best match!"
              value={formData.about}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Pick up Line"
              name="Pickup"
              placeholder = "Write a Pickup line!"
              value={formData.about}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleEdit}
              style={{ marginLeft: '8px' }}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    <div style={{ display: 'flex', justifyContent: 'center', margin : "50px 0px 0px 0px"}}>
    </div>
    <Link to="/">
      
                <Button sx={{ top: '17vh' }} variant="contained" color="error" startIcon={<LogoutIcon /> } onClick={handleLogout}>Logout</Button>
    </Link>
            </div>
    </>
  );
};

export default Form;
