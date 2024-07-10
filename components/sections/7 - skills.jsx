'use server'

// This section uses the skillicons.dev API to generate a list of skill icons. It is not on by default, but you can uncomment the line in app/page.js to enable it. Customize the skills by changing the icons in the URL below.

export default async function Skills() {
  return (
    <div className="mt-12">
      <h1 className="font-semibold tracking-tight text-black text-xl">Skills</h1>
      <div className="mt-3 scale-[101%]  border-b border-neutral-200" />
      <div className="mt-6">
        <img className='w-full hidden md:block' src="https://skillicons.dev/icons?i=js,html,css,tailwind,react,next,python,git,figma,postgres,supabase,cloudflare,github,bots" alt="Skill Icons" />    
        <img className='w-full block md:hidden' src="https://skillicons.dev/icons?i=js,html,css,tailwind,react,next,python,git,figma,postgres,supabase,cloudflare,github,bots&perline=5" alt="Skill Icons" />    
      </div>
    </div>
  )
}
