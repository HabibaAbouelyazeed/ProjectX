const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {login} = require('./controllers/login'); 
const {auth} = require('./middlewares/auth')
const {getUser} = require('./controllers/getUser')
const {getMeeting} = require('./controllers/getMeeting')
const {deleteUser} = require('./controllers/deleteUser')
const {cancelMeeting} = require('./controllers/cancelMeeting')
const {joinMeeting} = require('./controllers/joinMeeting')


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/login', login)
app.get('/users/:userId', getUser)
app.get('/meetings/:meetingId', getMeeting)
app.delete('/users/:userId', auth, deleteUser)
app.put('/meetings/cancel/:meetingId', auth, cancelMeeting)
app.put('/meetings/:meetingId', auth, joinMeeting)

app.listen(8000, ()=>{
    console.log('Server running on port 8000')
})