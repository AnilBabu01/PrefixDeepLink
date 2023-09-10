import React, { useEffect } from "react";
import AddedgameCard from "../Home/AddedgameCard";
import img1 from "../../../assets/img1.jpeg";
import img2 from "../../../assets/img2.jpeg";
import img3 from "../../../assets/img3.jpeg";
import img4 from "../../../assets/img4.jpeg";
import img5 from "../../../assets/img5.jpeg";
import img6 from "../../../assets/img6.jpeg";
import img7 from "../../../assets/img7.jpeg";
import img8 from "../../../assets/img8.jpeg";

export default function LikePlay({ setshowadmin }) {
  useEffect(() => {
    setshowadmin(false);
  }, []);

  return (
    <>
      <div className="container">
        <div className="home_main">
          <h2 className="blacktext">OUR PLATFORMS</h2>
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
        </div>
      </div>
    </>
  );
}
