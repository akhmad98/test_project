const App = require('./app')

let arg = process.argv.slice(2);

App.execute(parseInt(arg[0]));
