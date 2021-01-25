import React, { Fragment, useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/NavBar";

function App() {
  const [ formOpen, setFormOpen ] = useState(false)
  const [ selectedEvent, setSelectedEvent ] = useState(null)

  function handleSelectEvent(event) {
    setSelectedEvent(event)
    setFormOpen(true)
  }

  function handleCreateFromOpen () {
    setSelectedEvent(null)
    setFormOpen(true)
  }
  return (
    <Fragment>
      <Navbar handleCreateFromOpen={handleCreateFromOpen} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          handleSelectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </Fragment>
  );
}

export default App;
