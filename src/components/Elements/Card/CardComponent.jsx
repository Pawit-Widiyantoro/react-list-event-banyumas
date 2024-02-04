import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import IconFooter from "./IconComponent";

const EventCard = ({ event }) => {
    const cardStyles = {
        borderRadius: "30px",
        backgroundColor: "#D9D9D9",
      };
      
    const imageStyles = {
        width: "100%",
        height: "209px",
        objectFit: "cover",
        borderRadius: "30px",
      };

    const buttonStyles = {
        backgroundColor: "#284b63",
        fontSize: "12px",
        color: "#fff",
        border: "none",
        padding: "3px 15px",
        borderRadius: "15px",
        cursor: "pointer",
        margin: "10px",
        marginRight: "16px",
        textDecoration: "none",
      };
    
      const iconStyles = {
        width: '15px',
        height: '15px'
      }
    
  return (
    <Card elevation={5} sx={{ ...cardStyles, width: 243, height: 348 }}>
      <CardMedia
        component="img"
        alt="Event Poster"
        height="140"
        image={event.poster}
        sx={{ ...imageStyles }}
      />
      <CardContent style={{ flexGrow: 1 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconFooter icon="./assets/Vector.svg" text={event.lokasi} />
          <IconFooter icon="./assets/calendar-event-line.svg" text={event.tgl_event} />
          <IconFooter icon="./assets/timer-2-line.svg" text={event.jam} />
        </div>
      </CardContent>
      <div style={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <Button
          variant="contained"
          component={Link}
          to={`/detail_event.php?id=${event.id}`}
          sx={{ ...buttonStyles, '&:hover':{backgroundColor:'#284b63'} }}
        >
          Detail
        </Button>
      </div>
    </Card>
  );
};

export default EventCard;