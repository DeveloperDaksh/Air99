import { Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button,Box } from '@material-ui/core'
import React from 'react'
import india from "../../assets/images/travel/india.jpg";
import london from "../../assets/images/travel/london.jpg";
import paris from "../../assets/images/travel/paris.jpg";
import singapore from "../../assets/images/travel/singapore.jpg";

const Recommended = () => {
    
    return (
        <section style={{
            backgroundColor:"#f9f9f9",
            padding:"50px"
        }}>
            <Box display="flex" justifyContent="center" className="mb-4">
                <Typography variant="h2"> 
                Recommended Deals
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-around">
            <Card style={
                {
                    width:"23%",
                    // maxHeight:"500px",
                    padding:"0",
                
                }
            }>
        
        
        <CardContent style={{
            padding:"0"
        }}>
           <img src={india} style ={{
               width:"100%",
               height:"200px",
               backgroundRepeat:"no-repeat",
               backgroundSize:"cover",
               backgroundPosition:"center"
           }} alt="destinations" />
           <Box display="flex" justifyContent="space-between" padding="7px">
          <Typography gutterBottom variant="h5" component="h4">
            Air India
          </Typography>
            <Typography>
                <span color="green">&#36; 15</span>
            </Typography>
           </Box>
           <hr />
          <Box display="flex" justifyContent="space-between" padding="7px">
            <Typography align="left">
                <strong>India</strong>
                <br/>
                From America
            </Typography>
            <Typography align="right">
                <strong>Roundtrip</strong>
                <br/>
                    &nbsp;Aug 30 to Sep 06
            </Typography>
          </Box>
        </CardContent>
            </Card>
            <Card style={
                {
                    width:"23%",
                    padding:"0",
                }
            }>
        
        
        <CardContent style={{
            padding:"0"
        }}>
           <img src={london} style ={{
               width:"100%",
               height:"200px",
               backgroundRepeat:"no-repeat",
               backgroundSize:"cover",
               backgroundPosition:"center"
           }} alt="destinations" />
           <Box display="flex" justifyContent="space-between" padding="7px">
          <Typography gutterBottom variant="h5" component="h4">
            Air India
          </Typography>
            <Typography>
                <span color="green">&#36; 15</span>
            </Typography>
           </Box>
           <hr />
          <Box display="flex" justifyContent="space-between" padding="7px">
            <Typography align="left">
                <strong>India</strong>
                <br/>
                From America
            </Typography>
            <Typography align="right">
                <strong>Roundtrip</strong>
                <br/>
                    &nbsp;Aug 30 to Sep 06
            </Typography>
          </Box>
        </CardContent>
            </Card>
            <Card style={
                {
                    width:"23%",
                    padding:"0",
                }
            }>
        
        
        <CardContent style={{
            padding:"0"
        }}>
           <img src={paris} style ={{
               width:"100%",
               height:"200px",
               backgroundRepeat:"no-repeat",
               backgroundSize:"cover",
               backgroundPosition:"center"
           }} alt="destinations" />
           <Box display="flex" justifyContent="space-between" padding="7px">
          <Typography gutterBottom variant="h5" component="h4">
            Air India
          </Typography>
            <Typography>
                <span color="green">&#36; 15</span>
            </Typography>
           </Box>
           <hr />
          <Box display="flex" justifyContent="space-between" padding="7px">
            <Typography align="left">
                <strong>India</strong>
                <br/>
                From America
            </Typography>
            <Typography align="right">
                <strong>Roundtrip</strong>
                <br/>
                    &nbsp;Aug 30 to Sep 06
            </Typography>
          </Box>
        </CardContent>
            </Card>
            <Card style={
                {
                    width:"23%",
                    padding:"0",
                }
            }>
        
        
        <CardContent style={{
            padding:"0"
        }}>
           <img src={singapore} style ={{
               width:"100%",
               height:"200px",
               backgroundRepeat:"no-repeat",
               backgroundSize:"cover",
               backgroundPosition:"center"
           }} alt="destinations" />
           <Box display="flex" justifyContent="space-between" padding="7px">
          <Typography gutterBottom variant="h5" component="h4">
            Air India
          </Typography>
            <Typography>
                <span color="green">&#36; 15</span>
            </Typography>
           </Box>
           <hr />
          <Box display="flex" justifyContent="space-between" padding="7px">
            <Typography align="left">
                <strong>India</strong>
                <br/>
                From America
            </Typography>
            <Typography align="right">
                <strong>Roundtrip</strong>
                <br/>
                    &nbsp;Aug 30 to Sep 06
            </Typography>
          </Box>
        </CardContent>
            </Card>
            </Box>
        </section>
    )
}

export default Recommended

// import { Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button,Box } from '@material-ui/core'
// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import india from "../../assets/images/travel/india.jpg";
// import london from "../../assets/images/travel/london.jpg";
// import paris from "../../assets/images/travel/paris.jpg";
// import singapore from "../../assets/images/travel/singapore.jpg";
// import Amadeus from "amadeus";
// import airport from 'airport-codes'
// const Recommended = () => {
//     const [loading , setLoading] = useState(false)
//     const [recommended ,setRecommended] = useState([])
//     useEffect(()=>{
//         setLoading(true)
//         const recommended =()=>{
            
//                 var amadeus =  new Amadeus({
//                   clientId: `${process.env.REACT_APP_CLIENT_ID}`,
//                   clientSecret: `${process.env.REACT_APP_SECRET}`,
//                 });
                
//                 amadeus.travel.analytics.airTraffic.traveled.get({
//                     originCityCode : "DEL",
//                     period: "2017-01"
//                 }).then(response =>{
//                         var res = response.data
//                         if(res.length > 4) res = res.slice(0,4)
//                         setRecommended(res)
//                         setLoading(false)
//                 }).catch(err =>{
//                     setLoading(false)
//                     console.log(err);
//                 })

                
//         }
//         recommended();
//     }
//     ,[])
//     const Suggestion = (props) =>{
//         return (<Card style={
//             {
//                 width:"23%",
//                 // maxHeight:"500px",
//                 padding:"0",
            
//             }
//         }>
    
//     <CardContent>
//         <Typography variant="h3">
//             {props.place}
//         </Typography>
//         <Typography variant="h6">
//             {airport.findWhere({iata : props.place}).get("name")}
//         </Typography>
//     </CardContent>
//         </Card>)
//     }
//     return (
//         <section style={{
//             backgroundColor:"#f9f9f9",
//             padding:"50px"
//         }}>
//             <Box display="flex" justifyContent="center" className="mb-4">
//                 <Typography variant="h2"> 
//                 Recommended Places
//                 </Typography>
//             </Box>
//             <Box display="flex" justifyContent="space-around">
//                 {loading && <h1>Loading</h1>}
//                 {!loading && <>
                
//                     {recommended.map(loc => <Suggestion place = {loc.destination}/>)}
                
//                 </>}
//             </Box>
//         </section>
//     )
// }

// export default Recommended
