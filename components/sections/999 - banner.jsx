

// Feel free to delete this file! This is just the banner for the FOYM website. 


export default function Banner() {
  return (
    <div className="sticky z-20 top-0">
      <a href="https://www.foym.org/work"className="flex items-center gap-x-6 bg-black px-6 py-2.5 sm:px-3.5 sticky z-20 top-0">
        <div className="mx-auto">
          <p className="text-sm leading-6 text-white">
            
              <strong className="font-semibold">An FOYM Template</strong>
              <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              This is a template available for free on foym.org
    
          </p>
        </div>
        
      </a>
      <div className="absolute -inset-2 rounded-[50px] bg-gradient-to-r from-brandBlue to-brandPink opacity-40 blur-xl h-14"/> 
    </div>
  )
}
