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
  Map: mp,
  Union
} = faunadb.query


// GET endpoints

app.get('/posts/:content', async (req, res) => {

  if(req.params.content === "null") {
    const doc = await client.query(
      mp(
        Paginate(
          Match(Index("all_depts"))
        ),
        Lambda("X", Get(Var("X")))
      )
    )
    .catch(e => res.send(e))

    const docData = doc.data

    res.json({posts: docData})
  }

  else {
    const doc = await client.query(
      mp(
        Paginate(
          Union(
            Match(Index("search_name"), req.params.content),
            Match(Index("search_city"), req.params.content),
            Match(Index("search_date"), req.params.content),
            Match(Index("search_text"), req.params.content),
            Match(Index("search_title"), req.params.content)
          )
        ),
        Lambda("post", Get(Var("post"))
        )
      )
    )
    
    .catch(e => res.send(e))

    const docData = doc.data
    res.json({posts: docData})

  }
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

  res.send("Success")
})



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
  })