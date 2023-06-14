// Step 1: Import your component
import * as React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

import bagan from '/src/images/bagan2223-v2.png'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <body className=''>
      <Seo 
        title="Tentang PPI Kyoto-Shiga" 
        description="Tentang PPI Kyoto-Shiga"
      />
      <Layout>
        <main className='max-w-6xl mx-auto md:px-6 px-4 py-8'>
          <h1 className=" max-w-4xl md:text-5xl text-3xl text-black font-bold mb-8 mx-auto pb-4 pt-8 border-b-2">Tentang PPI Kyoto-Shiga</h1>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="md:text-lg text-md">
              Tujuan dibentuknya PPI Kyoto-Shiga adalah untuk mewujudkan masyarakat ilmiah yang bertanggung jawab, berkontribusi nyata bagi masyarakat dan peradaban dunia dengan semangat persatuan dan kesatuan. Dalam usahanya, PPI Kyoto-Shiga membantu dalam kelancaran studi anggotanya, menampung dan menyalurkan segala kepentingan, kehendak dan cita-cita bersama, serta memupuk dan mengembangkan bakat anggotanya baik dalam skala nasional maupun internasional guna mencapai tujuan dari organisasi.
            </p>
            <p className="md:text-lg text-md">
              Meskipun menyandang nama pelajar, keanggotaan PPI Kyoto-Shiga pada dasarnya adalah seluruh Warga Negara Indonesia (WNI) yang berada di wilayah kepengurusan PPI Kyoto-Shiga. Anggota PPI yang berstatus pelajar, terdefinisi sebagai warga yang sedang menempuh Pendidikan di Jepang dan memenuhi syarat-syarat keanggotaan, yaitu terdaftar sebagai pelajar di Lembaga Pendidikan minimal setingkat SMA di Jepang dalam jangka waktu minimal enam bulan untuk Keanggotaan Biasa, dan terdaftar di Lembaga penelitian setingkat perguruan tinggi di Jepang dalam jangka waktu kurang dari enam bulan dan post-doctoral fellowship untuk Keanggotaan Luar Biasa.
            </p>
            <p className="md:text-lg text-md">
              Namun, dengan sifat dan semangat kekeluargaan yang dijunjung, PPI Kyoto-Shiga juga memberikan pelayanan kepada anggota keluarga dari pelajar (dependen) dan kepada WNI lain, khususnya yang berdomisili di Kyoto-Shiga baik dari kalangan pekerja (けんしゅうせい), perawat, maupun WNI pada umumnya. Dengan hal ini, keberadaan PPI Kyoto-Shiga dapat dirasakan oleh semua warganya. Tidak hanya yang berdomisili di Kyoto-Shiga, tapi juga bagi WNI lainnya.
            </p>
          </div>
          <h2 className="max-w-4xl md:text-3xl text-2xl text-black font-bold mb-8 mx-auto pb-4 pt-8 border-b-2">Struktur Kepengurusan PPI Kyoto-Shiga 2022/2023</h2>
          <div>
            <img src={bagan} alt="bagan"/>
          </div>
        </main>
      </Layout>
    </body>
  )
}
// Step 3: Export your component
export default AboutPage