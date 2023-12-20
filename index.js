const express = require('express');
var bodyParser = require('body-parser');
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 3000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabseUrl = 'https://hhygxhzwsudaxptkhddr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoeWd4aHp3c3VkYXhwdGtoZGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5NTE2OTEsImV4cCI6MjAxODUyNzY5MX0.EL7ra4DBlCFr4t7SHJMXSRgiPf-sshA3ONcaJGp0Vx4'
const supabase = supabaseClient.createClient(supabseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('public/home.html', { root: __dirname })
})


app.post('/contact', async (req, res) => {
    console.log('Adding Customer Info')

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var description = req.body.description

    const { data, error } = await supabase
        .from('user_info')
        .insert([
            { 'user_first_name': firstName, 'user_last_name': lastName, 'user_email': email, 'description': description }
        ])
        .select();
    console.log(data)
    res.header('Content-type', 'aaplication/json')
    res.send(data)
})

app.listen(port, () => {
    console.log('APP IS ALIVEEEEEE')
})
