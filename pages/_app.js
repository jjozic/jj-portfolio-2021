import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={sourceSans.className}>
      <ThemeProvider defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
