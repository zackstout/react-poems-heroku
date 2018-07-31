# Heroku-React-Postgres
Deploying a React/Postgres app with Heroku.

## Personal Notes
The key was to run the 3001 server in another terminal. Then everything works. You can then execute `npm run client`.

## Deployment Notes
- Was exceeding allowed amount of rows by Heroku (10,000).
- Needed this in our `pg` config: `var auth = params.auth.split(':');`.
- Also needed to change client-side `start` script back to `react-scripts-start`, from `react-scripts build && node ../server.js`.
