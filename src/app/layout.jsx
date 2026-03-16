import { fontVariables } from "@/fonts/index";
import { Env } from "@/utils/env";
import "./globals.css";
import RootWrapper from "./root-provider";
import { AppContextProvider } from "@/context/AppContext";
import Footer from "@/components/Sections/Footer/Footer";
import Modal from "@/components/Sections/Modal/Modal";
import BookSession from "@/components/Sections/BookSession/BookSession";
import Navbar from "@/components/Sections/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontVariables}>
        <RootWrapper>
          <AppContextProvider>
            <Navbar />
            {children}
            <Footer />
            <Modal bodyClassName={""}>
              <BookSession />
            </Modal>
          </AppContextProvider>
        </RootWrapper>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "Zainab ",
    template: "%s | Zainab",
  },
  description: "Starter Templates",
  openGraph: {
    url: Env.site_url,
    images: [{ url: `${Env.site_url}og.jpg`, alt: "Next Starter" }],
  },
};
