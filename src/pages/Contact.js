import React from 'react'
import Layout from '../components/Layout/Layout'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my: 5, ml: 10,"& h4":{fontWeight:'bold',mb: 2}}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>Visit us at My Restaurant, located in the heart of Mohammadpur, Dhaka. For reservations or inquiries, call us at [Your Phone Number] or email us at [Your Email Address]. Follow us on social media for the latest updates and special offers. We look forward to serving you the best foods in Dhaka!</p>

      </Box>
      <Box sx={{m:3, width: '600px', ml:'10', "@media (max-width:600px)":{
        width: '300px'
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor: 'black', color: 'white',}} align='center'>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <ContactPhoneIcon sx={{color: "orangered", padding: 1}}/>12345678 (tollfree)
                </TableCell>
                
              </TableRow>
              <TableRow>
              <TableCell>
                  <MailIcon sx={{color: "skyblue", padding: 1}}/>myresturant@help.com 
                </TableCell>
              </TableRow>
            </TableBody>
            <TableRow>
              <TableCell>
                  <CallIcon sx={{color: "green", padding: 1}}/>+88017511*****
                </TableCell>
              </TableRow>

          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
