import React, { useEffect, useState } from 'react'
import { Typography, Grid, Paper, IconButton , Button, Stack , Divider, Box,  List, ListItem, ListItemText, ListItemIcon, ListItemButton, Icon, } from '@mui/material'
import ReactApexChart from 'react-apexcharts'
import {MdDashboard ,MdFolderCopy ,MdError} from 'react-icons/md'
import {FaUser ,FaCalendarAlt ,FaStoreAlt} from 'react-icons/fa'
import {BsTable ,BsTwitter} from 'react-icons/bs'
import {AiOutlineForm ,AiFillQuestionCircle ,AiFillWarning}from 'react-icons/ai'

import Loadingscreen from './Loadingscreen'


function Dashboard() {

  const [Loading, setLoading] = useState(true)

  const [sales, setSales] = useState([
    {"month" :"January" , 'value' : 1000 },
    {"month" :"February" , 'value' : 475 },
    {"month" :"March" , 'value' : 346 },
    {"month" :"April" , 'value' : 484 }
  ])

  useEffect(() => {
 


    const timeoutId = setTimeout(() => {setLoading(false)}, 2000)

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (

    <div>
       <Stack direction={'row'} >


<Box paddingTop={10} width={'100%'}>
  <Grid container padding={2} spacing={3}>
      <Grid item xs={12} md={3} sx={{minWidth: '400px'}}>
        <Paper elevation={3} sx={{padding: "12px" , minHeight: '80px'}} className='relative' >
          <Paper className='dbpanelicon1' elevation={2} sx={{backgroundColor:'warning.light'}}>
             <MdFolderCopy/>
          </Paper>

          <Stack alignItems={'flex-end'}>
            <Typography variant='body1' component={'div'}>Used Space</Typography>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
             <Typography variant='h5'  component={'div'}>47/50</Typography>
             <Typography variant='body1' component={'div'}>GB</Typography>
            </Stack>
           

          </Stack>
          <Divider className='margintop18'/>
          <Typography variant='body2' component={'div'} > <AiFillWarning/> get more space</Typography>

        </Paper>

      </Grid>
      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{padding: "12px" , minHeight: '80px'}} className='relative' >
          <Paper className='dbpanelicon1' elevation={2} sx={{backgroundColor:'success.light'}}>
             <FaStoreAlt/>
          </Paper>

          <Stack alignItems={'flex-end'}>
            <Typography variant='body1' component={'div'}>Revenue</Typography>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
             <Typography variant='h5'  component={'div'}>$34,000</Typography>
             <Typography variant='body1' component={'div'}></Typography>
            </Stack>

          </Stack>
          <Divider className='margintop18'/>
          <Typography variant='body2' component={'div'} > <FaCalendarAlt/> last 24 hours</Typography>




        </Paper>

      </Grid>
      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{padding: "12px" , minHeight: '80px'}} className='relative' >
          <Paper className='dbpanelicon1' elevation={2} sx={{backgroundColor:'error.light'}}>
             <MdError/>
          </Paper>

          <Stack alignItems={'flex-end'}>
            <Typography variant='body1' component={'div'}>Fixed Issues</Typography>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
             <Typography variant='h5'  component={'div'}>47/50</Typography>
             <Typography variant='body1' component={'div'}></Typography>
            </Stack>
           
            

          </Stack>
          <Divider className='margintop18'/>
          <Typography variant='body2' component={'div'} > Tracked from github</Typography>




        </Paper>

      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{padding: "12px" , minHeight: '80px'}} className='relative' >
          <Paper className='dbpanelicon1' elevation={2} sx={{backgroundColor:'primary.light'}}>
             <BsTwitter/>
          </Paper>

          <Stack alignItems={'flex-end'}>
            <Typography variant='body1' component={'div'}>Followers</Typography>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
             <Typography variant='h5'  component={'div'}>+245</Typography>
             <Typography variant='body1' component={'div'}></Typography>
            </Stack>
           
            

          </Stack>
          <Divider className='margintop18'/>
          <Typography variant='body2' component={'div'} > just updated</Typography>




        </Paper>

      </Grid>


      <Grid item xs={12}  md={4}>
          <Paper elevation={3} sx={{padding: "12px" , minHeight: '80px', marginTop: '40px'}}>
              <Paper className='dbchart' sx={{backgroundColor: 'success.light'}}>
                <ReactApexChart
                type='line'
                options={{
                  xaxis: {
                      categories: sales.map(item=>item.month),
                    },
                    colors :['#FFFFFF'],
                 
              }}              
                 height={149}                   
                series={ [
                  {
                    name: 'Series 1',
                    data: sales.map(item=>item.value),
                  },
                ]}
                />


              </Paper>

              <Typography variant='body1'>Daily Sales</Typography>
               <Divider className='margintop18'/>
               <Typography variant='body2'>Updated 24 hours ago</Typography>

          </Paper>

         
      </Grid>

  </Grid>
</Box>
</Stack>
    </div>
 
   
   
  )
}
export default Dashboard