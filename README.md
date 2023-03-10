# hernalytics-Api

Consume REST APIs in React with Jest

Overview


This project is about consuming a REST API and displaying the data on a webpage. The API provides data about an election, including the top 3 candidates, their political party, and the total number of votes. The webpage should display the data in three sections: the top section, the map section, and the bottom section.

API
The API used in this project is available at the following link: https://documenter.getpostman.com/view/19283300/2s93Joym6a

The API has the following endpoint:

Public GET Candidate Total Votes in an Election: {{staging}}/elections/candidate-total-votes?type=president
This endpoint has a query parameter type that accepts the following values:
"president", "senate", "house", "map", and "state_result"

The president value is used to fetch the top 3 leading candidates votes, same as senate and house.
The map value is used to display the data in the map and the state_result is used to display the data in the state result section


Instructions


Clone the repository to your local machine
Run npm install to install all the required dependencies
Use the endpoint described above to fetch the data from the API and display it on your webpage
The top section should display the top 3 candidates, their political party, and the total number of votes.
The map section should highlight the breakdowns of the votes per state for only the leading party.
The bottom section should highlight the breakdown of the votes for the top 3 parties in each state.
Run the project using npm start

Requirements


Node.js version 9.3.1 or later
npm version 5.5.1 or later
React version 16.8.6 or later
