import React, { useState } from 'react'
import { Alert, Button , Row, Col, Container } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Main = () => {
    const [name, setName] = useState('')
    const [GuessCountry, setGuessCountry] = useState('')
    const [Probability, setProbability] = useState(0)
    const [Progress, setProgress] = useState(0)
    const handleChange  = (e)=>{
            const val = e.target.value;
            setName(val)
    }
const GetCountryName = (CountryCode)=>{
    console.log("Country COde:" , CountryCode)
            const fun = async ()=>{
                await fetch(`https://restcountries.com/v3.1/alpha/${CountryCode}`).then(res=>res.json()).then(data=>{
                    const Country_name = data[0]?.name?.official;
                    setGuessCountry(Country_name);
                    
                }).then(res=>setProgress(100));
            }
            fun()
}
const handleCountry_ID = ()=>{
    const fun = async ()=>{
        await fetch(`https://api.nationalize.io/?name=${name}`).then(res=>res.json()).then(
            data=>{const Pro = data?.country[0]?.probability ; setProbability(Pro)})
        
        await fetch(`https://api.nationalize.io/?name=${name}`).then(res=>res.json()).then(
            data=>data?.country[0]?.country_id
        ).then(data=>{setProgress(50); console.log("idHere ", data); console.log(); GetCountryName(data)})
    }
fun()
}
  return (
    <div style={{width:"60%", margin:"auto"}}>
       <Container style={{margin:"120px auto" , height:"300px" , padding:"20px 20px " , boxShadow:"0px 0px 20px 2px grey"}}>

        <Alert>Wellcome user this simple App is Created  For Guess Your Country Based on your name</Alert>
       <Row >
        <Col >

        <input onChange={(e)=>handleChange(e)} value={name} placeholder='enter your name'/>
        <Button variant='success'style={{marginLeft:"20px"}} onClick={handleCountry_ID}>Guess my Country</Button>
        </Col>
       </Row>
        <hr></hr><br/>
        <ProgressBar now={Progress} label={`${Progress}%`}/>
        <br/>
        {
            Progress==100 &&
            
             <Alert variant='info'>
                    Your Country By Guessing is : {GuessCountry}<br/>
                    Probability: {(Probability*100)} %
            </Alert>
        }
       </Container>
    </div>
  )
}

export default Main