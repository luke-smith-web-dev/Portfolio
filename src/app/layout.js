import "./globals.css";

export const metadata = {
  title: "Luke Smith",
  description: "Multidisciplinary Designer based in Missoula, MT",
  ogImage: "/images/og-image.png",
  twitterImage: "/images/twitter-image.png",
  openGraph: {
    title: "Luke Smith",
    description: "Multidisciplinary Designer based in Missoula, MT",
    url: "https://luke-smith.design",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luke Smith - Multidisciplinary Designer based in Missoula, MT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lukesmithdesign",
    creator: "@lukesmithdesign",
    images: [
      {
        url: "/images/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Luke Smith - Multidisciplinary Designer based in Missoula, MT",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet"
      ></link>
      <body className={`antialiased`} id="top">
        <div data-scroll-container>{children}</div>
      </body>
    </html>
  );
}
