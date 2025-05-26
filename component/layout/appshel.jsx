import Navbar from "./navbar";
import Footer from "./footer";

export default function AppShell({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}