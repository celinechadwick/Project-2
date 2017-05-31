//Do I need this?
require('dotenv').config();

const express = require('express');

//Do I need these?
const logger = require('morgan');
const path = require('path');


const bodyParser = require('body-parser');

//needed to use put 
const methodOverride = require('method-override');

//Do I need this?
const router = require('./resources/hotels');
