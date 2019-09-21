# FurEver Home
*## Project Two*

### Description
Our application allows a user to search for animals in shelters around the US. Created using React js, a list of animal cards is displayed and plethora of information about each animal is available for easy reading. Some examples of the information provided is the name, gender and a short description. Upon clicking a `toggle` button, contact and further information is revealed.

The user is also able to log in and have the option to store favorites in a favorites bar. When storing the user's created password into our database, the data is salted and encrypted to prevent critical information from being stolen. 

Another component that we have implemented is a *filter* option. This allows the user to refine the list of cards to better fit their requirements when looking for a pet.


We intially decided to create this website as it reflects our own personal views. We all feel very strongly about the fact that there are hundreds of thousands of animals stuck in shelters, and each one of them deserves a forever home. For many people, it can be quite challenging to find an easy way to search for their next best friend, which fuelled our inspiration for this website.

### Instructions
NPM install
Node_modules
package_lock
create database in mysql
npm start

### New Technologies Used
reactstrap library
passport.js

### Challenges We Faced
time constraints
react is a new library we're unfamiliar with - components, grasping the fundamentals of each piece
combining all our obtained knowledge

### Stretch Goals
favorite animal persistance - login (retrieve previous favorites)
geolocation
filter by location/shelter














# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
