import Hero from '../sections/Hero'
import Partners from '../sections/Partners'
import Trust from '../sections/TrustMe'
import NewsLetter from '../sections/NewsLetter'
import WhatPeople from '../sections/WhatPeople'
import Stats from '../sections/Stats'
import Builder from '../sections/Builder'
import Footer from '../components/Footer'

function Index() {
  return (
    <div>
      <div className="max-w-[87rem] mx-auto mt-[68px]">
        <Hero />
        <Stats />
      </div>
      <Builder />
      <Partners />
      <Trust />
      <NewsLetter />
      <WhatPeople />
      <div className="max-w-[87rem] mx-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Index
