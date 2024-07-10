'use client'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'


const projects = [
    {
      title: 'FOYM Website',
      badges: {
        'Red': 'border border-red-500/15 text-red-800 bg-red-500/5 hover:bg-red-500/5',
        'Orange': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
        'Yellow': 'border border-yellow-500/15 text-yellow-800 bg-yellow-500/5 hover:bg-yellow-500/5',
        'Green': 'border border-green-500/15 text-green-800 bg-green-500/5 hover:bg-green-500/5',
        'Blue': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Purple': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
        'Black': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
      },
      image: '/foym.jpeg',
      link: 'https://www.foym.org/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    
    // Add more projects here! Make sure to follow the same format as the example above. Use the badges from the example above by changing the first parameter to the badge name.
  ]
  
export default function Projects({github}) {

  
  return (
      <div className="mt-12">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold tracking-tight text-black text-xl">Highlighted Projects</h1>
          <a href={github} target="_blank" rel="noopener noreferrer" className='h-fit' >
            <h1 className="font-semibold tracking-tight text-black sm:text-sm text-xs">View More<span className='sm:contents hidden'> On Github </span><ArrowUpRight className='inline-block w-4 h-4 -mr-1 text-neutral-950 transition-all' /></h1>
          </a>
        </div>
        <div className="mt-3 scale-[101%] border-b border-neutral-200" />
        <div className="mt-6 grid gap-4">
          {projects.map((project) => (
            <a key={project.link} href={project.link} target="_blank" rel="noopener noreferrer" className='bg-neutral-100/50 hover:scale-105 group p-6 rounded-[12px] sm:justify-between border-neutral-200/50 border hover:border-neutral-300/50 hover:bg-neutral-200/50 transition-all w-full flex flex-col justify-between'>
              <div>
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-xl font-semibold tracking-tight">{project.title}</h1>
                    <ArrowUpRight className='inline-block w-6 h-6 -mr-1 text-neutral-800/50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
                  </div>
                  <p className="mt-2 text-sm sm:text-base leading-6 text-neutral-800/80 py-2">{project.description}</p>
                </div>
                <div className="mt-2 overflow-auto flex flex-wrap">
                  {Object.keys(project.badges).map((badge) => (
                    <Badge key={badge} style={{margin: '2px', flexGrow: 1, justifyContent: 'center'}} className={project.badges[badge]}>{badge}</Badge>
                  ))}
                </div>
              </div>
              <div className='rounded-[8px] w-full h-fit bg-neutral-100 group-hover:bg-neutral-100/50 transition-all  border-neutral-200 border mt-4 p-2'>
                <Image src={project.image} height={400} width={800} alt={project.title} className='rounded-[6px] grayscale group-hover:grayscale-0 transition-all' />
                
              </div>
            </a>
          ))}
        </div>
      </div>
  )
}
