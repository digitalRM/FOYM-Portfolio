'use server'

// This section uses the skillicons.dev API to generate a list of skill icons. Customize the skills by changing the icons in the URL below.

// Use this EXACT format to add or remove skills: "skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8,skill9,skill10" 
// Available skills: skillicons.dev

const skills = "js,html,css,tailwind,react,next,python,git,figma,postgres,supabase,cloudflare,github"

export default async function Skills() {
  return (
    <div className="mt-12">
      <h1 className="font-semibold tracking-tight text-black text-xl">Skills</h1>
      <div className="mt-3 scale-[101%]  border-b border-neutral-200" />
      <div className="mt-6">
        <img className='w-full hidden md:block' src={"https://skillicons.dev/icons?i=" + skills} alt="Skill Icons" />  
        <img className='w-full block md:hidden' src={"https://skillicons.dev/icons?i=" + skills + "&perline=5"} alt="Skill Icons" />    
      </div>
    </div>
  )
}
