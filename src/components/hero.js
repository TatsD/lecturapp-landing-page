import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "1.7rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>LECTURAPP</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Aplicación para mejorar las habilidades en compresión lectora.
    </p>
    <Button
      onClick={() => {
        window.open("http://lecturapp.digital/app/lecturapp.apk", "_blank")
      }}
    >
      DESCARGAR
    </Button>
    <div style={{ width: `237px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 3% round 2% 5%)" }}>
        <MockupContent />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
