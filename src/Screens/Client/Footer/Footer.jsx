import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import WarningIcon from "@mui/icons-material/Warning";
import style from "../Header/Navbar.module.css";
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
            {/* <TelegramIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <YouTubeIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <InstagramIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <WhatsAppIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            /> */}
            <a
              href="https://www.facebook.com/profile.php?id=61550949456848&mibextid=ZbWKwL"
              target="blank"
            >
              <FacebookIcon
                style={{ height: "40px", marginRight: "1rem" }}
                className={style.burger}
              />
            </a>
          </div>
          <div className="main_booton_link_div">
            <a href="/dsd">About Us</a>&nbsp;┊ &nbsp;
            <a href="/sdhjhs">Contact Us</a>&nbsp;┊ &nbsp;
            <a href="/sdhs">Private Policy</a>&nbsp;┊ &nbsp;
            <a href="/sdds">T&C</a>
          </div>
          <p className="copy_text_right">
            Copyright ©Royal Sweeps All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
