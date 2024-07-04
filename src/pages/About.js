import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign: "center",
        padding: 2,
        "& h4":{
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem"
        },
        "& p":{
          textAlign:"justify"
        },
        "@media (max-width:600px)":{
          mt: 0,
        }
      }}>
        <Typography variant='h4'>
          Welcome to My Resturant
        </Typography>
        <p>
         Located in the heart of Dhaka, Mohammadpur. We offer the best foods in the city, known for our delicious and diverse menu that guarantees a delightful dining experience every time.
        </p>
        <br/>
        <p>
        At My Restaurant in Mohammadpur, we offer a range of popular fast foods. Our menu features delicious shawarma and kebabs, served with fresh salads and sauces. We also serve mouth-watering burgers loaded with a variety of toppings, and pizzas with both local and international flavors. Our crispy fried chicken and hearty sandwiches are crowd favorites, showcasing the diverse and dynamic culinary offerings that make My Restaurant a top choice in Mohammadpur.
        </p>

      </Box>
    </Layout>
  )
}

export default About
