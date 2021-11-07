import React from 'react'
import './Pricing.css'
import { Button } from '@material-ui/core'
import { Box } from '@mui/system'

const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
            <div className="columns">
                <Box textAlign='center'>
                <Button variant="outlined">Text</Button>
                </Box>
                </div>

                <div className="columns">
                <Box textAlign='center'>
                <Button variant="outlined">Text</Button>
                </Box>
                </div>

                <div className="columns">
                <Box textAlign='center'>
                <Button variant="outlined">Text</Button>
                </Box>
            </div>

            </section>
        </React.Fragment>
    )
}

export default Home;