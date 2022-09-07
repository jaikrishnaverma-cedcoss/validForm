import React from 'react';
import './BaseUI.css'
import './App.css'
function App() {
    let initial={
        afname:"",
        alname:"",
        dob:"",
        gender:"",
        detailsSibling:"",
        ffname:"",
        flname:"",
        fQualification:"",
        fmob:"",
        femail:"",
        fOccupation:"",
        mfname:"",
        mlname:"",
        mQualification:"",
        mmob:"",
        memail:"",
        mOccupation:"",
        address:""
    }


    const formHandler=(e)=>{
        e.preventDefault();
        alert("successfully submited!")
        console.log(initial)
    }

    const changeHandler=(e)=>{
        const mob=/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
      if(e.target.name==="fmob"||e.target.name==="mmob")
      {
        if(!e.target.value.match(mob))
            e.target.style.color="red"
        else
        e.target.style.color="black"
      }
    initial = { ...initial, [e.target.name]: e.target.value };
        console.log(e.target.value)
    }
    return ( <>
    <div className='body'>
        <div className="form">
            <form onSubmit={formHandler}>

        <h1 style={{margin:"2% 0%"}}>Student Registration Form</h1>
        <div className="col">
            <p>Name of the Applicant</p>
            <div className="row w100">
                <div className="col w50 col1"><input required minLength="3" maxLength="20" onChange={changeHandler} type="text" name="afname" placeholder='First'/></div>
                <div className="col w50 col2"><input required minLength="3" maxLength="20" onChange={changeHandler} type="text" name="alname" placeholder='Last'/></div>
                
            </div>

            <p>Date Of Birth</p>
            <div className="col w100">
            <input required onChange={changeHandler} type="date" name="dob" id="" />
            </div>

            <p>Gender</p>
            <div className="row w100 flexAIC"><input required onChange={changeHandler} type="radio" name="gender" value="male" id="" /><span>Male</span></div>
            <div className="row w100 flexAIC"><input required onChange={changeHandler} type="radio" name="gender" value="female" id=""  /><span>Female</span></div>
       
            <p>Details of Siblings</p>
           <div className="row w100">
           <textarea name="detailsSibling" id="" minLength="3" maxLength="20" required onChange={changeHandler}  cols="30" placeholder='Enter Details' rows="4" className="w100"></textarea>
       
           </div>
            <h2 style={{margin:"2% 0%"}}>Parents Infromation</h2>

            <p>Fathers Name</p>
            <div className="row w100">
                <div className="col w50 col1"><input minLength="3" maxLength="20" required onChange={changeHandler} type="text" name="ffname" placeholder='First'/></div>
                <div className="col w50 col2"><input minLength="3" maxLength="20" required onChange={changeHandler} type="text" name="flname" placeholder='Last'/></div>
            </div>
        
            <p>Fathers Qualification</p>
            <div className="row w100">
            <input required onChange={changeHandler} type="text" minLength="3" maxLength="20" className='w100' name='fQualification' placeholder='Enter Qualification' />
            </div>

            <div className="row w100">
                <div className="col w50 col1">
                    <p>Phone</p>
                    <input required onChange={changeHandler} type="" minLength="10" maxLength="10" name="fmob" placeholder='## #### ####' />
                </div>
                <div className="col w50 col2">
                    <p>Email</p>
                    <input required onChange={changeHandler} name="femail" type="email"  />
                </div>
            </div>

            <p>Father Occupation</p>
            <div className="row w100"> <input required minLength="3" maxLength="20" onChange={changeHandler} type="text" name="fOccupation" placeholder='Occupation' className='w100' /></div>
          
            
            <p>Mothers Name</p>
            <div className="row w100">
                <div className="col w50 col1">
                <input required onChange={changeHandler} type="text" minLength="3" maxLength="20" name="mfname" placeholder='First name'/>
                </div>
                <div className="col w50 col2">
                <input required onChange={changeHandler} type="text" minLength="3" maxLength="20" name="mlname" placeholder='Last name'/>
                </div>
            </div>

                   
            <p>Mother's Qualification</p>
            <div className="row w100">
            <input required onChange={changeHandler} type="text" minLength="3" maxLength="20" placeholder='Mothers Qualification' name="mQualification" className='w100' />
            </div>

            <div className="row w100">
                <div className="col w50 col1">
                    <p>Phone</p>
                    <input required onChange={changeHandler} type="text" minLength="10" maxLength="10" name="mmob" placeholder='## #### ####' />
                </div>
                <div className="col w50 col2">
                    <p>Email</p>
                    <input required onChange={changeHandler} type="email" name="memail" placeholder='Enter Email Address' />
                </div>
                
            </div>

            <p>Mothers Occupation</p>
            <div className="row w100"><input required onChange={changeHandler} type="text" minLength="3" maxLength="20" name="mOccupation" placeholder='Enter Qualification' className='w100' /></div>

            <p>Address</p>
            <div className="row w100"><input required onChange={changeHandler} type="text" name="address" minLength="10" maxLength="30" className='w100' placeholder='Enter Address'/></div>
            
            <div className="row w100 f-end">
                <button className="btn btn-info " type="submit">Submit</button>
            </div>
        </div>
            </form>
        </div>
    </div>
    
    
    </> );
}

export default App;<>
<div>
    <h1>Student Registration Form</h1>
    <div className="col">
        .ro
    </div>
</div>


</>