import { link } from "fs"
import { IBM_Plex_Mono } from 'next/font/google'

const cs_coursework = [
    {   key: 0,
        name: "Data Structures and Algorithms", 
        code: "CMSC132", 
        link: "" 
    },
    {   key: 1,
        name: "Discrete Structures", 
        code: "CMSC250", 
        link: ""
    },
    {   key: 2,
        name: "Computer Systems", 
        code: "CMSC216", 
        link: ""
    },
    {   key: 3,
        name: "Programming Languages",
        code: "CMSC330",
        link: "https://docs.google.com/document/d/1pUO9_KJ62nC9yKBOnGstnWA1YzEjYMzy2GZbJoDRZWk/edit?usp=sharing"
    }, 
    {   key: 4,
        name: "Algorithms",
        code: "CMSC351",
        link: ""
    }, 
    {   key: 5,
        name: "Introduction to Data Science",
        code: "CMSC320",
        link: "https://docs.google.com/document/d/1gQCpalSwJg1zevyd2BrQNKEUlizENtKYSUnfSO3nm-Q/edit?usp=sharing"
    }, 
    {   key: 6,
        name: "Advanced Algorithms",
        code: "CMSC451",
        link: ""
    }, 
    {   key: 7,
        name: "Artificial Intelligence",
        code: "CMSC421",
        link: "https://docs.google.com/document/d/1de9AHgHZ7iLOK71yhmd-_QrmGxinTnqroD3OlP5ChAM/edit?usp=sharing"
    }, 
    {   key: 8,
        name: "Machine Learning",
        code: "CMSC422",
        link: ""
    }, 
    {   key: 9,
        name: "Advanced Data Structures",
        code: "CMSC420",
        link: ""
    }, 
    {   key: 10,
        name: "Compilers",
        code: "CMSC430",
        link: "https://docs.google.com/document/d/1ZsMnvdgsYvOAiTguUYz_2tG45HCERgI2FAFjgosSiXU/edit?usp=sharing"
    }, 
    {   key: 11,
        name: "Networks",
        code: "CMSC417",
        link: ""
    }, 
    {   key: 12,
        name: "Physical Sensing in Machine Learning",
        code: "CMSC818V",
        link: ""
    }, 
]

const robotics_coursework = [
    {   key: 0,
        name: "Robot Operating System (ROS)",
        code: "ENAE450",
        link: ""
    }, 
    {   key: 1,
        name: "Robotics and Perception Planning",
        code: "CMSC477",
        link: ""
    }, 
]

const math_coursework = [
    {   key: 0,
        name: "Numerical Methods and Techniques",
        code: "AMSC460",
        link: ""
    }, 
    {   key: 1,
        name: "Differential Equations",
        code: "MATH246",
        link: ""
    }, 
    {   key: 2,
        name: "Applied Probability and Statistics I",
        code: "STAT400",
        link: ""
    }, 
    {   key: 3,
        name: "Applied Probability and Statistics II",
        code: "STAT401",
        link: ""
    }, 
    {   key: 4,
        name: "Applied Linear Algebra",
        code: "MATH401",
        link: ""
    }, 
    {   key: 5,
        name: "Probability Theory",
        code: "STAT410",
        link: ""
    }, 
    {   key: 6,
        name: "Advanced Calculus I (Real Analysis)",
        code: "MATH410",
        link: ""
    }, 
    {   key: 7,
        name: "Number Theory",
        code: "MATH406",
        link: ""
    }, 
    {   key: 8,
        name: "Signal Processing and Fourier Analysis",
        code: "MATH416",
        link: ""
    }, 
]

// Importing the IBM Plex Mono font from Google Fonts using Next.js font optimization.
const ibm_plex_mono = IBM_Plex_Mono({
    weight: ['700'],
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
})

// The Coursework component renders the notes page with coursework information.
// It includes sections for Computer Science, Mathematics, and Robotics coursework,
// displaying course names, codes, and links to notesheets where available.
export default function Coursework() {
  return (
    
    <div>
      
      {/* Header Section */}
      <h1 className = "text-3xl font-bold pb-2">Notes</h1>
      <p className="text-sm text-justify text-sunset">These are notes I took at the University 
        of Maryland, College Park. I didn’t take notes for every course, but for the ones included 
        here, the notes are complete and should be sufficient to understand the full scope of the 
        material covered.</p>

      {/* Spacing Divider */}
      <div className = "my-8"></div>

      {/* Coursework for Computer Science Major */}
      <h1 className={`text-xl text-gold ${ibm_plex_mono.className} underline pb-2`}>COMPUTER SCIENCE</h1>
      <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1 px-2">

            {/* Here, we map through the coursework array to display each course. */}
            {/* Courses with links to corresponding notesheets will be underlined. */}
            {cs_coursework.map((course) => (
                <div key = {course.key} className = "flex flex-row justify-between">
                    
                    {/* Left Side: Course Name with Conditional Link */}
                    {(course.link != "") ? 
                        <a className="text-sm text-slate-300 underline decoration-dotted" 
                            href = {course.link}>{course.name}</a> : 
                        <a className="text-sm text-slate-300" href = {course.link}>
                            {course.name}</a>
                    }
                    
                    {/* Right Side: Course Code */}
                    <div><p className="text-sm text-slate-300 ml-2 font-mono">{course.code}</p></div>

                </div>
            ))}
            
          </div>
      </div>

      {/* Spacing Divider */}
      <div className = "my-10"></div>

      {/* Coursework for Mathematics Major */}
      <h1 className={`text-xl text-gold ${ibm_plex_mono.className} underline pb-2`}>MATHEMATICS</h1>
      <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1 px-2">

            {math_coursework.map((course) => (
                <div key = {course.key} className = "flex flex-row justify-between">
                    {(course.link != "") ? 
                        <a className="text-sm text-slate-300 underline decoration-dotted" 
                        href = {course.link}>{course.name}</a> : 
                        <a className="text-sm text-slate-300" href = {course.link}>
                            {course.name}</a>
                    }
                    
                    <div><p className="text-sm text-slate-300 ml-2 font-mono">{course.code}</p></div>
                </div>
            ))}
            
          </div>
      </div>

      {/* Spacing Divider */}
      <div className = "my-10"></div>

      {/* Coursework for Robotics Minor */}
      <h1 className={`text-xl text-gold ${ibm_plex_mono.className} underline pb-2`}>ROBOTICS</h1>
      <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1 px-2">

            {robotics_coursework.map((course) => (
                <div key = {course.key} className = "flex flex-row justify-between">
                    {(course.link != "") ? 
                        <a className="text-sm text-slate-300 underline decoration-dotted" 
                        href = {course.link}>{course.name}</a> : 
                        <a className="text-sm text-slate-300" href = {course.link}>
                            {course.name}</a>
                    }
                    
                    <div><p className="text-sm text-slate-300 ml-2 font-mono">{course.code}</p></div>
                </div>
            ))}
            
          </div>
      </div>

      {/* Spacing Divider */} 
      <div className = "my-10"></div>
    </div>
    
  );
}
