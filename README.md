![Portfolio](https://github.com/digitalRM/FOYM-Portfolio/assets/70782025/22fa4f5d-de61-4bcc-a615-364f05b17c2d)

Template Series - The Portfolio #1
---
This is a portfolio template for developers, designers, and creators. It is entirely free to use and customize. FOYM, a project started by Ruslan Mukhamedvaleev, created this website under the MIT license. 

![The Portfolio](https://github.com/digitalRM/FOYM-Portfolio/assets/70782025/cc64fb6a-93dd-4765-85d3-80c919aa55e8)

This is an adapted version of my personal portfolio that uses variables and is annotated with comments to make it more approachable to beginners and non-developers. 


Getting Started
---

To get a local copy up and running, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- An IDE

### Installation

Clone the repository

```bash
git clone https://github.com/digitalRM/FOYM-Portfolio.git
```

Install required packages

```bash
npm install
```

Customize your details within the `app/page.js` file

```js

// Change these values to customize your personal website!
const name = 'John Doe'
const description = 'Intrested in software, machine learning, and origami.'
const email = 'example@email.com'

// Fill in your socials here. Place the URL of the social media not just the username.
const linkedin = 'https://www.linkedin.com/'
const github = 'https://github.com/'

// Don't forget to edit the sections in the components/sections folder to match your information!
// Also, delete the banner in layout.js before publishing your site.
```

Customize your details across all the sections inside the `components/sections` folder
```js
1 - header.jsx
2 - aboutMe.jsx
3 - projects.jsx
4 - experience.jsx
5 - education.jsx
6 - skills.jsx
7 - publications.jsx
8 - footer.jsx
```

Delete Banner in `app/layout.js`

```js
// Delete this import below when you are ready to remove the banner
import Banner from "@/components/sections/999 - banner";

{/* This is the banner for the FOYM website. Feel free to delete this! */}
<Banner />
```
Delete Banner from the `components/sections` folder
```js
999 - banner.jsx
```

Customize your metadata in `app/layout.js`
```js
// This is the metadata for the website. Change the values to match your website. Upload the openGraph.png to your public folder
export const metadata = {
  metadataBase: new URL('https://portfolio.foym.org/'),
  title: "Portfolio Template - FOYM",
  description: "This is a portfolio template for developers, designers, and creators. It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.",
  openGraph: {
    title: "Portfolio Template - FOYM",
    description: "This is a portfolio template for developers, designers, and creators. It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.",
    url: 'https://portfolio.foym.org/',
    siteName: 'Portfolio Template - FOYM',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image on the the website\s name "Portfolio Template - FOYM" and star like characters in the background pointing at the name',
      },
    ], 
    locale: 'en_US',
    type: 'website',
  },
}
```

Run the development server

```bash
npm run dev
```

## Contact 

If you are having trouble setting this up, please feel free to contact me via the [foym](https://www.foym.org) website. 

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.


