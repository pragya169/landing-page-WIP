import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GDG Official Site",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav style={styles.nav}>
          {/* Add logo image to the left */}
          <div style={styles.logoContainer}>
            <img src="/assets/image2.png" alt="Logo" style={styles.logo} />
          </div>

          {/* Links are now aligned to the right */}
          <div style={styles.linksContainer}>
            <Link href="/home" style={styles.link}>Home</Link>
            <Link href="/team" style={styles.link}>Team</Link>
            <Link href="/blogs" style={styles.link}>Blogs</Link>
            <Link href="/projects" style={styles.link}>Projects</Link>
            <Link href="/events" style={styles.link}>Events</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between', // Ensures space between logo and links
    alignItems: 'center', // Vertically center the content
    padding: '1rem',
    background: 'transparent', // Makes the background transparent
    color: '#fff',
  },
  logoContainer: {
    flex: '0 1 auto', // Adjust logo sizing as needed
  },
  logo: {
    width: '240px', // Adjust the size of the logo
    height: 'auto',
  },
  linksContainer: {
    flex: '1 1 auto', // Space for links
    display: 'flex',
    justifyContent: 'flex-end', // Align links to the right
    gap: '2rem', // Space between the links
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.8rem',
  },
};
