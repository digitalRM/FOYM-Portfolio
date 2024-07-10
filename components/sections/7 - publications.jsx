'use server'
import { Badge } from '@/components/ui/badge'

const publications = [
  {
    title: 'Lorem Ipsum',
    date: 'July 2023',
    released: true,
    badge: "News",
    company: 'The News Company',
    link: 'https://www.google.com',
    short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  // Edit the entry above and add more publications here! Make sure to follow the same format as the example above.
]

export default async function Publications() {
  return (
    <div className="mt-12">
      <h1 className="font-semibold tracking-tight text-black text-xl">Publications</h1>
      <div className="mt-3 scale-[101%]  border-b border-neutral-200" />
      <div className="mt-6 grid grid-cols-3 gap-4">
        {publications.map((news) => (
          <div key={news.company} className='col-span-3'>
            {news.released == true ? 
          <a href={news.link} target="_blank" rel="noopener noreferrer" >
            <div className="mt-0 bg-neutral-100/50 p-6 rounded-lg flex flex-col sm:flex-row sm:justify-between border-neutral-200/50 border hover:border-neutral-300/50 hover:bg-neutral-200/50 transition-all">
              <div>
                <div className="flex justify-between">
                  <h2 className="text-base font-semibold">{news.company}</h2>
                  <Badge style={{ height: 'fit-content', paddingTop: '4px', paddingBottom: '4px' }} className={news.badge === "News" ? 'bg-black-300/5 border hover:bg-black-300/5 border-black/10 text-black'              : 'bg-purple-500/10 text-purple-700 border border-purple-500/30'         }     >         {news.badge}     </Badge>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">{news.title}</p>
                  <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">{news.date}</p>
                </div>
                <p className="mt-2 text-sm sm:text-base leading-6 text-neutral-700/75">{news.short}</p>
              </div>
            </div>
          </a> :  
              <div className="mt-0 cursor-not-allowed bg-neutral-100/50 p-6 rounded-lg flex flex-col sm:flex-row sm:justify-between border-neutral-200/50 border hover:border-neutral-300/50 hover:bg-neutral-200/60 transition-all">
                <div>
                  <div className="flex justify-between">
                      <h2 className="text-base font-semibold">{news.company}</h2>
                      <Badge style={{ height: 'fit-content', paddingTop: '4px', paddingBottom: '4px' }} className={news.badge === "News" ? 'bg-blue-300/5 border border-black/10 text-black':'bg-purple-500/10 text-purple-700 border border-purple-500/30 hover:bg-purple-500/10'         }     >         {news.badge}     </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">{news.title}</p>
                    <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">{news.date}</p>
                  </div>
                  <p className="mt-2 text-sm sm:text-base leading-6 text-neutral-700/75">{news.short}</p>
                </div>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}
