import "./globals.css";
import Link from 'next/link'

// Layout component that wraps all pages. It includes the navigation links. 
export default function RootLayout( {children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className = "bg-dusk text-slate-100">
        <div className = "py-8 px-5 max-w-2xl mx-auto xl:max-w-3xl">

          {/* Header with navigation links */}
          <div className = "">
              <ul className = "flex gap-5 text-md">
                <li><Link href="/" className = "font-bold">@shelke</Link></li>
                <li><Link href="/notes">notes</Link></li>
                <li><a href="contact.html">projects</a></li>
                <li><a href="about.html">blog</a></li>
              </ul>
              <hr className = "mt-2 mb-5"></hr>
          </div>

          {/* Main content for the current page. */}
          {children}

        </div>
      </body>
    </html>
  );
}
