import Layout from "@/components/Layout/Layout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </Provider>
  );
}
