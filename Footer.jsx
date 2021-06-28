import React from 'react'

const Footer = () => {
    var currYear = new Date().getFullYear();
    return (
            <footer><p>Copyright &copy; {currYear}</p></footer>
    )
}

export default Footer