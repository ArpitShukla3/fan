# Fanztar

Fanztar is a Node.js application that calculates the cost of components for a custom device and generates an order ID.

## Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```
git clone https://github.com/ArpitShukla3/fan.git
```

2. Navigate to the project directory:

```
cd fanztar
```

3. Install the dependencies:

```
npm install
```

## Configuration

Create a `.env` file in the root directory of the project and add the following line:

```
PORT=3000
```

This will set the port on which the server will run.

## Running the Application

To start the application in development mode, run:

```
npm run dev
```

This will start the server and watch for changes in the code.

To start the application in production mode, run:

```
npm start
```

## API Endpoints

The application exposes a single endpoint:

- `POST /orders`

This endpoint expects a JSON payload with a `components` array. The array should contain strings representing the components to be included in the device. The valid component codes are:

- `A`: LED Screen
- `B`: OLED Screen
- `C`: AMOLED Screen
- `D`: Wide-Angle Camera
- `E`: Ultra-Wide-Angle Camera
- `F`: USB-C Port
- `G`: Micro-USB Port
- `H`: Lightning Port
- `I`: Android OS
- `J`: iOS OS
- `K`: Metallic Body
- `L`: Plastic Body

Example request:

```
POST /orders
Content-Type: application/json

{
  "components": ["I", "A", "D", "F", "K"]
}
```

The response will be a JSON object with the following structure:

```
{
  "success": true,
  "order_id": "some_id",
  "cost": 123.45,
  "parts": ["Android OS", "LED Screen", "Wide-Angle Camera", "USB-C Port", "Metallic Body"]
}
```

If the request is invalid or an error occurs, the response will have a `success` field set to `false` and a `message` field with an error description.

## Testing

The application includes a test suite written with Jest and Supertest. To run the tests, execute:

```
NODE_OPTIONS=--experimental-vm-modules npx jest
```

## Project Structure

- `app.js`: Entry point of the application, sets up the Express server and routes.
- `Routes/Router.js`: Defines the routes for the application.
- `controllers/shopping.js`: Handles the `/orders` endpoint logic.
- `logics/allComponentsIncluded.js`: Checks if the provided components are valid and include all required categories.
- `logics/calculateCost.js`: Calculates the cost of the provided components.
- `tests/app.test.js`: Contains the test suite for the `/orders` endpoint.

## Dependencies

The project relies on the following dependencies:

- `cors`: Provides a middleware for enabling CORS in the Express application.
- `dotenv`: Loads environment variables from a `.env` file.
- `express`: Web application framework for Node.js.

The following development dependencies are also included:

- `jest`: Testing framework for JavaScript.
- `nodemon`: Utility that automatically restarts the server when code changes are detected.
- `supertest`: HTTP assertion library for testing Node.js HTTP servers.

## License

This project is licensed under the [ISC License](LICENSE).