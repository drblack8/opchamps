
# OPChamps
*By Daniel Black - [Check out OPChamps](https://opchamps.herokuapp.com/home)*
- League of Legends Lore
- Enables user discussion

**Table of Contents**

* [OPChamps at a Glance](#WhatsInTheSauce-at-a-glance)
* [Application Architecture & Technologies Used](#application-architecture)
* [Backend Overview](#backend-overview)
* [Frontend Overview](#frontend-overview)
* [Security & Authorization](#security-&-authorization)
* [Conclusion & Future Features](#conclusion-&-future-features)

## OPChamps at a Glance
OPChamps is a full-stack web app that allows users to explore and discus the world and characters from the worlds most popular video game: League of Legends. An easy-to-use comment section for users to interact combined with a comrehensive info-rich database allow for an informative user expirience.

OPChamps uses the [Riot API](https://developer.riotgames.com/) Data Dragon for retrieval of Static data, such as images and stories. 

#### Application Architecture
OPChamps is a full stack application utilizing [Express.js](https://expressjs.com/), [Sequelize ORM](https://sequelize.org/) and [Postgress](https://www.postgresql.org/) for the backend/database.

## Backend Overview
The application [Express.js](https://expressjs.com/) server connects the database to the frontend(React). Redux and React Hooks manage the data it receives from the server. 


## Frontend Overview

[React](https://reactjs.org/) engine hosts the entire frontend. The backed is accessed through Fetches using the useEffect Hook.  From there, the
[hooks](https://reactjs.org/docs/hooks-intro.html) temporarily store the data on a page. CSS then displays the data.

The main content on the site cannot be changed to fit a mobile screen in an effective way, and thus the site needs to be kept at at least a certain size.


## Conclusion & Future Features

OPChamps not only enhanced my abilities as a software engineer but also allowed me to combine two passions. The application was a joy to create and serves as a reference to my first expirience with React. 


Thanks for checking out [OPChamps](https://OPChamps.herokuapp.com/home)!

# User Stories

&check; As a user I'd like to be able to comment and dscuss champion lore.

&check; As a user I'd like a lot of info on specific champions as I already am familiar with the game.

&check; As a user I'd like to see more about the regions of the game.

# MinVP
&check; Comments

&check; Sort Functionality 

&check; Redux Auth
