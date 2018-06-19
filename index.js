const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const massive = require( 'massive' );
require( 'dotenv' );

const app = express();
app.use( bodyParser.json() );
