import React from "react";

export const BtnCompartir = (props) => {
  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Something",
          text: "Hello, please come visit my website",
          url: `/buy/${props.talonarioID}`,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong", error);
        });
    }
  };

  return (
    <div className="text-center mt-2">
      <button className="btn login" onClick={handleClick}>
        <i class="fa-solid fa-link"></i> Compartir
      </button>
    </div>
  );
};
