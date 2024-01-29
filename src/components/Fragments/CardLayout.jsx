import React from "react";
import { Grid } from "@mui/material";
import EventCard from "../Elements/Card/CardComponent";

const eventsData = [
  {
    id: 1,
    poster: "./assets/poster/poster2.jpg",
    lokasi: "Event Location 1",
    tgl_event: "2024-01-30",
    jam: "10:00 AM",
  },
  {
    id: 2,
    poster: "./assets/poster/poster2.jpg",
    lokasi: "Event Location 2",
    tgl_event: "2024-02-15",
    jam: "02:30 PM",
  },
  {
    id: 3,
    poster: "./assets/poster/poster2.jpg",
    lokasi: "Event Location 3",
    tgl_event: "2024-03-05",
    jam: "07:00 PM",
  },
  {
    id: 4,
    poster: "./assets/poster/poster1.jpg",
    lokasi: "Event Location 4",
    tgl_event: "2024-03-20",
    jam: "12:00 PM",
  },
  {
    id: 5,
    poster: "./assets/poster/poster1.jpg",
    lokasi: "Event Location 4",
    tgl_event: "2024-03-20",
    jam: "12:00 PM",
  },
];

const CardList = () => {
    return (
      <Grid container spacing={0} rowSpacing={3} style={{ marginTop: "20px", marginBottom: "40px", paddingLeft: "20px", paddingRight: "20px" }}>
        {eventsData.map((event) => (
          <Grid key={event.id} item xs={12} sm={6} md={3} container justifyContent="center" alignItems="center">
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    );
  };

export default CardList;
