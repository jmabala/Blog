import { app } from './app.js'
import dotenv from 'dotenv'
import { initDatabase } from './db/init.js'
dotenv.config()
try {
  await initDatabase()
  const PORT = process.env.PORT || 8080
  app.listen(PORT, '0.0.0.0', () => {
    console.info(`express server running on port ${PORT}`)
  })
  console.info(`express server running on http://localhost:${PORT}`)
} catch (err) {
  console.error('error connecting to database:', err)
  process.exit(1)
}

// import { app } from './app.js'
// import dotenv from 'dotenv'
// import { initDatabase } from './db/init.js'
//
// dotenv.config()
//
// const PORT = process.env.PORT || 8080
//
// app.listen(PORT, '0.0.0.0', () => {
// console.info(`Express server running on port ${PORT}`)
// })
//
// initialize DB asynchronously
// initDatabase()
// .then(() => console.info('Database connected'))
// .catch(err => {
// console.error('Database connection failed:', err)
// optional: exit or keep serving limited routes
// })
//
