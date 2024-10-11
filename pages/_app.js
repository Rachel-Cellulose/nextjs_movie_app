import "../src/styles/globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/ThemeProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <Navbar movies={pageProps.movies || []} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
