import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";

var inputText = ''

const ContactUs = () => {
    const [data, setData] = useState({});
    const updateData = (pastedData) => {
        setData(pastedData);
    }

    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Schedule Rater</h2>
                    <p>(SPIRE Home/Enrollment Shopping Cart/~Copy either the Shopping Cart Table or the Class Table below it~) </p>
                </div>
                <div className="block">
                    <div className="row">
                        <div className="col-left">
                        <MultilineTextFields callback={updateData}/>
                            <form id="Paste" action="">
                            </form>
                            <p>{"value" in data ? data["value"] : "TODO: spawn the components using these classes"}</p>
                        </div>                        
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContactUs;

function MultilineTextFields(props) {
    var [fieldValue, setValue] = useState("");

    const updatePastedClick = (event) => {
        fieldValue = betterPrintClasses(fieldValue);
        // var copy = fieldValue.slice();
        // betterPrintClasses(copy);
        props.callback({value: fieldValue});
    }
  
    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };
  
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
            <TextField
                id="outlined-multiline-flexible"
                label="[--PASTE TABLE HERE--]"
                size="100"
                maxlength="8"
                maxRows={50}
                value={fieldValue}
                onChange={(e) => setValue(e.target.value)}>
            </TextField>
            <fieldset>
                <button onClick={updatePastedClick} name="submit" type="button" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
        </div>
      </Box>
    );
  }

//   function printClasses(str) {
//     const paragraphs = str.split(/\n\s\n|\n\n/);
//     var parLength = paragraphs.length;
//     const phrases = new Array(parLength);
//     //divide larger paragraphs into phrases (Phrases is an array of arrays)
//     for (var j = 0; j < paragraphs.length; j++){
//         phrases[j] = paragraphs[j].split(/[\t,\n]/);
//     }
//     //remove spaces in each phrase
//     for (var x = 0; x < phrases.length; x++){
//         for (var y = phrases.length - 1; y >= 0; y--){
//             if ((phrases[x][y]) == " "){
//                 phrases[x].splice(y, 1);
//             }
//         }
//     }
//     //print phrases
//     var outputString = "";
//     for (x = 1; x < phrases.length; x++){
//         outputString += (phrases[x][0].split(" ")[0] + "," + phrases[x][0].split(" ")[1].substring(0, 3) + "," + phrases[x][4] + "\n");
//     }
//     return outputString;
//     }   

    function betterPrintClasses(str){
        console.log("STARTING NOW");
        str = str.replace("\n", "");
        const words = str.split(" ");
        var parLength = words.length;
        var course = ""
        var num = "";
        var prof = "";
        const output = new Array();

        //If you find an element of the format (#####)
        // Assign the previous 2 elements to var_Course and var_Num
        // If you find an firstInitial of format [A-Z].  
        //     If the surname ends in a comma, ignore the initial and name after this one
        //     Assign the initial and the first name to var_Prof
        // If you find the Credits of format X.XX, the previous three values belong to a lecture section. Add these three values into an array. 

        for (var i = 0; i < words.length; i++){
            if (/\(\d{5}\)/.test(words[i])){
                course = words[i-2];
                num = words[i-1].substring(0,3);
            }
            if (/[A-Z]\./.test(words[i])){
                if (words[i+1].substring(words[i+1].length-1) == ","){
                prof = words[i] + " " + words[i+1].substring(0, words[i+1].length-1);
                words[i+2] = "X";
                }
                else { 
                prof = words[i] + " " + words[i+1];
                }
            }
            if (/[0-9]\.[0-9][0-9]/.test(words[i])){
                output.push(course);
                output.push(num);
                output.push(prof);
            }
        }
        //output can just as easily be an array, if the return value was just the output. 
        //output would be in format "ABBREVIATION", "3-Digit Number", "FirstInitial. Surname", "ABBREVIATION of 2nd class" , ... etc.
        var outputString = "";
        for (var x = 0; x < output.length; x++){
            outputString +=output[x] + " ";
        }
        return outputString;
    }
