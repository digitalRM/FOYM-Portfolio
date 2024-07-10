'use server'

// Change this to your about me text
const aboutMe = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer vitae justo eget magna fermentum iaculis eu non. Tellus mauris a diam maecenas sed. Ut pharetra sit amet aliquam id diam. Dui id ornare arcu odio ut sem. Suspendisse potenti nullam ac tortor. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus."

export default async function AboutMe() {
  return (
    <div className="mt-12">
      <h1 className="font-semibold tracking-tight text-black text-xl">About Me</h1>
      <div className="mt-3 border-b border-neutral-200" />
      <p className="mt-6 text-sm sm:text-base leading-6 text-neutral-800/80">{aboutMe}</p>
    </div>
  )
}



