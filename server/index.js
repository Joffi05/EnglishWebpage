import keys from './apiKeys.js'
import express from 'express'
import faunadb from 'faunadb'

const app = express()
const PORT = process.env.PORT || 3001

const client = new faunadb.Client({secret: keys.faunadbKey})


//functions
const {
  Paginate,
  Get,
  Select,
  Match,
  Index,
  Create,
  Collection,
  Lambda,
  Var,
  Join,
  Ref
} = faunadb.query


// GET endpoints

app.get('/posts', async (req, res) => {

  const doc = await client.query(
    Get(Ref(Collection("posts"), "292888013360333313"))
  )
  .catch(e => res.send(e))

  res.json({posts: doc})
})


// POST endpoints

app.post('/newPost', express.json(), async (req, res) => {
  const data = req.body

  const doc = await client.query(
    Create(
      Collection('posts'),
      { data }
    )
  )
  .catch(e => res.send(e))

  res.send(doc)
})



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
  })