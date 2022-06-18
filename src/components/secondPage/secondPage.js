import React, {useState} from "react";
import './secondPage.css'

export default function SecondPage() {

    const [workSpaceName, setWorkSpaceName] = useState("");
    const [workSpaceURL, setWorkSpaceURL] = useState("");
    const frmdetails2 = {
        'Work Space Name':workSpaceName,
        'Work Space URL':workSpaceURL
    };
    console.log(frmdetails2);
    
    return (
        <div className="secondPage">
            <p className="head2">
                Let's set up a home for all your work
            </p>
            <p className="subHead2">
                You can always create another workspace later.
            </p>
            <form className="form2">
                <label className="label2">
                    <span className='inputTitle2'>Workspace Name</span>
                    <input type='text' placeholder='Eden' onChange={e => setWorkSpaceName(e.target.value)} className="input2" />
                </label>
                <label className="label2">
                    <span className='inputTitle2'>Workspace URL
                        <span className="optional">(optional)</span>
                    </span>
                    <div className="input-box">
                        <span className="prefix">www.eden.com/</span>
                        <input type='text' placeholder='Example' onChange={e => setWorkSpaceURL(e.target.value)} className="input2 pre" />
                    </div>
                </label>  
            </form>
        </div>
    );
}