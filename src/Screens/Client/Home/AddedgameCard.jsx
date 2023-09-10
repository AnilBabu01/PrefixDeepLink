import React from "react";
export default function AddedgameCard({ img, name, url, btn }) {
  return (
    <>
      <div className="main_added_game">
        <img src={img} alt="dbczdc" />
        {btn && (
          <>
            <div className="margind">
              <h2 className="name_app">{name}</h2>
            </div>
          </>
        )}

        {btn ? (
          <>
            <a href={url} target="blank">{btn}</a>
          </>
        ) : (
          <>
            <a href={url} target="blank">{name}</a>
          </>
        )}
      </div>
    </>
  );
}
