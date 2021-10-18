const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {signup} = require('./controllers/signup');
const {login} = require('./controllers/login'); 
const {changePassword} = require('./controllers/changePassword');  
const {changeUsername} = require('./controllers/changeUsername');  
const {changeEmail} = require('./controllers/changeEmail');  
const {addChildren} = require('./controllers/addChildren');  
const {auth} = require('./middlewares/auth')
const {getUser} = require('./controllers/getUser')
const {getMeeting} = require('./controllers/getMeeting')
const {deleteUser} = require('./controllers/deleteUser')
const {cancelMeeting} = require('./controllers/cancelMeeting')
const {joinMeeting} = require('./controllers/joinMeeting')
const {requestMeeting} = require('./controllers/requestMeeting')
const {getAllMeetings} = require('./controllers/getAllMeetings')
const {createMeeting} = require('./controllers/createMeeting');
const {searchMeetings} = require('./controllers/searchMeetings');
const {searchUsers} = require('./controllers/searchUsers');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/signup', signup)
app.post('/login', login)
app.post('/changePassword',changePassword)
app.post('/changeUsername',changeUsername)
app.post('/changeEmail',changeEmail)
app.post('/addChildren',addChildren)
app.get('/users/:userId', getUser)
app.get('/meetings/:meetingId', getMeeting)
app.delete('/users/:userId', auth, deleteUser)
app.put('/meetings/cancel/:meetingId', auth, cancelMeeting)
app.put('/meetings/:meetingId', auth, joinMeeting)
app.post('/reqMeeting/:userId', auth, requestMeeting)
app.get('/home', auth, getAllMeetings)
app.post('/createMeeting',createMeeting)
app.post('/meetings/searchMeetings', searchMeetings)
app.post('/users/searchUsers', searchUsers)



app.listen(8000, ()=>{
    console.log('Server running on port 8000')
})