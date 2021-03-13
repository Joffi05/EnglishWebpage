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
  Ref,
  Call,
  Function: fn,
  Map: mp
} = faunadb.query


// GET endpoints

app.get('/posts', async (req, res) => {

  const doc = await client.query(
    mp(
      Paginate(
        Match(Index("all_depts"))
      ),
      Lambda("X", Get(Var("X")))
    )
  )
  .catch(e => res.send(e))

  
  // console.log(doc.data[0].data)
  const docData = doc.data

  res.json({posts: docData})
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