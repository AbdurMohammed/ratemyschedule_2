import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MultilineTextFields from '../MultilineTextFields';

const ContactUs = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Schedule Rater</h2>
                </div>

                <div className="block">
                    <div className="row">
                        <div className="col-left">
                        <MultilineTextFields/>
                            <form id="contact" action="">
                                <h4>Paste your schedule in the box below!</h4>
                                <fieldset>
                                    <input placeholder="Your Schedule" type="text" tabIndex="10" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                </fieldset>
                            </form>
                            <h4>event.target.value</h4>
                        </div>                        
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContactUs;