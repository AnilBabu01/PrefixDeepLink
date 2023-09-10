import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import AddedgameCard from "./AddedgameCard";
import img1 from "../../../assets/img1.jpeg";
import img2 from "../../../assets/img2.jpeg";
import img3 from "../../../assets/img3.jpeg";
import img4 from "../../../assets/img4.jpeg";
import img5 from "../../../assets/img5.jpeg";
import img6 from "../../../assets/img6.jpeg";
import img7 from "../../../assets/img7.jpeg";
import img8 from "../../../assets/img8.jpeg";
import "./Home.css";

export default function Home({ setshowadmin }) {
  useEffect(() => {
    setshowadmin(false);
  }, []);

  return (
    <>
      <div className="container">
        <div className="home_main">
          <marquee
            style={{
              // border: "dotted",
              color: "rgb(255, 123, 0)",
              margin: "0.2rem",
              fontSize: "16px",
              // borderColor: "red",
              // backgroundColor: "yellow",
              borderWidth: "1px",
            }}
          >
            Hurry up, gamers! Don't miss out on our sizzling hot tables. We're
            dedicated to offering 100% legit and customer-friendly services,
            available 24/7. Delight in our top-notch gaming experience and
            superb service - give us a try, you won't be disappointed! Instant
            deposits & withdrawals We accept CASHAPP & PAYPAL For more info,
            slide into our DMs!
          </marquee>
          <div className="mainBONUS">
            <div className="mainBONUSinnear">
              <h2>WELCOME BONUS</h2>
              <p>
                1. SignUP Bonus : 100% SignUp Bonus for new Player on their
                first deposit.
              </p>
              <p>
                2. Regular Bonus : 20% Bonus on every deposit for our Regular
                Player
              </p>
              <p>
                3. Refferal Bonus : 5$ for referring a new player who made a
                minimum deposit of 10$ upon request.
              </p>
              <p>
                4. Birthday Bonus : 40% on deposit only given once a year on
                date of birth.
              </p>
              <p>
                Note : Must present Driving Licence or Government Issued I.D.
                card to claim Birthday Bonus.
              </p>
              <div>
                <button className="contactbtnus">Contact Us</button>
              </div>
            </div>
          </div>

          {/* <div className="main_slidehgr">
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              showIndicators={true}
              stopOnHover={true}
              autoFocus={true}
              showStatus={false}
              showThumbs={false}
              showArrows={true}
              dots={true}
            >
              <div className="slie_img_div">
                <img src={img1} alt="nhbbb" />
              </div>
              <div className="slie_img_div">
                <img src={img2} alt="nhbbb" />
              </div>
              <div className="slie_img_div">
                <img src={img3} alt="nhbbb" />
              </div>
              <div className="slie_img_div">
                <img src={img4} alt="nhbbb" />
              </div>
            </Carousel>
          </div> */}

          <div className="main_updatecard_div">
            <AddedgameCard
              img={img1}
              name={"RIVER SWEEPS"}
              url={"https://river777.net"}
              btn={"PLAY GAME"}
            />
            <AddedgameCard
              img={img2}
              name={"PANDAMASTER"}
              url={"https://pandamaster.vip:8888/index.html"}
              btn={"PLAY GAME"}
            />
            <AddedgameCard
              img={img3}
              name={"JUWA"}
              url={"http://dl.juwa777.com"}
              btn={"PLAY GAME"}
            />
            <AddedgameCard
              img={img4}
              name={"MEDUSA"}
              url={"https://medusa777.com"}
              btn={"PLAY GAME"}
            />
            <AddedgameCard
              img={img5}
              name={"FIRE KIRIN"}
              url={"http://firekirin.xyz:8580/index.html"}
              btn={"PLAY GAME"}
            />
            <AddedgameCard
              img={img6}
              name={"GAME VAULT"}
              url={"http://download.gamevault999.com"}
              btn={"PLAY GAME"}
            />
            <AddedgameCard
              img={img7}
              name={"ORION STARS"}
              url={"http://orionstars.vip:8580/index.html"}
              btn={"PLAY GAME"}
            />
            <AddedgameCard
              img={img8}
              name={"MILKY WAY"}
              url={"http://milkywayapp.xyz:8580/index.html"}
                btn={"PLAY GAME"}
            />
          </div>

          <div className="mainBONUS">
            <div className="mainBONUSinnear1">
              <h2>OUR SERVICE</h2>
              <h3>Hurry up, gamers!</h3>
              <p>
                Hurry up, gamers! Don't miss out on our sizzling hot tables.
                We're dedicated to offering 100% legit and customer-friendly
                services, available 24/7. Delight in our top-notch gaming
                experience and superb service - give us a try, you won't be
                disappointed! Instant deposits & withdrawals We accept CASHAPP &
                PAYPAL For more info, slide into our DMs!
              </p>
              <h4>Thanks</h4>
              <h5>Wish you all the best luck !</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
