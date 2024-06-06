const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

let user={
    id:"fbdfkshfsojwlsf53516",
    email:"ruwanthi@gmail.com",
    password:"hofjgjfhpf'gkhmfhmnm;nm"
}

const JWT_SECRET = 'some super secret......'

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/forgot-password', (req, res) => {
   res.render('forgot-password');
});

app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    
    //make sure user exists in database
    if(email !== user.email){
        return res.status(404).send('User not found');
    }

    //user exists and now create a one time link valid for 15 minutes
    const secret = JWT_SECRET + user.password;
    const payload = {
        email: user.email,
        id: user.id
    }
    const token = jwt.sign(payload, secret, {expiresIn: '15m'});
    const link = `http://localhost:3000/reset-password/${user.id}/${token}`;
    console.log(link);
    return res.send('Password reset link has been sent to your email');

}); 

app.get('/reset-password/:id/:token', (req, res) => {
   const { id, token } = req.params;
   
   //check if the user exists in database
    if(id !== user.id){
         return res.status(404).send('User not found');
    }

    //we have the user, now check if the token is valid
    const secret = JWT_SECRET + user.password;
    try{
        const payload = jwt.verify(token, secret);
        //valid token, now allow user to change password
        res.render('reset-password', { email: user.email });
    } catch (error) {
        console.log(error.message);
        return res.status(400).send('Invalid token');
    }
});

app.post('/reset-password/:id/:token', (req, res) => {
    const { id, token } = req.params;
    const { password,confirmpassword } = req.body;

    //check if the user exists in database
    if(id !== user.id){
        return res.status(404).send('User not found');
    }

    //we have the user, now check if the token is valid
    const secret = JWT_SECRET + user.password;
    try{
        const payload = jwt.verify(token, secret);
        //validate password and confirm password match
        //we can simply find the user with the paylod email and id and finally update with new password
        //always hash the password before saving
        user.password = password;
        res.send(user);

    } catch (error) {
        console.log(error.message);
        return res.status(400).send('Invalid token');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port @http://localhost:3000');
});