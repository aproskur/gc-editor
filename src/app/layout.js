import './globals.css'

export const metadata = {
  title: 'Cubica Game Editor',
  description: 'Редактор игр',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>     
    </html>
  )
}
