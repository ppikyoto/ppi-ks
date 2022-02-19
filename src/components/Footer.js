import * as React from 'react'

const Footer = () => {
  return (
    <body className="relative flex bg-white container max-w-6xl mx-auto md:px-6 px-4 py-8 mt-32">
      <main className="container text-sm sm:text-base pt-4 border-t-2">
        © {new Date().getFullYear()} Persatuan Pelajar Indonesia Kyoto-Shiga
      </main>
    </body>
  )
}
export default Footer