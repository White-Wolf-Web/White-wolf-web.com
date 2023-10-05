"use client";
import React, { useState } from "react";
import Modal from "@/utils/Modal";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function MyNavbar() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<div className={styles.navbar}>
		<a href="/" className={`${styles.navbarMyStyle} ${styles.accueil}`} aria-label="Acceuil" title="Acceuil">
		<FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} alt="Acceuil" />
		</a>
		<div className={styles.navDropdown}>
		  <a className={styles.navbarMyStyle}>Services</a>
		  <div className={styles.dropdownContent}>
			<a href="/articles/creation-site-web">Création de site web</a>
			<a href="/articles/referencement-seo-google">SEO & Référencement</a>
			<a href="/articles/reseaux-sociaux">Réseaux Sociaux</a>
			<a href="/portfolio">Mon Portfolio</a>
			<a href="/faq">FAQ</a>
		  </div>
		</div>
		<a href="/blog" className={styles.navbarMyStyle}>Blog</a>
		<a onClick={openModal} className={styles.navbarMyStyle}>Contact</a>
		<Modal isOpen={modalIsOpen} closeModal={closeModal} />
	  </div>
		/*
		<Navbar className={styles.navbar}>
			<Container fluid>
				<Navbar.Toggle aria-controls="navbarSupportedContent" />
				<Navbar.Collapse id="navbarSupportedContent">
					<Nav className="me-auto mb-2 mb-lg-0 navColumn">
						<Nav.Link href="/" className={`${styles.navbarMyStyle} ${styles.accueil}`} aria-label="Acceuil" title="Acceuil" >
							<FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} alt="Acceuil" />
						</Nav.Link>

						<NavDropdown title={<span className={styles.navbarMyStyle}>Services</span>} id="basic-nav-dropdown">
							<NavDropdown.Item href="/articles/creation-site-web">Création de site web</NavDropdown.Item>
							<NavDropdown.Item href="/articles/referencement-seo-google">SEO & Référencement</NavDropdown.Item>
							<NavDropdown.Item href="/articles/reseaux-sociaux">Réseaux Sociaux</NavDropdown.Item>
							<NavDropdown.Item href="/portfolio">Mon Portfolio</NavDropdown.Item>
							<NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link href="/blog" className={styles.navbarMyStyle}>
							Blog
						</Nav.Link>

						<Nav.Link  onClick={openModal} className={styles.navbarMyStyle}>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
			<Modal isOpen={modalIsOpen} closeModal={closeModal} />
		</Navbar> */
	);
}
