import React from "react";
import AddedgameCard from "../Home/AddedgameCard";
import sms from "../../../assets/sms.jpg";
import cash from "../../../assets/cash.jpg";
export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="home_main">
          <h2 className="blacktext">CONTACT US</h2>
          <div className="main_updatecard_div">
            <AddedgameCard
              img={sms}
              name={"MESSENGER"}
              url={"https://www.facebook.com/profile.php?id=61550786386541&mibextid=b06tZ0"}
            />
            {/* <AddedgameCard
              img={cash}
              name={"CASH.APP"}
              url={"https://cash.app/$Childofgod412"}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
