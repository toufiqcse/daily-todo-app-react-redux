import Footer from "../Footer/Footer"
import TopNav from "../TopNav/TopNav"

const Layout = ({ children }) => {
    return (
        <div className="">
            <TopNav />
            <div className=" px-5">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout