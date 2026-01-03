import { IBM_Plex_Mono } from 'next/font/google'

const experiences = [
    {
        key: 1, 
        name: "Bloomberg (Summer 2025)", 
        description: "Designed and built a distributed system of controllers for " + 
        "infrastructure autoscaling with Golang, Postgres, Azure.",
    }, 
    {
        key: 2, 
        name: "Bank of America (Summer 2024)", 
        description: "Built software to automate trade order management and " + 
        "modification with Python and NLU. Developed socket - based API " + 
        "orchestration software.",
    }, 
    {
        key: 3, 
        name: "Metron (Summer 2023)", 
        description: "Developed a multithreaded Bayesian sampling system in " + 
        "Java improving SONAR tracking efficiency by 50%. Implemented modern " + 
        "MCMC and adaptive rejection techniques, cutting sampling errors by 75%.",
    }, 
]

const ibm_plex_mono = IBM_Plex_Mono({
    weight: ['700'],
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
})

export default function Experiences() {
    return (
        <div>

            {/* Experiences Section Header */}
            <h1 className={`text-xl text-gold ${ibm_plex_mono.className} underline pb-2`}>
                EXPERIENCES</h1>
            <div className="flex flex-col gap-8">
            
            {/* Map through experiences array to display each experience. */}
            {experiences.map((experience) => (
                <div key={experience.key} className="md:w-xl">
                    <h2 className="text-md mb-1">{experience.name}</h2>
                        <p className="text-sm text-slate-300">{experience.description}</p>
                </div>
            ))}

        </div>
    </div>
    );
}