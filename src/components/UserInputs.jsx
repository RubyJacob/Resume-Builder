import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";

const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Work Experience', 'Skills and Certification', 'Review and Submit'];

function UserInputs() {
  const skillArray = ['HTML & CSS', 'JAVASCRIPT', 'REACT', 'NODE JS', 'MONGO DB', 'EXPRESS JS','ANGULAR' ,'LEADERSHIP', 'COMMUNICATION' ]
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderSteps = (stepCount) =>{
    switch(stepCount){
        case 0 : return (
            <div>
                <h2>Personal Details</h2>
                <div className="row p-3">
                  <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                  <TextField id="standard-basic-job" label="Job Title" variant="standard" />
                  <TextField id="standard-basic-location" label="Location" variant="standard" />
                </div>
            </div>
        )
        case 1 : return (
            <div>
                <h2>Contact Details</h2>
                <div className="row p-3">
                  <TextField id="standard-basic-email" label="Email" variant="standard" />
                  <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                  <TextField id="standard-basic-git" label="Github Profile Link" variant="standard" />
                  <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                  <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                </div>
            </div>
        )
        case 2 : return (
            <div>
                <h2>Educational Details</h2>
                 <div className="row p-3">
                  <TextField id="standard-basic-course" label="Course Name" variant="standard" />
                  <TextField id="standard-basic-clg" label="College Name" variant="standard" />
                  <TextField id="standard-basic-uni" label="University" variant="standard" />
                  <TextField id="standard-basic-passout" label="Year of Passout" variant="standard" />
                </div>
            </div>
        )
         case 3 : return (
            <div>
                <h2>Professional Details</h2>
                <div className="row p-3">
                  <TextField id="standard-basic-joi" label="Job or Internship" variant="standard" />
                  <TextField id="standard-basic-company" label="Company Name" variant="standard" />
                  <TextField id="standard-basic-cmploc" label="Company Location" variant="standard" />
                  <TextField id="standard-basic-duration" label="Duration" variant="standard" />
                </div>
            </div>
        )
        case 4 : return (
            <div>
                <h2>Skills</h2>
                <div className='d-flex align-items-center justify-content-between p-3'>
                   <input type="text" className="form-control" placeholder='Add Skills'/>
                    <Button variant='text'>ADD</Button>
                </div>
                <h5>Suggestions</h5>
                <div className='d-flex flex-wrap justify-content-between my-3'>
                {
                skillArray.map((item,index) => (
                    <Button key={index} variant='outlined' className='m-2'>{item}</Button>
                ))
                }
                </div>
                <h5>Added Skills:</h5>
                <div className='d-flex flex-wrap justify-content-between my-3'>
                <Button variant="contained" className='m-1'>NODE JS <FaXmark className='ms-2'/></Button>
                </div>
            </div>
        )
        case 5 : return (
            <div>
                <h2>Summary</h2>
                <div className="p-3 row">
                   <TextField id="standard-basic-summary" label="Write a short summary of yourself" variant="standard" multiline rows={4} defaultValue={'Enthusiastic MERN Stack Developer skilled in building dynamic, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in front-end and back-end development, API integration, and database management. Passionate about clean code, problem-solving, and continuous learning in modern web technologies.'}/>
                </div>
            </div>
        )
    }
  }






  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInputs