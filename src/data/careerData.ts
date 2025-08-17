export interface CareerAsset {
  label: string
  src?: string
  alt?: string
}

export interface CareerExperience {
  id: number
  company: string
  about: string
  link: string
  location: string
  duration: string
  jobTitle: string
  description: string
  tags: string[]
  assets: CareerAsset[]
}

export const careerData: CareerExperience[] = [
  {
    id: 1,
    company: "FlightHub",
    about: "Online Travel Agency",
    link: "https://www.flighthub.com",
    location: "Montreal, Quebec, Canada",
    jobTitle: "Senior Full Stack Engineer",
    duration: "2022 - present",
    description: "Built solutions across the tech stack from front-end to back-end to infrastructure, reported directly to CEO to solve technical problems across the company",
    tags: ["php", "node.js", "python", "react"],
    assets: [
      {
        src: '/src/assets/images/flighthub.png',
        label: "FlightHub",
        alt: "FlightHub Company"
      }
    ]
  }
]