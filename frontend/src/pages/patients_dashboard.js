import React, { useRef, useState } from  "react";
import {Tabs, Tab, Row, Nav, Navbar,Card} from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png"
function Patient(props){
  const[records,setRecords] =useState([]);
    const doctorRef = useRef();

    const Details = ()=>{
        return(
          <div className="Details">
            <h2>
                  Your Details

                  </h2>

            <Card > 
                    <Card.Body>
                   <b> Name:</b>{props.patient._name}
                  <br/>
                   <b>Phone: </b>{props.patient._phone}
                  <br/>
                  <b>Gender:</b>{props.patient._gender}
                  <br/>
                <b> Date of Birth:</b>{props.patient._dob}
                <br/> 
               <b> Blood Group: </b>{props.patient._bloodgroup}
             </Card.Body>
            </Card>
            </div>

        )
    }
    const Upload =()=>{
        return(
            <div className="ReportUpload">
              <h2> Report Upload</h2>
              <Card className="card">

              <div className="upload">
                <label> Upload your report to IPFS</label>
    <form>
      <label> 
        </label>
        <input type= "file" 
       
        />
        <br/>
         <Button>Submit</Button>
         </form>
         </div>

         {/* Upload file to blockchain */}
         <form>
         <label> Upload your record to blockchain  </label><br/>
          Name:<input 
         type ="text"placeholder="Name of the doctor" /><br/>

         Reason: <input 
         type="text" placeholder="Reason to visit hospital"/>
          <br/>
         VisitedDate: <input type="date"/>
             <br/>
         Your address:<input 
         type ="text"
         placeholder="Your address"/>
         <br/>
         <Button>Submit</Button>
         </form>
         </Card>
         </div>
        )
    }

  const Report =()=>{
    if(records.length  === 0){
      return(
        <div> 
          <h2>
          Your Report
        </h2>
        <p> Your record will appear here.
         <p> loading........</p>
        </p>
        </div>
      )
    }
    
    return(
      <div className="Report">
        <h2>
          Your Report
        </h2>
        <ul> 
           {records.map((record,key)=>( 
             <div className ="template" key={key}>
                    <li>
                      <Card>
                        <p><b> Doctor Name:</b></p>
                        <p><b> Reason to visit hospital:</b></p>
                        <p><b> Visited date:</b></p>
                        <p> <b>Report:</b> <a href={`https://google.com`}>Click here to view your report</a>
                        You can access your report here</p>
                        </Card>
                    </li>
                    </div> ))} 

                </ul>

      </div>
    )
  }
  const Access=()=>{
return(
  <div>
    <h2>Grant/Revoke Access</h2>
    <Card>

            <form onSubmit ={(event)=>{
                event.preventDefault();
                const doctor = doctorRef.current.value;
                props.grantAccess(doctor);
            }}>
                <label>Provide Access: </label>
                <input type="text" placeholder=" Address to grant access"
                ref ={doctorRef}/> 
                <Button> Submit</Button>
                </form>

                <br/>
                <form onSubmit ={(event)=>{
                    event.preventDefault();
                    const doctor = doctorRef.current.value;
                    props.revokeAccess(doctor);
                }}>
                    <label> Revoke Access: </label>
                    <input type="text" placeholder=" Address to revoke access from"
                    ref={doctorRef}/>
                <Button> Submit</Button>
                </form>
                </Card>

  </div>
)
  }
    return(
        
        <div className="patient_main">

            <Navbar
            // bg="light" 
            color="purple"
            expand="lg" 
            >
              <img src={logo}
              width="250"
              height="60"
              className="d-inline-block align-top"
              />
            {/* patient */}
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text > <b>Welcome </b> </Navbar.Text>
              <Nav.Link href ="/" width="250"> <b>Logout</b></Nav.Link>
              </Navbar.Collapse>
              </Navbar>

            <div className ="tab-wrapper">
            <Tab.Container  defaultActiveKey="details">
                    <div className ="row">
                        <div className="col-sm-3">
                          <Nav  className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="details">Details</Nav.Link><hr/>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="profile">AccessRecord</Nav.Link> <hr/></Nav.Item>                           
                            <Nav.Item><Nav.Link eventKey="uploadRecord">UploadRecord</Nav.Link><hr/></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="access">Grant/Revoke Acccess</Nav.Link><hr/>f
                            </Nav.Item>

                            </Nav> 
                          </div>

                          <div className = "col-sm-9">
                          <h2> Welcome to Medossier</h2>

                            <Tab.Content>
                {/* <Tabs defaultActiveKey="details" id ="uncontrolled-tab-example"> */}
                <Tab.Pane eventKey="details" title ="Details" tabClassName="profile-tabitem">
                <Details/>
                </Tab.Pane>
                <Tab.Pane eventKey="profile" title ="AcessRecord" tabClassName="profile-tabitem">
                  <Report/>
                </Tab.Pane>

                <Tab.Pane eventKey ="uploadRecord"  title="UploadRecord" tabClassName="profile-tabitem">
              <Upload/>
             </Tab.Pane>
             <Tab.Pane eventKey="access" title="Grant/Revoke Acccess">
               <Access/>
             </Tab.Pane>
             {/* </Tabs> */}
             </Tab.Content>
            </div> 
 </div>
</Tab.Container>
  </div>
 
</div>
)}
export default Patient;