import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST,GET"],
        credentials: true
    }
))

//connect sql 
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: 'signup'

})


// logout route .........
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        return res.json({Message: "we need token please provide it." })
    } else {
        jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
            if (err) {
                return res.json({ Message: "Authentication Error..." })
            } else {
                req.name = decoded.name;
                next();
            }
        })
    }
}
app.get('/log', verifyUser, (req, res) => {
    return res.json({ Status: "Success..! ", name:req.name })

})





// login route api .............
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email =? AND password = ? ";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json({ Message: "server side Error" });
        if (data.length > 0) {
            const name = data[0].name;
            const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: "Success" })

        } else {
            return res.json({ Message: "No Records existed" })
        }
    })
})

// logout api
app.get('/logout', (req,res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"})
})

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost/${PORT}/`);
})