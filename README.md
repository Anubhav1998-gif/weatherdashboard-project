For building the weatherdashboard project, First i have to install the node  so that you can install the react in our system.
for installing react, first i have to create a project title Weather and then go to the project and open the visual studio code , open the terminal and types following command for installing the react in our system.
npx create-react-app my-weather-app
 after taking sometime , react app is installed in our system now go to the react folder by typing following command
 cd my-react-app
  then i have to install the axios and jason server to get the api call 
  following command to install axios and json server 
  npm install axios json-server
  Now, create a db.json file in the root of the project so it includes the favorites city and apply crud operation
  After creating db.json file, now run the json-server by following command
  npx json-server --watch db.json --port 5000
Now, after the json server start run the project by the following command
npm start
now we see the project successsfully.
I can get an API key for our project by using the openWeatherMap resouce, First I have to signup to the openWeathermap and now i get the free API key.
My key is af046ac3b932a6e4fc2742ea2dcd4c12

Thank you!