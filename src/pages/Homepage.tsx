import { Container } from '@mui/material'
import React from 'react'
import Topbar from '../components/Topbar'
import Landing from '../components/Landing'

function Homepage() {
  return (
    <Container maxWidth={false} sx={{ bgcolor: 'pink' }}>
      <Topbar />
      <Landing />
    </Container>
  )
}

export default Homepage