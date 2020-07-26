## Live Link

#### https://serene-taiga-66583.herokuapp.com/

## Available Scripts

In the project directory, you can run:

### `npm run dev-install`

Install the dependencies.

### `npm run dev-start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Mock Server

The project uses expressJS for the mock server.
The mock server has an endpoint that contains the users' data.
The endpoint extrapolates the JSON file as a JSON response.
endpoint : `/api/v1/users`
The mock server runs on port: 5000. Open [http://localhost:5000/api/v1/users](http://localhost:5000/api/v1/users) to view it in the browser

## Redux Thunk

The project uses redux-thunk for store management. It stores the user's data which is fetched from the mock server endpoint.

## Working

The project runs two servers locally. The frontend server runs on [http://localhost:3000](http://localhost:3000) and the mock server runs [http://localhost:5000](http://localhost:5000).

The frontend uses a proxy, that redirects all the endpoint request to port 5000 from port 3000. The proxy is used to avoid the CORS issue.

On the `production`, The expressJs server renders the static files of ReactJS.
As the project is hosted on heroku, it first builds the reactjs files then the express server renders those static files.
