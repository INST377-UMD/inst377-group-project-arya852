async function addContact() {
    console.log('Creating Customer')
    var host = `http://localhost:3000/contact`;
    console.log(host);

    var test = fetch(host, {
        method: 'POST',
        body: JSON.stringify({
            "firstName": `${document.getElementById('firstName').value}`,
            "lastName": `${document.getElementById('lastName').value}`,
            "email": `${document.getElementById('email').value}`,
            "description": `${document.getElementById('description').value}`,
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    alert("Form has been submited successfully! We will reach out to you soon.")
    await test;
}

