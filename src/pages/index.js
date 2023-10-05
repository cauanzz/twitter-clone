import { Inter } from 'next/font/google'
import Head from 'next/head'
import Sidebar from '../../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
      <Head>
        <title>Twitter</title>
      </Head>

      <main>
        <Sidebar />
      </main>

    </>
  )
}
