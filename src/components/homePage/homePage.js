import React, {useState} from 'react';
import './homePage.css';

export default function HomePage() {
    
    const [fullName, setFullName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const frmdetails = {
        'Full Name':fullName,
        'Display Name':displayName
    };
    console.log(frmdetails);
    
    return (
        <div className="homePage">
            <p className="head1">
                Welcome! First things first...
            </p>
            <p className="subHead1">
                You can always change them later.
            </p>
            <form className="form1">
                <label className="label1">
                    <span className='inputTitle1'>Full Name</span>
                    <input type='text' placeholder='Steve Jobs' onChange={e => setFullName(e.target.value)} className="input1" />
                </label>
                <label className="label1">
                    <span className='inputTitle1'>Display Name</span>
                    <input type='text' placeholder='Steve' onChange={e => setDisplayName(e.target.value)} className="input1" />
                </label>
            </form>
        </div>
    );
}