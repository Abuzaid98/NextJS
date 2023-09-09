import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <h1>This is Latest Next App By ABU ZAID</h1>
        <hr />
        <Link href="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/allUsers">Users</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/about">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <hr />
        {children}
      </body>
    </html>
  )
}
