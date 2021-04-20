import { withAuth } from '@/lib/withAuth'
import { fetchUserQuests } from '@/lib/db'

const handler = async(req, res) => {
  try {
    const { quests } = await fetchUserQuests(req.uid)
    return res.status(200).json({ quests })
  } catch (error) {
    console.error(error)
    return res.status(500).json( { error: error.message })
  }
}

export default withAuth(handler)