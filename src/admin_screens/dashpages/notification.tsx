import { Typography } from "@mui/material";

export default function NotifictionFunc(){
    return(
        <div>
        <h1>Notification</h1>
        <ol className="text-start">
          <li> Message Notification: "You've received a new text message from [Contact Name]."</li>   
          <li> Email Notification: "You have a new email from [Sender's Name] in your inbox."</li>   
          <li>Social Media Notification: "You have 3 new notifications on [Social Media Platform]."</li>   
          <li> Calendar Event Reminder: "Reminder: You have a meeting at 2:00 PM today."</li>   
          <li> App Update Notification: "An update for [App Name] is available. Tap to update."</li>   
        </ol>
        </div>
    )
}