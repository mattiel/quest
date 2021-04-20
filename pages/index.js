import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { useRouter } from 'next/router'
import { useAuth } from '../lib/useAuth'

function Index() {
  const auth = useAuth();

  return(
    <Layout>
        <Hero/>
    </Layout>
  )
}

export default Index;