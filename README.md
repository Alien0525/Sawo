# Integrating a Passwordless Authentication System into your React App

## What is a Passwordless Authentication System?
Passwordless Authentication is an authentication method that allows users to log in without the hassle of remembering passwords. Users are asked to provide their public identifier such as mobile number, email ID, or any other registration ID and then complete the authentication process by providing a secure proof of identity in the form of an authentication factor. An authentication factor can refer to OTP tokens or biometric identifiers. Users receive a one-time code or link, which they can then use to log in. It is certainly proving to be the future of authentication.

## Why should you use a Passwordless Authentication System?
It accounts for improved user experience as users are asked to enter only their public identifier such as an email address or a mobile number.
It ensures enhanced security by mitigating the issue of passwords posing to be the biggest attack vector thereby forming a significant percentage of breaches.
It guarantees reduced total cost of ownership by eliminating expensive and laborious processes such as implementing password complexity policies, password expiration, password reset processes, password hashing and storing and breached password detection.

## How can you integrate a passwordless authentication system into your application?
Recently, I integrated a passwordless login system using Secure Authentication Without OTP(SAWO)’s web SDK into my website.

Sawo provides a clear and concise documentation for integrating their auth system into your website. The documentation is filtered based on the framework you are using (React, Vue, Angular, Laravel, Django, Flask, React Native, Flutter) and the application type(Native/Mobile Application, Single Page Application, Web Application, Backend/API).

## Steps to Integrate SAWO’s passwordless auth system into your React App
![Screenshot (244)](https://user-images.githubusercontent.com/60143745/121352667-b7012300-c94a-11eb-87d1-ed2ca29ca362.png)

- **Install the sawo package using Node Package Manager**

    `npm install sawo`
- **Login to sawo dev console and create a new project. Set project name and project host and copy the api key.**
    
- **In Login.jsx, create a container for Sawo’s component**
    ```
    <div id="sawo-container" style = {{height: "300 px"}, { width: "300 px"}, {padding: "40px"}}></div>
    ```

- **In Login.jsx, import React’s useEffect and useState hooks and add the configuration for Sawo’s component. Create a functional component Login and add a useState hook for setting the user’s payload and another useState hook for setting the user as logged in on successful login.**

    ```
    import { useEffect, useState } from "react";
    import Sawo from "sawo";
    import React from "react";

    function Login() {
    const [userPayload, setuserPayload] = useState({});
    const [isLoggedIn, setIsLoggesdIn] = useState(false);
    return;
    }
    ```

- **Within the useEffect hook, create the onSuccessLogin method which sets the user’s payload, sets user as logged in, accesses the user id off of the payload object and sets it in session storage. This user id can then be used to create user objects and store in the database.**

- **Create an object sawoConfig that includes the container ID(sawo-container), identifier type(phone number or email), api key and an on success function(onSuccessLogin). Store the api key in secrets.json file and add it to gitignore**

- **Include the sawoConfig object, create an instance of the Sawo class by passing the sawoConfig object as a parameter and invoke the showForm() off of the instance within the useEffect hook.**

- **Return the sawo-container create if the user is logged in which will contain the login form and export this component to use it in your App.**

    ```
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
    ```
- **On Successful integration, this is how the passwordless auth would be implemented and you can redirect to the home page on successful login.**

- **You can also design the login form as per your website’s needs. Check out the documentation for more — Sawo Docs.**







