import {
  nasa
} from "../assets"

import {IoLogoTwitter} from 'react-icons/io'  
import {RiInstagramFill,RiFacebookBoxFill} from 'react-icons/ri'  
import {FaBehanceSquare,FaLinkedin} from 'react-icons/fa'  

// World Models
import PlanetMercuryCanvas from "../components/canvas/mercury"
import PlanetVenusCanvas from "../components/canvas/venus"
import PlanetEarthCanvas from "../components/canvas/earth"
import PlanetMarsCanvas from "../components/canvas/mars"
import PlanetJupiterCanvas from "../components/canvas/jupiter"
import PlanetSaturnCanvas from "../components/canvas/saturn"
import PlanetUranusCanvas from "../components/canvas/uranus"
import PlanetPlutoCanvas from "../components/canvas/pluto"
import PlanetNeptuneCanvas from "../components/canvas/neptune"

// Asteroid Models
import AsteroidVestaCanvas from "../components/canvas/vesta"
import AsteroidBenneCanvas from "../components/canvas/bennu"
import AsteroidToutatisCanvas from "../components/canvas/toutatis"
import AsteroidDaphneCanvas from "../components/canvas/daphne"

// Missions 
import junoMission from '../images/juno.jpg'
import newHorizonsMission from '../images/new-horizons.png'
import Phoenix from '../images/phoenix.jpg'
import Davinci from '../images/davinci.webp'


const navLinks = [
  {
    id: "worlds",
    title: "Worlds",
  },
  {
    id: "asteroids",
    title: "Asteroids",
  },
  {
    id: "missions",
    title: "Missions",
  }
];

const footerLinks = [
  {
    id: "worlds",
    title: "Worlds",
  },
  {
    id: "asteroids",
    title: "Asteroids",
  },
  {
    id: "missions",
    title: "Missions",
  },
  {
    id: "projects",
    title: "Projects",
    link: 'https://www.behance.net/femiaros'
  }
];

const footerSocials = [
  {
    id: "linkedin",
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/oluwafemi-sanmi-jnr'
  },
  {
    id: "behance",
    icon: FaBehanceSquare,
    link: 'https://www.behance.net/femiaros'
  },
  {
    id: "instagram",
    icon: RiInstagramFill,
    link: 'https://www.behance.net/femiaros'
  },
  {
    id: "facebook",
    icon: RiFacebookBoxFill,
    link: 'https://www.facebook.com/Oluwafemi.frozee'
  },
  {
    id: "twitter",
    icon: IoLogoTwitter,
    link: 'https://twitter.com/femi_frozee'
  }
];

const planetsSlideData = [
  {
    id:1,
    name:'Mercury',
    distance:'43.27 million km',
    details:'The first & closest planet to the Sun. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter.',
    model:PlanetMercuryCanvas
  },
  {
    id:2,
    name:'Venus',
    distance:'66.88 million km',
    details:`Similar in structure and size to Earth, Venus's thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.`,
    model:PlanetVenusCanvas
  },
  {
    id:3,
    name:'Earth',
    distance:'93.83 million km',
    details:`Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.`,
    model:PlanetEarthCanvas 
  },
  {
    id:4,
    name:'Mars',
    distance:'154.69 million km',
    details: `Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was – billions of years ago – wetter and warmer, with a thicker atmosphere.`,
    model:PlanetMarsCanvas 
  },
  {
    id:5,
    name:'Jupiter',
    distance:'460.56 million km',
    details: `Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red Spot is a centuries-old storm bigger than Earth.`,
    model:PlanetJupiterCanvas
  },
  {
    id:6,
    name:'Saturn',
    distance:'911.13 million km',
    details: `Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.`,
    model:PlanetSaturnCanvas 
  },
  {
    id:7,
    name:'Uranus',
    distance:'1.920 billion km',
    details: `Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.`,
    model:PlanetUranusCanvas
  },
  {
    id:8,
    name:'Neptune',
    distance:'2.780 billion km',
    details: `Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations.`,
    model:PlanetNeptuneCanvas 
  },
  {
    id:9,
    name:'Pluto',
    distance:'3.231 billion km',
    details: `Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the best known of a new class of worlds called dwarf planets.`,
    model:PlanetPlutoCanvas 
  }
]

const asteroidsSlideData = [
  {
    id:1,
    name:'Vesta',
    details:`4 Vesta is the second most massive body in the main asteroid belt, accounting for almost nine percent of the total mass of all asteroids. Only dwarf planet Ceres is more massive in that region of rocky debris between Mars and Jupiter. Vesta orbits the sun every 1,330 days (3.64 years), coming as close as 2.15 AU and reaching as far as 2.57 AU from the sun. It's about 525.4 kilometers in diameter`,
    model:AsteroidVestaCanvas
  },
  {
    id:2,
    name:'Bennu',
    details:`An ancient relic of our solar system’s early days, Bennu has seen more than 4.5 billion years of history. Scientists think that within 10 million years of our solar system’s formation, Bennu’s present-day composition was already established.`,
    model:AsteroidBenneCanvas
  },
  {
    id:3,
    name:'Toutatis',
    details:`4179 Toutatis is an elongated, stony asteroid and slow rotator, classified as a near-Earth object and potentially hazardous asteroid of the Apollo asteroid & Alinda asteroid groups. Approximately 2.5 kilometers in diameter, the asteroid was named after Toutatis from Celtic mythology.`,
    model:AsteroidToutatisCanvas
  },
  {
    id:4,
    name:'Daphne',
    details:`Daphne is a large asteroid from the asteroid belt. NASA JPL classified Daphne as not potentially hazardous because its orbit does not bring it close to Earth. Daphne is a dark-surfaced body, it orbits the sun every 1,680 days (4.60 years), coming as close as 2.00 AU and reaching as far as 3.52 AU from the sun. it's about 205.5 kilometers in diameter, making it larger than 99% of asteroids.`,
    model:AsteroidDaphneCanvas
  },
]  


const missions = [
  {
    title: "New Horizons",
    company_name: "Nasa",
    icon: nasa,
    iconBg: "#E6DEDD",
    src: newHorizonsMission,
    hashString: 'LA8qB6~VR-0K-=-;WBM_4:E2xu?a',
    date: "Jan 2006 - Further",
    points: [
      "New Horizons is a NASA mission to study the dwarf planet Pluto, its moons, and other objects in the Kuiper Belt, a region of the solar system that extends from about 30 AU, near the orbit of Neptune, to about 50 AU from the Sun.",
      "It was the first mission in NASA’s New Frontiers program, a medium-class, competitively selected, and principal investigator-led series of missions. (The program also includes Juno and OSIRIS-REx.)",
      "The design of the spacecraft was based on a lineage traced back to the CONTOUR and TIMED spacecraft, both also built by the Applied Physics Laboratory at Johns Hopkins University.",
    ],
  },
  {
    title: "Phoenix",
    company_name: "Nasa",
    icon: nasa,
    iconBg: "#383E56",
    src: Phoenix,
    hashString: 'LgCZV5M_ROt8_4RiRiog%NWBV@az',
    date: "Aug 2007 - Nov 2008",
    points: [
      "The Phoenix Mars lander was the first under NASA’s new Mars Scout Program to send a series of small, low-cost, low complexity and higher frequency robotic missions to Mars.",
      "(The second and last mission in the series was MAVEN launched in 2013. Mars missions were then folded into the Discovery Program where they would compete with missions to other planetary destinations.)",
      "The mission’s science goals included studying the history of water on Mars in all phases, searching for evidence of habitable zones, and assessing the biological potential of the ice-soil boundary.",
    ],
  },
  {
    title: "Juno",
    company_name: "Nasa",
    icon: nasa,
    iconBg: "#E6DEDD",
    src: junoMission,
    hashString: 'LA8qEG4n4n~p%LR*NGt600?H-p9F',
    date: "August 2011 - September 2025",
    points: [
      "On August 5, 2011, NASA’s Juno spacecraft embarked on a 5-year journey to our solar system's largest planet – the gas giant Jupiter.",
      "Its mission: to probe beneath the planet's dense clouds and answer questions about the origin and evolution of Jupiter, our solar system, and giant planets in general across the cosmos.",
      "Juno arrived at Jupiter on July 4, 2016, after a 5-year, 1.7-billion-mile journey, and settled into a 53-day polar orbit stretching from just above Jupiter’s cloud tops to the outer reaches of the Jovian magnetosphere.",
      "Now in its extended mission, the agency’s most distant planetary orbiter continues its investigation of the solar system’s largest planet through September 2025, or until the spacecraft’s end of life.",
    ],
  },
  {
    title: "Davinci",
    company_name: "Nasa",
    icon: nasa,
    iconBg: "#383E56",
    src: Davinci,
    hashString: 'L4KA11}j;aT#NJ9vWY~89D0;5[]x',
    date: "Late 2020s - Further",
    points: [
      "Named after visionary Renaissance artist and scientist Leonardo da Vinci, the DAVINCI mission Deep Atmosphere Venus Investigation of Noble gases, Chemistry, and Imaging is scheduled to launch in the late 2020s.",
      "NASA’s DAVINCI mission will study the origin, evolution, and present state of Venus in unprecedented detail from near the top of the clouds to the planet’s surface.",
      "Goal is to help answer longstanding questions about our neighboring planet, especially whether Venus was ever wet and habitable like Earth."
    ],
  }
];


export { navLinks,footerLinks,footerSocials,planetsSlideData,asteroidsSlideData, missions};
