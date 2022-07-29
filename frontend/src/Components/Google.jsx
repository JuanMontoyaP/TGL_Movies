import React from "react";
import { useEffect } from "react";
import {useUserContext} from '../context/UserContext'

export default function Google() {
const {googleLogin} = useUserContext()

  // function handleCredentialResponse(response) {

  //   const body = { id_token: response.credential };

  //   fetch("http://localhost:8080/auth/google", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((resp) => resp.json())
  //     .then((resp) => {
  //       sessionStorage.setItem("email", resp.credential);
  //     })
  //     .catch(console.warn);
  // }

  // function handleSignOut(e) {
  //   console.log("is this info", google.accounts.id)
  //   google.accounts.id.disableAutoSelect();
  //   google.accounts.id.revoke(sessionStorage.getItem("email"), done => {
  //     sessionStorage.clear()
  //     window.location.reload(true)
  //   })
  // }

  useEffect(() => {
    /* global google */
    // google.accounts.id.initialize({
    //   client_id:
    //     "793428477086-d4vqekhbr8pl8itr8scl4l55405hck1h.apps.googleusercontent.com",
    //   callback: handleCredentialResponse,
    // });

    // google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
    //   theme: "outline",
    //   size: "large",
    // });
    googleLogin()
  }, []);

  return (
    <>
      <div id="buttonDiv"></div>
      {/* <button id="google_signout" onClick={(e) => handleSignOut(e)}>
        Sign Out
      </button> */}
    </>
  );
}
