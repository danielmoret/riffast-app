const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
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

      syncToken: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "Aplication just loaded, synching the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
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
            `https://3001-4geeksacade-reactflaskh-oq5jaeh2ojf.ws-us77.gitpod.io/api/user-talonario`,
            opts
          );

          if (!resp.ok) {
            let danger = await resp.json();
            alert(danger);
            return false;
          }

          const data = await resp.json();
          console.log("This came from the backend", data);
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
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            "https://3001-4geeksacade-reactflaskh-oq5jaeh2ojf.ws-us77.gitpod.io/api/login-talonario",
            opts
          );

          if (!resp.ok) {
            alert("There are been some error");
            return false;
          }

          const data = await resp.json();
          console.log("this came from the backen", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There was been an error login in");
        }
      },

      logout_talonario: () => {
        sessionStorage.removeItem("token");
        console.log("Login out");
        setStore({ token: null });
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      login_ticket: async (correo, telefono) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            correo: correo,
            telefono: telefono,
          }),
        };

        try {
          const resp = await fetch(
            "https://3001-4geeksacade-reactflaskh-oq5jaeh2ojf.ws-us77.gitpod.io/api/login-ticket",
            opts
          );

          if (!resp.ok) {
            alert("There are been some error");
            return false;
          }

          const data = await resp.json();
          console.log("this came from the backen", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There was been an error login in");
        }
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
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
