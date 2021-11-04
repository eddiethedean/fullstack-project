# Sea World Project

## Description

This website was designed to create a Full Stack project as a group. We chose to create a Seaworld itinerary
project where users could select rides and add them to their itinerary. We pulled styling insperation from the
Seaworld website. We also used the website ride names and images to use in our database.


<img src="/images/database.jpg" alt="" width="400">


## Key Featrues
-Login Page: This page has two forms one for login and one to create a new user. The create user page
    fetches a route from our backend that allows the user input to be sent to our database. 

 <img src="/images/login.png" alt="" width="400">


-Rides Page: This page uses a route to select the ride names and images from our database. In the frontend
    we then fetch this route and use DOM manipulation to display the information on our page. Here users
    can add rides to the itinerary page. The rides will be added via an update route.

<img src="/images/rides.png" alt="" width="400">

<img src="/images/DOM.png" alt="" width="400">

-Itinerary Page: This page also uses DOM manipulation to display information from our database. Here the users
    will see the rides they have added to their itinerary and be able to delete them. In order to make the
    delete function work we needed a delete route on our backend. 

<p>
<img src="/images/itinerary.png" alt=""width="400">
</p>
<p>
<img src="/images/route.png" alt=""width="400">
</p>

## Technology Used
- HTML, ElephantSQL, Beekeeper, Javascript, and CSS: Bootstrap, Flex, and Grid
To get this up and running, you must install the following:
    nodemon
    npm init
    npm i express dotenv pg-pool pg
    npm i cors

-Canva.com color scheme named Towering Over can be seen in this project
-Seaworld.com was a guide to complete this clone that included ride names and pictures.
-ElephantSQL to deploy the database.
-Medium.com for the description of the website.
-Github.com to merge the group code, then apply it to the main branch.
-w3schools.com to adjust the code differences between sequelize and postgres when adapting to ElephantSQL.

## What Was Learned

How to create a database from scratch
How to use ElephantSQL
How to pull data from the Backend to the Frontend
How to create CRUD with multiple tables of a database
How to go from a great layout to an excellent layout in CSS


Medium Article: https://medium.com/@usmc.pnlong/sea-world-itinerary-d24e7cdb50c4
