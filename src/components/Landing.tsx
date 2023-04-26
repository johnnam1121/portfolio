import React, { Component } from 'react'
import { Container, Box } from '@mui/material'

export class Landing extends Component {
  render() {
    return (
      <Container maxWidth={false} sx={{ height: '70vh' }}>
        <Box><p>test</p></Box>
        <Box><p>test</p></Box>
      </Container>
    )
  }
}

export default Landing