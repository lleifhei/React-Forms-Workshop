export default function Authenticate({ token }) {
  token ? console.log("Authenticated!") : console.log("Not authenticated!");
  return (
    <>
      <h2>Authenticate!</h2>
      <button
        onClick={() => {
          //function to send GET request to authenticate endpoint
          fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
        }}
      >
        Authenticate
      </button>
    </>
  );
}
