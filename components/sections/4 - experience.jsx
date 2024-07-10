'use server'

import Image from "next/image"

const roles = [
  {
    title: 'Founder, Executive Director',
    company: 'FOYM.',
    date: 'July 2023 - Present',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ]
  },
  
  // Add more roles here! Make sure to follow the same format as the example above.
]
  

export default async function Experience() {
  return (
    <div className="mt-12">
      <h1 className="font-semibold tracking-tight text-black text-xl">Experience</h1>
      <div className="mt-3 scale-[101%]  border-b border-neutral-200 " />
      {roles.map((role) => (
        <div key={role.company} className="mt-6">
          <h2 className="text-lg tracking-tight font-semibold">{role.title}</h2>
          {role.previousTitle && <p className="mt-1 mb-1 text-sm sm:text-base font-medium leading-4 text-neutral-800/60 italic">Previously: {role.previousTitle}</p> }
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">{role.company}</p>
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">{role.date}</p>
          </div>
          <div className="mt-2 text-sm sm:text-base leading-6 text-neutral-600/80">
            <ol className="list-outside ml-4">
              {role.description.map((desc, index) => (
                <li key={index} className="mt-2 list-outside list-disc" >{Array.isArray(desc) ? desc.map((d, i) => <p key={i} className="mt-2">{d}</p>) : desc}</li>
              ))}
          </ol>
          </div>
          {role.items && (
            <div className="mt-2 flex flex-wrap">
              {role.items.map((item) => (
                <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer" className="mt-2 mr-2 rounded-md relative shadow-sm">
                  <Image src={item.image} alt={item.alt} width={120} height={120} className="rounded-md border aspect-video border-neutral-400/50 shadow-inner w-full" />
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
