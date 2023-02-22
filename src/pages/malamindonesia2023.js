import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MalamIndonesia2023 = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Malam Indonesia 2023" />
      <main className='max-w-6xl mx-auto md:px-6 px-4 py-8'>
          <h1 className=" max-w-6xl md:text-5xl text-3xl text-black font-bold mb-8 mx-auto pb-4 pt-8 border-b-2">Malam Indonesia 2023</h1>
          <div className="max-w-6xl mx-auto space-y-4">
            <p className="md:text-lg text-md">
              Website under construction
            </p>
          </div>
        </main>
    </Layout>
  )
}

export default MalamIndonesia2023