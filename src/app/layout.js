
import "./globals.css";



export const metadata = {
  title: "Movie App",
  description: "netflix like Movie App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
