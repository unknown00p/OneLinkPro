import express from 'express'
import prisma from './db'

const app = express()
app.use(express.json())

app.get('/health', async (req, res) => {
  try {
    // This simple query checks if the DB is reachable
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: "ok", message: "Bun + Prisma + Supabase connected!" })
  } catch (e: any) {
    res.status(500).json({ status: "error", message: e.message })
  }
})

app.listen(3000, () => {
  console.log("🚀 Server is flying at http://localhost:3000")
})