import Banner from '@component/pages/banner'
import Contact from '@component/pages/contact'
import Footer from '@component/pages/footer'
import Header from '@component/pages/header'
import Projects from '@component/pages/projects'
import Skills from '@component/pages/skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='bg-purple-50'>
      <Header />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact />  */}
      <Footer />
      </div>
    </main>
  )
}
