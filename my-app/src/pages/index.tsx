import { Navbar } from '@/component/layouts/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className='text-red-500 bg-white'>Hello World</h1>
   </main>
  )
}
