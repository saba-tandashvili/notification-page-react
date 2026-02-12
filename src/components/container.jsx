import { useState } from "react";

import Mark from "./images/mark.png";
import Angela from "./images/angela.png";
import Jacob from "./images/jacob.png";
import Rizky from "./images/rizky.png";
import Kimberly from "./images/kimberly.png";
import Nathan from "./images/nathan.png";
import Pic from "./images/pic.png";
import Anna from "./images/anna.png";

import "./container.css";

const notifications = [
  {
    id: 1,
    image: Mark,
    user: "Mark Webber",
    reason: "reacted to your recent post",
    info: "My first tournament today!",
    time: "1 min ago",
    colorz: "#F7FAFD",
    heightwidth: "8px",
    backcolor: "#F65552",
    radius: "50%",

  },
  {
    id: 2,
    image: Angela,
    user: "Angela Gray",
    reason: "followed you",
    time: "5 min ago",
    colorz: "#F7FAFD",
    heightwidth: "8px",
    backcolor: "#F65552",
    radius: "50%",

  },
  {
    id: 3,
    image: Jacob,
    user: "Jacob Thompson",
    reason: "has joined your group",
    info: "Chess Club!",
    time: "1 day ago",
    colorz: "#F7FAFD",
    heightwidth: "8px",
    backcolor: "#F65552",
    radius: "50%",

  },
  {
    id: 4,
    image: Rizky,
    user: "Rizky Hasanuddin",
    reason: "sent you a private message",
    message: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    time: "5 days ago",
  },
  {
    id: 5,
    image: Kimberly,
    user: "Kimberly Smith",
    reason: "commented on your picture",
    imagee: Pic,
    time: "1 week ago",
  },
  {
    id: 6,
    image: Nathan,
    user: "Nathan Peterson",
    reason: "reacted to your recent post",
    info: "5 end-game strategies to",
    info2: "increase your win rate",
    time: "2 weeks ago",
  },
  {
    id: 7,
    image: Anna,
    user: "Anna Kim",
    reason: "left the group",
    info: "Chess Club",
    time: "2 weeks ago",
  },
];

export function Container() {
    const [mark, setMark] = useState(false)
    const [text, setText] = useState("3");
    const [clickedNotifications, setClickedNotifications] = useState({})

    const handleNotificationClick = (id) => {
        setClickedNotifications({
            ...clickedNotifications,
            [id]: !clickedNotifications[id]
        })
    }

    console.log(mark)
  return (
    <div className="container">
      <div className="head">
        <h1>
          Notifications<span>{text}</span>
        </h1>
        <p className="read" onClick={() => {
            setMark(true),
            setText("0")
        }}>Mark all as read</p>
      </div>

      <div className="notifs" >
        {notifications.map((item) => (
          <div className={item.id === 4 ? "rizky notification" : "notification"} key={item.id} onClick={() => handleNotificationClick(item.id)} style={{backgroundColor: clickedNotifications[item.id] ? "" : (mark ? "" : item.colorz), cursor: "pointer"}}>
            <div className="post" >
              <img src={item.image} alt="" className={item.id === 4 ? "pfp4 pfp" : "pfp"} />
              <div className="actual">
                <div className="line1">
                  <h1 className="user">{item.user}</h1>
                  <p className="reason">{item.reason}</p>
                  <img src={item.imagee} alt="" className={item.id === 5 ? "image" : ""} />
                  <span className="info">{item.info}</span> <br />
                  <div style={{minHeight: item.heightwidth, minWidth: item.heightwidth, backgroundColor: item.backcolor, borderRadius: item.radius, margin: 0, display: mark || clickedNotifications[item.id] ? "none" : "",}}></div>
                </div>
                <div className="line2">
                  <span className="info">{item.info2}</span>
                  <p className="time">{item.time}</p>
                  <p className={item.id === 4 ? "message" : ""}>{item.message}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
