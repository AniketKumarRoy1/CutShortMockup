import * as React from 'react';
import './horizontalStepper.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { StepConnector } from '@mui/material';
import { withStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

const steps = ['/secondPage', '/thirdPage', '/fourthPage', 'launchEden'];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const QontoConnector = withStyles({
        active: {
            '& $line': {
                borderColor: '#5a4ad1'
            }
        },
        completed: {
            '& $line': {
                borderColor: '#5a4ad1'
            }
        },
        line: {
            borderColor: '#5a4ad1',
            borderTopWidth: 3,
            borderRadius: 1
        }
    })(StepConnector)

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} connector={<QontoConnector />}>
                {steps.map((label) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}></StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <React.Fragment>
                <NavLink to={steps[activeStep]} className='lnk'>
                    <Button onClick={handleNext} className='btn'>
                        {activeStep >= steps.length - 1 ? 'Launch Eden' : 'Create Workspace'}
                    </Button>
                </NavLink>
            </React.Fragment>
        </Box>
    );
}
