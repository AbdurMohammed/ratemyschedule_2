import React from 'react'
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { AppApiClient } from './AppApiClient';
import { parse } from 'papaparse';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200
    }
}))

    

const Catalog = () => {

    const classes = useStyles()
    
    const [subject, setValue] = React.useState('')

    const data =  AppApiClient.getCSV("Computer Science");
    const parseFile = data => {
        parse(data, {
            header: true,
        });
    };
    console.log(parseFile);

    const handleChange = (event) => {
        setValue(event.target.subject)
    }
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Catalog</h2>
                    <p>
                        Here you can browse various ratings for UMass classes based on your major. Select a subject from the drop down below!
                    </p>
                    <p>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                                <Select
                                 labelId="select"
                                 id="subject-select"
                                 value={subject}
                                 label="Subject"
                                 onChange={handleChange}
                                >
                            <MenuItem subject={'Computer Science'}>Computer Science</MenuItem>
                            <MenuItem subject={'Mathematics'}>Mathematics</MenuItem>
                            <MenuItem subject={'Biology'}>Biology</MenuItem>
                        </Select>
                    </FormControl>
                    </p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Catalog;