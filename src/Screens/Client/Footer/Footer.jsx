import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
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
    
      ,
    </>
  );
}
