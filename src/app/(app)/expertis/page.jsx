import Head from 'next/head'
import Navbar from '@/app/components/Navbar'

import React from 'react'

const pageExpertis = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="some text" />
      </Head>
      <Navbar white={true} />
      <main>
        <section>
          <div>Hej</div>
        </section>
      </main>
    </>
  )
}

export default pageExpertis
