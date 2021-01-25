import { React } from "react";
import EventListItem from "./EventListItem";

export default function EventList({events, handleSelectEvent, handleDeleteEvent}) {
    return (
      <div>
        {events.map((event) => (
          <EventListItem
            event={event}
            key={event.id}
            handleSelectEvent={handleSelectEvent}
            handleDeleteEvent={handleDeleteEvent}
          />
        ))}
      </div>
    );
}