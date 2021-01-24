import { React } from "react";
import { Image, ListItem } from "semantic-ui-react";

export default function EventListAttendee(props) {
    return (
        <ListItem>
            <Image size='mini' circular src={props.attendee.photoURL} />
        </ListItem>
    )
}