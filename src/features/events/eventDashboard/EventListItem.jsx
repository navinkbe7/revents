import { React } from "react";
import { Button, Icon, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemImage, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem(props) {
    return (
      <SegmentGroup>
        <Segment>
          <ItemGroup>
            <Item>
              <ItemImage size="tiny" circular src={props.event.hostPhotoURL} />
              <ItemContent>
                <ItemHeader>{props.event.title}</ItemHeader>
                <ItemDescription>
                  Hosted By {props.event.hostedBy}
                </ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {props.event.date}
            <Icon name="marker" /> {props.event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {props.event.attendees.map((attendee) => (
              <EventListAttendee key={attendee.id} attendee={attendee} />
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <div>{props.event.description}</div>
          <Button
            onClick={() => props.handleSelectEvent(props.event)}
            color="teal"
            floated="right"
            content="View"
          ></Button>
          <Button
            onClick={() => props.handleDeleteEvent(props.event.id)}
            color="red"
            floated="right"
            content="Delete"
          ></Button>
        </Segment>
      </SegmentGroup>
    );
}