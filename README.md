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
     
![image](https://github.com/RuwanthiLakshika/handle-forgot-password-to-reset-password-using-one-time-link/assets/125971277/999067c6-3caa-4b26-aabb-5bd77e4d36f5)

![image](https://github.com/RuwanthiLakshika/handle-forgot-password-to-reset-password-using-one-time-link/assets/125971277/8148a1b3-17bb-4a66-a88a-a604b0167ef2)


