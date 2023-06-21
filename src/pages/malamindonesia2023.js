import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import mi2023logo from '/static/images/mi2023-logo.png'
import image1 from '/static/images/mi2023-1.jpeg'
import image2 from '/static/images/mi2023-2.jpg'
import image3 from '/static/images/mi2023-3.jpg'
import dateandtime from '/static/images/mi2023-dateandtime.svg'

const MalamIndonesia2023 = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Malam Indonesia 2023" />
      <main className='grid gap-16'>
        {/* CTA */}
        <div className="bg-mi2023bg bg-cover pt-16 pb-10 md:py-20 m-4 sm:m-12 rounded-3xl items-center">
          <div className="max-w-5xl md:px-8 mx-auto justify-center">
            <img src={mi2023logo} className="w-full" alt="cta"/>
          </div>
          <div className="flex justify-center pt-4">
            <button className="bg-primary hover:bg-gray-500 text-white text-md font-display font-medium my-4 py-2 px-4 rounded-full"><a href="#register-here">Register here</a></button>
          </div>
        </div>

        {/* Event rundown */}
        <div className="container mx-auto p-4">
          <h2 className="md:text-5xl text-3xl text-black text-center font-accent font-medium mb-8 mx-auto pb-4 pt-8 border-b-4 border-primary">Event Rundown</h2>
          <div className="grid md:grid-cols-2">
            <div>
              <img src={image1} className="w-full" alt="cta"/>
            </div>
            <div className="p-8">
              <h3 className="md:text-3xl text-2xl font-display font-bold">Indonesian Product Bazaar</h3>
              <p className="md:text-xl text-md font-display font-bold">12:00 - 17:00</p>
              <p className="md:text-xl text-md font-serif pr-8 mt-4">A bazaar introducing varieties of Indonesian food, beverages, apparel, and souvenirs.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="inline md:hidden">
              <img src={image2} className="w-full" alt="cta"/>
            </div>
            <div className="p-8">
              <h3 className="md:text-3xl text-2xl text-right font-display font-bold">Tenun workshop</h3>
              <p className="md:text-xl text-md text-right font-display font-bold">13:00 - 16:00</p>
              <p className="md:text-xl text-md text-right font-serif mt-4">Working together with institutions residing in Indonesia, MI 2023 will host a workshop to make Furoshiki using tenun technique with hopes to raise the international community’s public awareness towards tenun. Participants will be taught to make tenun related products with an eco-friendly method, as well as introduced to distinct tenun patterns, specifically ones originating from Tidore.</p>
            </div>
            <div className="md:inline hidden">
              <img src={image2} className="w-full" alt="cta"/>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div>
              <img src={image3} className="w-full" alt="cta"/>
            </div>
            <div className="p-8">
              <h3 className="md:text-3xl text-2xl font-display font-bold">Cultural Performance</h3>
              <p className="md:text-xl text-md font-display font-bold">17:00 - 19:30</p>
              <p className="md:text-xl text-md font-serif pr-8 mt-4">A Japanese in kimono discovers the meaning and diversity of Indonesia's traditional fabrics through the guidance of Indonesians in an adventure around Indonesia presented in various cultural performances.</p>
            </div>
          </div>
        </div>

        {/* Date and location */}
        <div className="container mx-auto p-4">
          <h2 className="md:text-5xl text-3xl text-black text-center font-accent font-medium mb-8 mx-auto pb-4 pt-8 border-b-4 border-primary">Date and Location</h2>
          <div className="grid grid md:grid-cols-2">
            <div className="hidden md:inline">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.836150852511!2d135.7854501152099!3d35.01080648035603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108de2db4d293%3A0x5d95201632b7c49b!2sKyoto%20International%20Community%20House%20(kokoka)!5e0!3m2!1sen!2sjp!4v1677590116169!5m2!1sen!2sjp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="kokoka map" className="rounded-2xl"></iframe>
            </div>
            <img src={dateandtime} className="w-full md:p-20" alt="cta"/>
          </div>
        </div>

        {/* About Malam Indonesia */}
        <div className="grid gap-8 bg-primary px-4 py-40">
          <h2 className="md:text-5xl text-3xl text-white text-center font-accent font-medium">About Malam Indonesia</h2>
          <p className="text-md md:text-xl text-white text-center max-w-3xl mx-auto">Malam Indonesia is a biannual event organized by the Indonesian Student Association (PPI) of Kyoto Shiga Japan which functions as a platform that comprehensively introduces the art and culture of Indonesia to Japanese people and foreigners living in Kyoto. With aims to provide a medium for foreigners to learn and obtain a hands-on experience with Indonesian culture, Malam Indonesia will not only have art and cultural stage performances, but will also showcase local products crafted by Indonesian youths and host a workshop to make Batik-patterned Furoshiki. Furthermore, it is hoped that this event would be able to foster interaction and strengthen the relationship between foreigners, particularly between the Japanese and the Indonesians. </p>
        </div>

        {/* Register here */}
        <div className="grid grid-cols-1 gap-4 container mx-auto bg-mi2023bg bg-cover px-6 md:px-12 py-12 md:rounded-3xl items-center" id="register-here">
          <h2 className="text-3xl md:text-4xl font-serif font-bold md:px-6">Register now</h2>
          <p className="text-md md:text-xl md:px-6 mb-4">For registration please kindly reach out to our designated contact persons.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">Tubagus Daffa</h3>
              <p className="md:text-lg">LINE: merdangga2014</p>
              <p className="md:text-lg">Phone: +81 90 4290 7297</p>
              <p className="md:text-lg">WA: +62 812 1066 6279</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">Rafa</h3>
              <p className="md:text-lg">LINE: 21436578</p>
              <p className="md:text-lg">Phone: +81 80 3436 8865</p>
              <p className="md:text-lg">WA: +81 80 3436 8865</p>
            </div>
            <div className="flex gap-4 px-6">
              <a className="md:text-lg underline" href="https://drive.google.com/file/d/1WvPIo8AI-b7j9sKg0UftpvXvSLl8yULr/view?usp=sharing">Event Poster (EN)</a>
              <a className="md:text-lg underline" href="https://drive.google.com/file/d/1ngbnWluEnYoNMmsX3fNvsqE8TePwSJDw/view?usp=sharing">Event Poster (JP)</a>
            </div>
          </div>

        </div>
        
        </main>
    </Layout>
  )
}

export default MalamIndonesia2023