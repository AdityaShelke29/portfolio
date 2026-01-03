import { IBM_Plex_Mono } from 'next/font/google'

// Array of project objects containing key, name, description, and image source.
const projects = [
    {
        key: 1, 
        name: "Future Frame Image Segmentation", 
        description: "Designed a vision-inertial learning pipeline for autonomous " + 
        "vehicles that fuses RGB sequences and IMU motion data using LSTMs, FiLM " + 
        "conditioning, and ConvLSTMs, to predict drivable area at a future timestep.",
        src: "/images/experience_thumbnails/proj-img-1.png"
    }, 
    {
        key: 2, 
        name: "BitTorrent Client Implementation", 
        description: "Implemented a BitTorrent peer-to-peer client in Go, supporting " + 
        "TCP/UDP trackers, IPv6, tracker refresh, and concurrent downloading/uploading " + 
        "using goroutines and a producer - consumer model.",
        src: "/images/experience_thumbnails/proj-img-2.png"
    }, 
    {
        key: 3, 
        name: "Facial Recognition with Triplet Loss", 
        description: "Implemented a facial recognition system using triplet loss in " + 
        "PyTorch, achieving high accuracy on benchmark datasets.",
        src: "/images/experience_thumbnails/proj-img-3.png"
    }, 
    {
        key: 4, 
        name: "Neighborhood Graphs for Research", 
        description: "Developed an application to map significant relationships " + 
        "between published papers. Additionally created a paper ranking and " + 
        "relevance search algorithm.",
        src: "/images/experience_thumbnails/proj-img-4.png"
    }, 
]

// Load IBM Plex Mono font with specified weight and subsets.
const ibm_plex_mono = IBM_Plex_Mono({
    weight: ['700'],
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
})

export default function Projects() {
    return (
        <div>
            {/* Projects Section Header */}
            <h1 className={`text-xl text-gold ${ibm_plex_mono.className} underline pb-2`}>
                PROJECTS</h1>
            
            <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-6">
                {/* Map through projects array to render each project. */}
                {projects.map((project) => (
                    <div key={project.key}>
                        
                        <img className = "h-48 w-96 object-cover border border-slate-300 rounded-lg mb-2" 
                        src = {project.src}></img>
                        
                        <h2 className="text-md mb-1">{project.name}</h2>
                        <p className="text-xs text-slate-300">{project.description}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}