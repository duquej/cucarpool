import type { NextPage } from 'next'
import CarpoolSearch from '../components/CarpoolSearch';

import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
      <Layout>
        <CarpoolSearch/>
      </Layout>
 
  )
}

export default Home
