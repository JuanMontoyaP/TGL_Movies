import React from 'react'

function LogOutGoogle() {
    function handleSignOut(e) {
       /* global google */
        console.log("is this info", google.accounts.id)
        google.accounts.id.disableAutoSelect();
        google.accounts.id.revoke(sessionStorage.getItem("email"), done => {
          localStorage.removeItem("token")
          window.location.reload(true)
        })
      }

  return (
    <>
            <button id="google_signout" onClick={(e) => handleSignOut(e)}>
        Google Log Out
      </button>
    </>
  )
}

export default LogOutGoogle