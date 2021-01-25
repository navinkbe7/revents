import cuid from "cuid";
import { React, useState } from "react";
import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";

export default function EventForm({ setFormOpen, setEvents, handleCreateEvent, selectedEvent, handleUpdateEvent}) {
  // TODO: Read about null conditional operator  
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
      ? handleUpdateEvent({...selectedEvent, ...values})
      : handleCreateEvent({
          ...values,
          id: cuid(),
          hostedBy: "Navin",
          attendees: [],
          hostPhotoURL: "/assets/user.png",
        });
    setFormOpen(false)
  }

  function handleInputChange(e) {
    // TODO: Read about destructuring object  
    const { name, value } = e.target;
    // TODO: Read about spread operator
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit Event" : "Create New Event"} />
      <Form onSubmit={handleFormSubmit}>
        <FormField>
          <input
            type="text"
            placeholder="Event Title"
            value={values.title}
            name="title"
            // TODO: Read about onChange event in a form
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="Category"
            value={values.category}
            name="category"
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="City"
            value={values.city}
            name="city"
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="Venue"
            value={values.venue}
            name="venue"
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="date"
            placeholder="Date"
            value={values.date}
            name="date"
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          onClick={() => setFormOpen(false)}
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
