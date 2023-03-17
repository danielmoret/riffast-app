const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      imageUrls: {},
      tokenUserTalonario: null,
      tokenUserTicket: null,
      message: null,
      userTicketId: null,
      infoTicket: [],
      talonarioSelect: [],
      talonarios: [],
      ticketsReservados: [],
      tickets: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction

      addImageUrl: (url, thumbnail) => {
        const store = getStore();
        setStore({ imageUrls: { url: url, thumbnail: thumbnail } });
      },

      syncToken: () => {
        const actions = getActions();
        const tokenUserTalonario = sessionStorage.getItem("tokenUserTalonario");
        const tokenUserTicket = sessionStorage.getItem("tokenUserTicket");
        console.log(
          "Aplication just loaded, synching the session storage token"
        );
        if (
          tokenUserTalonario &&
          tokenUserTalonario != "" &&
          tokenUserTalonario != undefined
        ) {
          setStore({ tokenUserTalonario: tokenUserTalonario });
        } else {
          actions.logout_talonario();
        }

        if (
          tokenUserTicket &&
          tokenUserTicket != "" &&
          tokenUserTicket != undefined
        ) {
          setStore({ tokenUserTicket: tokenUserTicket });
        }
      },

      signup_talonario: async (fullName, email, phone, password) => {
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: fullName,
            email: email,
            phone: phone,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            `${process.env.BACKEND_URL}/user-talonario`,
            opts
          );

          if (!resp.ok) {
            let danger = await resp.json();
            alert(danger);
            return false;
          }

          const data = await resp.json();

          return true;
        } catch (error) {
          console.error("There has been an error signup");
        }
      },

      login_talonario: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            phone: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            `${process.env.BACKEND_URL}/login-talonario`,
            opts
          );

          if (!resp.ok) {
            alert("There are been some error");
            return false;
          }

          const data = await resp.json();

          sessionStorage.setItem("tokenUserTalonario", data.access_token);
          setStore({ tokenUserTalonario: data.access_token });
          return true;
        } catch (error) {
          console.error("There was been an error login in");
        }
      },

      logout_talonario: () => {
        const store = getStore();
        sessionStorage.removeItem("tokenUserTalonario");
        console.log("Login out");
        setStore({ tokenUserTalonario: null });
        setStore({ talonarios: [] });
        setStore({ talonarioSelect: [] });
        setStore({ ticketsReservados: [] });
        setStore({ tickets: [] });
      },

      crear_talonario: async (
        nombre,
        premio,
        precio,
        img,
        descripcion,
        fecha,
        plataforma,
        metodoPago
      ) => {
        const store = getStore();
        const actions = getActions();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${store.tokenUserTalonario}`,
          },
          body: JSON.stringify({
            nombre: nombre,
            premio: premio,
            precio: precio,
            imagen_premio: img,
            descripcion: descripcion,
            fecha_sorteo: fecha,
            plataforma_sorteo: plataforma,
            metodo_de_pago: metodoPago,
          }),
        };
        try {
          const resp = await fetch(
            `${process.env.BACKEND_URL}/talonario`,
            opts
          );
          if (!resp.ok) {
            alert("no se pudo realizar esta accion");
          }
          const data = await resp.json();
        } catch (error) {
          console.log(error);
        }
      },

      obtenerTalonario: async () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: `Bearer ${store.tokenUserTalonario}`,
          },
        };
        try {
          const resp = await fetch(
            `${process.env.BACKEND_URL}/talonario`,
            opts
          );
          if (!resp.ok) {
            alert("no se pudo realizar");
            return false;
          }
          let data = await resp.json();
          setStore({ talonarios: data });
        } catch (error) {
          console.log(error);
        }
      },

      selectTalonario: async (talonarioId) => {
        const store = getStore();
        const resp = await fetch(
          `${process.env.BACKEND_URL}/talonario/${talonarioId}`
        );
        try {
          if (!resp.ok) {
            alert("No se pudo encontrar un talonario especifico");
          }
          let data = await resp.json();
          setStore({ talonarioSelect: data });
        } catch (error) {}
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      login_ticket: async (correo) => {
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: correo,
            phone: correo,
          }),
        };

        try {
          const resp = await fetch(
            `${process.env.BACKEND_URL}/login-ticket`,
            opts
          );

          if (!resp.ok) {
            alert("There are been some error");
            return false;
          }

          const data = await resp.json();

          sessionStorage.setItem("tokenUserTicket", data.access_token);
          setStore({ tokenUserTicket: data.access_token });
          setStore({ userTicketId: data.user_ticket_id });
          return true;
        } catch (error) {
          console.error("There was been an error login in");
        }
      },

      buyTickets: async (fullName, phone, email) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            full_name: fullName,
            phone: phone,
            email: email,
          }),
        };

        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/user-ticket`,
            opts
          );
          if (!response.ok) {
            let msg = await response.json();
            alert(msg.msg);
            return false;
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      },

      crearTicket: async (numeroTicket, talonario_id) => {
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${store.tokenUserTicket}`,
          },
          body: JSON.stringify({
            numero: numeroTicket,
            talonario_id: talonario_id,
            status: "reservado",
          }),
        };
        try {
          const resp = await fetch(`${process.env.BACKEND_URL}/ticket`, opts);
          if (!resp.ok) {
            alert("no se pudo crear ticket");
          }
          const data = await resp.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      },

      getTickets: async (talonarioID) => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: `Bearer ${store.tokenUserTalonario}`,
          },
        };
        const resp = await fetch(
          `${process.env.BACKEND_URL}/tickets/${talonarioID}`,
          opts
        );
        try {
          if (!resp.ok) {
            alert("No se obtuvieros tickets");
          }
          let data = await resp.json();
          setStore({ ticketsReservados: data });
        } catch (error) {
          console.error(error);
        }
      },

      infoTicket: async (numero, talonarioID) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/info-ticket/${numero}/${talonarioID}`
        );
        try {
          if (!resp.ok) {
            alert("No se obtuvo info de ticket");
          }
          let data = await resp.json();
          setStore({ infoTicket: data });
        } catch (error) {
          console.error(error);
        }
      },

      deleteTicket: async (numeroTicket, talonarioId) => {
        const store = getStore();
        const actions = getActions();
        const opts = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const resp = await fetch(
          `${process.env.BACKEND_URL}/delete-ticket/${numeroTicket}/${talonarioId}`,
          opts
        );
        try {
          if (!resp.ok) {
            alert("No se elimino el ticket");
          }
          let data = await resp.json();
          actions.getTickets(store.talonarioSelect.id);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      },

      updateStatusToPaid: async (numeroTicket, talonarioId) => {
        const store = getStore();
        const actions = getActions();
        const resp = await fetch(
          `${process.env.BACKEND_URL}/paid-ticket/${numeroTicket}/${talonarioId}`
        );
        try {
          if (!resp.ok) {
            alert("No se actualizo el ticket");
          }
          let data = await resp.json();
          actions.getTickets(store.talonarioSelect.id);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      },

      numberFilter: (numeros) => {
        const store = getStore();
        let num = [];
        const numerosReservados = numeros.map((numero) => {
          if (numero.status == "reservado") {
            return numero.numero;
          }
        });

        const numerosPagados = numeros.map((numero) => {
          if (numero.status == "pagado") {
            return numero.numero;
          }
        });

        for (let i = 0; i < 100; i++) {
          if (numerosReservados.includes(i)) {
            num.push({
              value: i.toString().padStart(2, "0"),
              numero: i,
              status: "reservado",
            });
          } else if (numerosPagados.includes(i)) {
            num.push({
              value: i.toString().padStart(2, "0"),
              numero: i,
              status: "pagado",
            });
          } else {
            num.push({
              value: i.toString().padStart(2, "0"),
              numero: i,
              status: "disponible",
            });
          }
        }

        setStore({ tickets: num });
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
