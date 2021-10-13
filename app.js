const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {login} = require('./controllers/login'); 
const {auth} = require('./middlewares/auth')
const {getUser} = require('./controllers/getUser')
const {getMeeting} = require('./controllers/getMeeting')
const {deleteUser} = require('./controllers/deleteUser')
const {deleteMeeting} = require('./controllers/deleteMeeting')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/login', login)
app.get('/users/:userId', getUser)
app.get('/meetings/:meetingId', getMeeting)
app.delete('/users/:userId', auth, deleteUser)
app.delete('/meetings/:meetingId', auth, deleteMeeting)

app.listen(8000, ()=>{
    console.log('Server running on port 8000')
})