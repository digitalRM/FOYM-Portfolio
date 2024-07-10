'use server'

import Header from '@/components/sections/1 - header'
import AboutMe from '@/components/sections/2 - aboutMe'
import Projects from '@/components/sections/3 - projects'
import Experience from '@/components/sections/4 - experience'
import Education from '@/components/sections/5 - education'
import Skills from '@/components/sections/6 - skills'
import Publications from '@/components/sections/7 - publications'
import Footer from '@/components/sections/8 - footer'


// Change these values to customize your personal website!
const name = 'John Doe'
const description = 'Intrested in software, machine learning, and origami.'
const email = 'example@email.com'

// Fill in your socials here. Place the URL of the social media not just the username.
const linkedin = 'https://www.linkedin.com/'
const github = 'https://github.com/'

// Don't forget to edit the sections in the components/sections folder to match your information!
// Also, delete the banner in layout.js before publishing your site.

export default async function Home() {
  return (
    <div className="flex-col flex w-screen overflow-x-hidden scroll-smooth">  
      <div className="relative h-dvh overflow-w-hidden">
        <div className="mx-auto max-w-4xl px-6 pt-6 lg:pt-10 lg:px-8 relative">
          <Header name={name} description={description} email={email} linkedin={linkedin} github={github} />
          <AboutMe />
          <Projects github={github} />
          <Experience />
          <Education />
          <Skills /> 
          <Publications />
          <Footer />
        </div>
      </div>
    </div>
  )
}
