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
    
- 



