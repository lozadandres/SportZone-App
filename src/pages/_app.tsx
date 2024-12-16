import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'remixicon/fonts/remixicon.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
