import logo from './logo.svg';
import './App.css';
import { Route, Router, Link , Routes, useNavigate } from 'react-router-dom';

import React, { useState } from 'react'
import { Typography, Grid, Paper, IconButton , Button, Stack , Divider, Box,  List, ListItem, ListItemText, ListItemIcon, ListItemButton, Icon, } from '@mui/material'
import ReactApexChart from 'react-apexcharts'
import {MdDashboard ,MdFolderCopy ,MdError} from 'react-icons/md'
import {FaUser ,FaCalendarAlt ,FaStoreAlt} from 'react-icons/fa'
import {BsTable ,BsTwitter} from 'react-icons/bs'

import {AiOutlineForm ,AiFillQuestionCircle ,AiFillWarning}from 'react-icons/ai'


import Dashboard from './Dashboard';
import UserProfile from './UserProfile'
import Forms from './Forms'


function App() {
  const navigate = useNavigate();
  return (
    <Stack direction={'row'} width={'100%'}>

<Paper elevation={6} sx={{width: "300px" , height: "100vh"}} className='relative'> 
     

     <Stack padding={1} spacing={1} >
         <Box height={'7vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>     
           <Typography variant='h6' component={'div'} textAlign={'center'}>Dashboard 1</Typography>   
         </Box>
         <Divider/>
         <Button size='large' startIcon={<MdDashboard/>} fullWidth variant='contained' color='primary' className='drawerbutton1' onClick={()=>navigate("/")}>
               dashboard
         </Button>
         <Button size='large' startIcon={<FaUser/>} fullWidth variant='text' color='primary' className='drawerbutton1' onClick={()=>navigate("/users")} >
               user profile
         </Button>
 
         <Button size='large' startIcon={<AiOutlineForm/>} fullWidth variant='text' color='primary' className='drawerbutton1' onClick={()=>navigate("/forms")} >
               forms
         </Button>

     </Stack>

     <Box  className='drawerfooter' width={"100%"}>
       <IconButton color="primary">
           <AiFillQuestionCircle/>
       </IconButton>
       <Typography color={'primary'}>INFO</Typography>
     </Box>




     </Paper>


      
      <Box width= {'100%'} >

          <Routes>
            <Route path="" element={<Dashboard/>}/>
            <Route path="/users" element={<UserProfile/>} />
            <Route path="/forms" element={<Forms/>} />
          </Routes>
        

      </Box>


    </Stack>
  );
}

export default App;
