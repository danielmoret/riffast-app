import React from "react";
import { Link } from "react-router-dom";

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
    <>
      <div className="text-center mt-3 d-flex justify-content-center gap-2">
        <div className="text-center fs-4 fw-bold d-flex">Compartir</div>
        <button className="btn login" onClick={handleClick}>
          <i class="fa-solid fa-link"></i> Link
        </button>

        <a
          className="btn login"
          href={`https://twitter.com/intent/tweet?text=Te%20invito%20a%20participar%20en%20mi%20rifa%20en%20https://3000-4geeksacade-reactflaskh-oq5jaeh2ojf.ws-us77.gitpod.io/buy/${props.talonarioID}%20via%20@Riffast`}
          target="_blank"
        >
          <i className="fa-brands fa-twitter"></i> Twitter
        </a>

        <a
          className="btn login"
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//3000-4geeksacade-reactflaskh-oq5jaeh2ojf.ws-us77.gitpod.io/buy/${props.talonarioID}`}
        >
          <i className="fa-brands fa-facebook"></i> Facebook
        </a>
        <a
          className="btn login"
          target="_blank"
          href={`https://wa.me/?text=Te+invito+a+participar+en+mi+rifa+en+https%3a%2f%2f3000-4geeksacade-reactflaskh-oq5jaeh2ojf.ws-us77.gitpod.io%2fbuy%2f${props.talonarioID}`}
        >
          <i className="fa-brands fa-whatsapp fa-lg"></i> Whatsapp
        </a>
      </div>
    </>
  );
};
