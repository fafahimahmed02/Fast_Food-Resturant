import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <Box sx={{textAlign: 'center', bgcolor:'black', color:'white', padding:3}}>

        <Box sx={{my: 3 ,"& svg":{
            fontSize:"60px",
            cursor: "pointer",
            margin: 2,
        },
        "& svg:hover":{
            color:'orangered',
            transform:'translateX(5px)',
            transition:'all 400ms',
        }
        }}>
           { /*icons */}
           <InstagramIcon/>
           <XIcon/>
           <YouTubeIcon/>
           <FacebookIcon/>
           
        </Box>
        <Typography variant='h5' sx={{"@media (man-width:600px)":{
            fontSize: "0.1rem"
        }}}>
            All Rights Reserved &copy; My Restaurant
        </Typography>
      </Box>
    </>
  )
}

export default Footer
