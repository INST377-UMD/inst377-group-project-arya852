# PIN Info Web Application

_**Project Description:**_
The PIN Info Web Application is a user-friendly web application designed to provide quick and efficient access to postal code information in India. The application aims to address the challenges associated with accurate address validation, especially in a diverse landscape like India. It leverages the Postal PIN Code API to fetch postal code details based on either the Postal PIN Code or Post Office Branch Name.

_Target Browsers:_
The PINInfo Web Application is designed to be accessible on a wide range of devices and browsers. The target browsers include:

- Desktop Computers
- Tablets
- Smartphones

<br>

# Developer Manual

**Audience:**
This Developer Manual is for future developers who wants to work furture on the project and add more information about the cities and village areas of India. Developers can use the installation process provided in this manual to set up the project in their own localhost devices.
To install the application on a dedicated device, please follow the below installation steps.

<br>

# Installation and Dependencies

To install the application, follow these steps:

1. Clone the git repository to your local device:

   `> git clone git@github.com:INST377-UMD/inst377-group-project-arya852.git`

**Note:** For the next step make sure you are in the right folder, i.e `inst377-group-project-arya852`.

2. Install the project dependencies

   `> npm install`

Once you're done installing the project and the dependencies, you will be able to run the project.

# Running the project

In the terminal, you can type the below code which will start the application.

`> npm start`

<br>

# API Endpoints

The PIN Info Web Application uses the following API endpoint:

1. **POST `'/contact'`**: Adds user information to the supabase database.

_Request Body:_

`{
id: 12,
created_at: '2023-12-19T21:49:03.784679+00:00',
user_first_name: 'Arya',
user_last_name: 'Thakur',
user_email: 'aryat@gmail.com',
description: 'How to connect on the emailing list?'
}`

Response: Returns the inserted data.

2. **GET Method**: Gets post office details based on the selected district within a specific state.

_API endpoint_: `https://api.postalpincode.in/postoffice/{district}`

_Example_: `https://api.postalpincode.in/postoffice/Cuttack`

<br>

# Future plans

For the future development plans for the project, we will add more districts in the application and make another API solely dedicated for States and their respected cities and districts.

<br><br>

# Group member: Arya Thakur

# UID : 117897838
