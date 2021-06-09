import { useEffect, useState } from "react";
import Sawo from "sawo";
import React from "react";
import { api } from './Secrets.json';

function Login() {
  const [userPayload, setuserPayload] = useState({});
  const [isLoggedIn, setIsLoggesdIn] = useState(false);

  useEffect(() => {
    const onSuccessLogin = async (payload) => {
      setuserPayload(payload);
      setIsLoggesdIn(true);
      sessionStorage.setItem("user_id", payload.user_id);
    };

    const sawoConfig = {
      containerID: "sawo-container",
      identifierType: "phone_number_sms",
      apiKey: api,
      onSuccess: onSuccessLogin
    };
    let sawo = new Sawo(sawoConfig);
    sawo.showForm();
  }, []);

  return (
    <React.Fragment>
      {!isLoggedIn && (
        <div id="sawo-container" style = {{height: "300 px"}, { width: "300 px"}, {padding: "40px"}}></div>
      )}
    </React.Fragment>
  );
}

export default Login;

// style = {{height: 300 'px}}
// style="height: 300 px; width: 300px