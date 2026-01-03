import Projects from "./projects"
import Experiences from "./experiences";

// Home page of the portfolio website. 
export default function Home() {
  return (
    <div>

      {/* Header Section for the home page. */}
      <h1 className = "text-3xl font-bold pb-2">Aditya Shelke</h1>
      <p className="text-sm text-sunset md:w-md">Studying computer science and mathematics at the 
        University of Maryland, College Park. Minor in robotics and autonomous systems. </p>
      <div className = "my-8"></div>
      
      <Experiences></Experiences>
      <div className = "my-10"></div>

      <Projects></Projects>
      <div className = "my-10"></div>
    
    </div>
  );
}
