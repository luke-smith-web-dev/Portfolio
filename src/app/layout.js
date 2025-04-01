import "./globals.css";

export const metadata = {
  title: "Luke Smith",
  description: "Multidisciplinary Designer based in Missoula, MT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`} id="top">
        <div data-scroll-container>{children}</div>
      </body>
    </html>
  );
}
