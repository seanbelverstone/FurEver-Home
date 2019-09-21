# FurEver Home
*## Project Two*

### Contributors
* Danniel Zelaya
* Scott Finlay
* Ryan Jihong Kim
* Sean Belverstone

### Description
Our application allows a user to search for animals in shelters around the US. Created using React js, a list of animal cards is displayed and plethora of information about each animal is available for easy reading. Some examples of the information provided is the name, gender and a short description. Upon clicking a `toggle` button, contact and further information is revealed.

The user is also able to log in and have the option to store favorites in a favorites bar. When storing the user's created password into our database, the data is salted and encrypted to prevent critical information from being stolen. 

Another component that we have implemented is a *filter* option. This allows the user to refine the list of cards to better fit their requirements when looking for a pet. Available filters include coat length, age and species.

We intially decided to create this website as it reflects our own personal views. We all feel very strongly about the fact that there are hundreds of thousands of animals stuck in shelters, and each one of them deserves a forever home. For many people, it can be quite challenging to find an easy way to search for their next best friend, which fuelled our inspiration for this website.

### Instructions
To begin, clone the repo to your computer. Open the terminal and run `npm install`. This installs the `package-lock.json` and `node_modules`. Make sure that inside `config.json`, the username, password and host are correct for your personal settings. You also need to create a database in MYSQL called `furever_home` in order for the tables to be correctly created. Once this has all been completed, run `npm start` which will fire up the server and run the react scripts.

### New Technologies Used
The main new technology we used was **passport.js**. This is a library that allows entered passwords to be encrypted when stored in the database. We also used a component based library called **reactstrap** which is a Bootstrap-like component list, optimised for React. This was preferable to use as it saved us time when creating components, and negated the need for jQuery, which generally isn't compatible with React.

### Challenges We Faced
The biggest challenge we faced was time. Creating a fully functioning website in a language we're relatively unfamiliar with was a big obstacle, one which we're happy to say we overcame. It was initally quite difficult to grasp the fundamentals of React, such as components and state, but after much studying and trial and error we were able to finish our website. We're all glad that we took the leap and used React because it's allowed us to learn more on our own before furthering our knowledge in this area.

### Stretch Goals
If we were to continue this project past its two-week deadline, we would like to add the following features: 
* **Favorite animal persistance** - Currently if the server is restarted, any saved favorites disappear. We tried to save this information to a MYSQL table and retrieve it through joining `favorites` and `users`, but we were unsucessful. We settled with storing it to local storage and accessing it that way.
* **Geolocation** - If the user could select animals in shelters nearest to them, this could greatly enhance the opportunity to adopt. Unfortunately, due to time constraints, we were unable to implement this feature.
* **Filter by location/shelter** - Similar to geolocation, this feature would enable the user to filter the results by location. For example, find all animals in *Austin*, or all animals in *Austin Pets Alive* shelters.
* **Pagination** - To help the user's ease of use, we wanted to include pagination to make scrolling through cards easier and more manageable. As per most of the stretch goals, time was a big issue which prevented us from completing this extra task.

### Final Notes
Overall, we thoroughly enjoyed making this application. Through hard work and perseverance, we were able to get a sleek-looking app which has useful functionality in a real-world environment.