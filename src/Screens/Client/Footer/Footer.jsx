import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import WarningIcon from "@mui/icons-material/Warning";
import style from "../Header/Navbar.module.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="container" style={{ marginTop: "0px" }}>
        <div className="footer_main">
          {/* <marquee
            style={{
              border: "solid",
              color: "white",
              margin: "0.2rem",
              fontSize: "16px",
              borderWidth: "1px",
            }}
          >
           
            Hurry up, gamers! Don't miss out on our sizzling hot tables. We're
            dedicated to offering 100% legit and customer-friendly services,
            available 24/7. Delight in our top-notch gaming experience and
            superb service - give us a try, you won't be disappointed! Instant
            deposits & withdrawals We accept CASHAPP & PAYPAL For more info,
            slide into our DMs!
          </marquee> */}

          <div className="main_Tele_div">
        
            <a
              href="https://www.facebook.com/people/Royal-weeps/61550786386541/"
              target="blank"
            >
              <FacebookIcon
                style={{ height: "40px", marginRight: "1rem" }}
                className={style.burger}
              />
            </a>
          </div>
       
        </div>
      </div>
      {/* <MessengerCustomerChat
        pageId="128994583627111"
        appId="biz_inbox"
        // htmlRef="<REF_STRING>"
      /> */}
      ,
    </>
  );
}
