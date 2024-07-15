import {Header} from "./header.jsx";
import {Footer} from "./footer.jsx";

export const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}