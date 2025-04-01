import "./globals.css";

export const metadata = {
  title: "Luke Smith",
  description: "Multidisciplinary Designer based in Missoula, MT",
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
