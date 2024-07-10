# handle-forgot-password-to-reset-password    
using-one-time-link

1. one time use password reset link    
2. valid for 15minutes ( or whatever)    
3. Can be used only once to reset    
4. Uses Json Web Tockens
   
A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of the token, which is then digitally signed using a cryptographic algorithm.

### Structure of a JWT   

A JWT typically consists of three parts:   

Header: Contains metadata about the token, such as the type of token (JWT) and the signing algorithm used.    

Payload: Contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.       

Signature: Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.     

## Purpose of JWT in the Project:      

### Generating a Secure Token:

When a user requests a password reset, a JWT is created with a payload containing the user's email and ID.   
This token is signed with a secret (combining a constant secret and the user's password), ensuring that it can't be easily tampered with.    
The token is then sent to the user in the form of a link, which they can use to reset their password.       

### Validating the Token:
When the user clicks the password reset link, they are redirected to a route that includes the token.     

The server checks if the token is valid by verifying it with the same secret used to sign it.      

If the token is valid, it means the request is authentic, and the user is allowed to reset their password.     

## Flow of JWT in Password Reset:

### Requesting Password Reset:
User submits their email on the forgot-password page.    

Server checks if the email exists.     

If the user exists, the server creates a JWT containing the user's email and ID, signed with a secret.     

A password reset link containing the token is generated and "sent" (logged to the console in this case).    

### Resetting the Password:
User clicks the reset link, which directs them to the reset-password page with the token.     

Server verifies the token using the secret.    

If the token is valid, the user is allowed to enter a new password.     

The new password is then saved (in this case, directly updating the user object).     

## Why Use JWT?       
Security: The token is signed, making it difficult to forge or tamper with.     

Stateless: The server doesn't need to keep track of active password reset tokens; it can verify the token's validity using the secret alone.       

Expiration: The token can have an expiration time (e.g., 15 minutes), limiting the window in which it can be used.      

     
![image](https://github.com/RuwanthiLakshika/handle-forgot-password-to-reset-password-using-one-time-link/assets/125971277/999067c6-3caa-4b26-aabb-5bd77e4d36f5)

![image](https://github.com/RuwanthiLakshika/handle-forgot-password-to-reset-password-using-one-time-link/assets/125971277/8148a1b3-17bb-4a66-a88a-a604b0167ef2)


