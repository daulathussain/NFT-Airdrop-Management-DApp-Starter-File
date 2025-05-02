import "../styles/globals.css";

// Initialize QueryClient
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
