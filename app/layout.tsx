import './globals.css'
// import localFont from '@next/font/local'

// const mona = localFont({ src: './fonts/Mona-Sans.woff2', variable: '--font-mona', weight: '200 900'});
// const hubot = localFont({ src: './fonts/Hubot-Sans.woff2', variable: '--font-hubot', weight: '200 900'});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
