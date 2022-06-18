import React from 'react';
import HorizontalLinearStepper from './horizontalStepper';
import './stepper.css';

export default function StepperComponent() {
    return (
        <div className='nav'>
            <div className='header'>
                <img alt='Eden Logo' src='/images/Edenlogo.png' className='img1' />
                <p className='title'>Eden</p>
            </div>
            <div className='horizontalStepper'>
                <HorizontalLinearStepper />
            </div>
        </div>
    );
}