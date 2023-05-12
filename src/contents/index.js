import {
  nasa
} from "../assets"

import planetImage1 from '../images/mercury.jpg'
import planetImage2 from '../images/venus.jpg'
import planetImage3 from '../images/earth.jpg'
import planetImage4 from '../images/mars.jpg'
import planetImage5 from '../images/jupiter.jpg'
import planetImage6 from '../images/saturn.jpg'
import planetImage7 from '../images/uranus.jpg'
import planetImage8 from '../images/neptune.jpg'
import planetImage9 from '../images/pluto.jpg'

import junoMission from '../images/juno.jpg'
import newHorizonsMission from '../images/new-horizons.png'
import Phoenix from '../images/phoenix.jpg'
import Davinci from '../images/davinci.webp'


const navLinks = [
  {
    id: "explore",
    title: "Explore",
  },
  {
    id: "missions",
    title: "Missions",
  },
  // {
  //   id: "support",
  //   title: "Support",
  // },
];

const slideData = [
  {
    id:1,
    name:'Mercury',
    distance:'43.27 million km',
    details:'From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter.From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, the sunlight 11-times brighter.',
    src:planetImage1 
  },
  {
    id:2,
    name:'Venus',
    distance:'66.88 million km',
    details:`Similar in structure and size to Earth, Venus's thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.`,
    src:planetImage2
  },
  {
    id:3,
    name:'Earth',
    distance:'93.83 million km',
    details:`Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.`,
    src:planetImage3
  },
  {
    id:4,
    name:'Mars',
    distance:'154.69 million km',
    details: `Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was – billions of years ago – wetter and warmer, with a thicker atmosphere.`,
    src:planetImage4
  },
  {
    id:5,
    name:'Jupiter',
    distance:'460.56 million km',
    details: `Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red Spot is a centuries-old storm bigger than Earth.`,
    src:planetImage5
  },
  {
    id:6,
    name:'Saturn',
    distance:'911.13 million km',
    details: `Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.`,
    src:planetImage6
  },
  {
    id:7,
    name:'Uranus',
    distance:'1.920 billion km',
    details: `Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.`,
    src:planetImage7
  },
  {
    id:8,
    name:'Neptune',
    distance:'2.780 billion km',
    details: `Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations.`,
    src:planetImage8
  },
  {
    id:9,
    name:'Pluto',
    distance:'3.231 billion km',
    details: `Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the best known of a new class of worlds called dwarf planets.`,
    src:planetImage9
  }
]


const missions = [
  {
    title: "New Horizons",
    company_name: "Nasa",
    icon: nasa,
    iconBg: "#E6DEDD",
    src: newHorizonsMission,
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
    date: "Late 2020s - Further",
    points: [
      "NASA’s DAVINCI mission will study the origin, evolution, and present state of Venus in unprecedented detail from near the top of the clouds to the planet’s surface.",
      "Goal is to help answer longstanding questions about our neighboring planet, especially whether Venus was ever wet and habitable like Earth.",
      "Named after visionary Renaissance artist and scientist Leonardo da Vinci, the DAVINCI mission Deep Atmosphere Venus Investigation of Noble gases, Chemistry, and Imaging is scheduled to launch in the late 2020s.",
    ],
  }
];


export { navLinks,slideData, missions};
