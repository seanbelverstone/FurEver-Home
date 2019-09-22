const axios = require("axios");
// Tried to save the apiKey into the .env instead but couldn't get it work properly
require('dotenv').config(); 

module.exports = (app) => {
	app.get("/api/pets", function(req, res) {
		// 'api/pets' is the route that I created and a Client will make a request to.
		// Need two variables below to request Access Token
		const apiUser = "4pcDx02VBYwJBPWpTFmC4H9iPE9k39YSjUEVffDY";
		const apiKey = "1m3lD0sxsdS4Q42UeqiymYgP1iUxafZ82l3iX63sasQdLBFST2";

		// Before, the API URL was for POST method, since it had grant, but we needed to use GET method to retrieve data, since it had 'grant type' in the middle. So it was giving out so many errors.
		// So I ended up requesting for an Access Token by using Postman with "oauth1". But the specific Token expires in 3600 seconds.
		// And tried with "oauth2", and I did not need to have codes for Access Token anymore, because it refreshes all the time.

		// POST method and "oauth2" will make it possible to refresh Access Token. 
		const oauthURL = "https://api.petfinder.com/v2/oauth2/token";
		const postOptions = {
			method: "POST",
			url: oauthURL,
			data: {
				"grant_type": "client_credentials",
				"client_id": apiKey,
				"client_secret": apiUser
				// Abobe three, "grant_type", "url", "client_secret", are very necessary to get Access Token.
			}
		};

		// After getting Access Token by POST, now it is time to GET data from our resource.
		// Instead of having codes in .then function, used a Callback function to make it more neat.
		// The name of callback function is handleGetRequest. 
		axios(postOptions).then(response => response.data)
			.then((data) => {
				handleGetRequest(data["access_token"]);
			});

		// GET option responds with the Data by Access Token.
		function handleGetRequest(accessToken) {
			const API_URL = "https://api.petfinder.com/v2/animals?limit=100";

			const getOptions = {
				method: "GET",
				url: API_URL,
				headers: {
					"limit": "100",
					"Authorization": `Bearer ${accessToken}`
					// This is how I have to use the access token by "Bearer" to get the data.
				}
			};


			axios(getOptions).then(response => response.data)
				.then((data) => {
					res.json(data);
				});
		}

	});

};