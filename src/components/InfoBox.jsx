import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1686858230799-461af6b3eb73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     
    let COld_URL ="https://images.unsplash.com/photo-1641835242851-9e11babf1d3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fENvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL ="https://images.unsplash.com/photo-1655131907892-cdc9c6930a55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    return(
 <div className="infobox">
          
   <div className="cardcontainter">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COld_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity >80 ? <ThunderstormIcon/> : info.temp > 15 ?<SunnyIcon/> : <AcUnitIcon/>   }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}  component="span">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity ={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like <b>{info.feelsLike}</b></p>
        </Typography>
      </CardContent>
      </Card>
    </div>

 </div>
    );
}