import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/Home'

const Home: NextPage = () => {
  return (
    <div>
      <head>
        <title>Rebecka Isberg</title>
        <link rel="icon" href="" />
      </head>
      <HomePage />{' '}
    </div>
  )
}

export default Home
