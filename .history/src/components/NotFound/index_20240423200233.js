import {Link} from "react-router-dom"

import "./index.css"

const NotFound=()=><div className="notFoundBg">
    <h1 className="pageNotHead">Page Not Found </h1>
    <img className="notFoundImage" src="https://img.freepik.com/free-vector/tiny-programmers-working-with-system-error-computer-monitor-internet-flat-vector-illustration-programming-it-digital-technology_74855-8632.jpg?w=900&t=st=1713882369~exp=1713882969~hmac=0e696678580c42db5c134d94112f0de5ec3b345737d8bbd16a515e5d30b4734a" alt="notFound"/>
    <Link to="/">
        <button className="type="button">Go to Home</button>
    </Link>
</div>

export default NotFound