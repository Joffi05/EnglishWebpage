import keys from './apiKeys.js'

const app = require('express')()

const faunadb = require('faunadb')
const client = new faunadb.Client({secret: keys.faunadb})