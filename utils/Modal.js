import { useState } from "react";
import { Modal as BootstrapModal, Button, Alert } from "react-bootstrap";
import styles from "./modal.module.css";

export default function Modal({ isOpen, closeModal }) {
	const alphaRegex = /^[a-zA-Zéêëèîïâäàçù ,.'-]{2,70}$/;
	const emailRegex = /^([a-zA-Z0-9.-_--]+[@]{1}[a-zA-Z0-9.-_--]+[.]{1}[a-z]{2,3}){0,90}$/;
	//const numericRegex = /^(0|[1-9][0-9]*)$/;

	const today = new Date().toISOString().slice(0, 10);
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [birthdate, setBirthdate] = useState(today);
	const [howCanWeHelp, sethowCanWeHelp] = useState("");
	const [checkbox1, setCheckbox1] = useState(false);
	const [comment, setComment] = useState("");
	const [siteType, setSiteType] = useState("");

	const [firstNameErr, setFirstNameErr] = useState("");
	const [lastNameErr, setLastNameErr] = useState("");
	const [emailErr, setEmailErr] = useState("");
	const [birthdateErr, setBirthdateErr] = useState("");
	const [howCanWeHelpsErr, sethowCanWeHelpsErr] = useState("");
	const [conditionErr, setConditionErr] = useState("");

	const [firstNameFocused, setFirstNameFocused] = useState(false);
	const [lastNameFocused, setLastNameFocused] = useState(false);
	const [emailFocused, setEmailFocused] = useState(false);
	const [howCanWeHelpFocused, sethowCanWeHelpFocused] = useState(false);
	const [commentFocused, setCommentFocused] = useState(false);

	const handleFocus = (focused, setFocused) => {
		if (!focused) {
			setFocused(true);
		}
	};

	const handleBlur = (validateFunc, setFocused) => {
		setFocused(false);
		validateFunc();
	};

	const handleFirstNameFocus = () => handleFocus(firstNameFocused, setFirstNameFocused);
	const handleFirstNameBlur = () => handleBlur(validateFirstName, setFirstNameFocused);

	const handleLastNameFocus = () => handleFocus(lastNameFocused, setLastNameFocused);
	const handleLastNameBlur = () => handleBlur(validateLastName, setLastNameFocused);

	const handleEmailFocus = () => handleFocus(emailFocused, setEmailFocused);
	const handleEmailBlur = () => handleBlur(validateEmail, setEmailFocused);

	const handlehowCanWeHelpFocus = () => handleFocus(howCanWeHelpFocused, sethowCanWeHelpFocused);
	const handlehowCanWeHelpBlur = () => handleBlur(tournamenthowCanWeHelp, sethowCanWeHelpFocused);

	const handleRadioClick = (e) => {
		const radio = e.target;
		radio.classList.add(styles.clicked);
		setSiteType(e.target.value);
		setTimeout(() => {
			radio.classList.remove(styles.clicked);
		}, 400);
	};

	const handleOptionClick = (e) => {
		if (howCanWeHelpsErr) {
			sethowCanWeHelpsErr("");
		}
		sethowCanWeHelp(e.target.value);
	};

	const validateFirstName = () => {
		if (firstName.length < 2) {
			setFirstNameErr("");
			return false;
		}
		let testFirstName = alphaRegex.test(firstName);
		if (testFirstName === false) {
			setFirstNameErr("Veuillez entrer 2 lettres ou plus svp 🙏");
		} else {
			setFirstNameErr("");
		}
		return testFirstName;
	};

	const validateLastName = () => {
		if (lastName.length < 2) {
			setLastNameErr("");
			return false;
		}
		let testLastName = alphaRegex.test(lastName);
		if (testLastName === false) {
			setLastNameErr("Veuillez saisir votre nom svp 🙏");
		} else {
			setLastNameErr("");
		}
		return testLastName;
	};

	const validateEmail = () => {
		if (email.length < 2) {
			setEmailErr("");
			return false;
		}
		let testEmail = emailRegex.test(email);
		if (testEmail === false) {
			setEmailErr("Veuillez saisir votre Email svp 🙏");
		} else {
			setEmailErr("");
		}
		return testEmail;
	};

	const validateBirthdate = () => {
		if (birthdate === "") {
			setBirthdateErr("Veuillez saisir votre date de naissance svp 🙏");
		} else {
			setBirthdateErr("");
		}
		return birthdate !== "";
	};

	const tournamenthowCanWeHelp = () => {
		if (howCanWeHelp === "") {
			sethowCanWeHelpsErr("Vous devez choisir une option svp 🙏");
			return false;
		} else {
			sethowCanWeHelpsErr("");
			return true;
		}
	};

	const readAndApprove = () => {
		if (!checkbox1) {
			setConditionErr("Vous devez vérifier que vous acceptez les termes et conditions svp 🙏");
			return false;
		} else {
			setConditionErr("");
			return true;
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		let isFirstNameValid = false;
		let isLastNameValid = false;
		let isEmailValid = false;

		if (firstName === "") {
			setFirstNameErr("Veuillez entrer votre prénom svp 🙏");
		} else {
			isFirstNameValid = validateFirstName();
		}

		if (lastName === "") {
			setLastNameErr("Veuillez entrer votre nom svp 🙏");
		} else {
			isLastNameValid = validateLastName();
		}

		if (email === "") {
			setEmailErr("Veuillez entrer votre email svp 🙏");
		} else {
			isEmailValid = validateEmail();
		}

		const ishowCanWeHelpValid = tournamenthowCanWeHelp();
		const isConditionValid = readAndApprove();
		if (isFirstNameValid && isLastNameValid && isEmailValid && ishowCanWeHelpValid && isConditionValid) {
			const res = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ firstName, lastName, email, birthdate, howCanWeHelp, siteType, comment }),
			});
			if (res.ok) {
				console.log("E-mail envoyé avec succès");
				setAlertMessage("E-mail envoyé avec succès");
				setShowAlert(true);
				setTimeout(() => setShowAlert(false), 7000);
				closeModal();
			} else {
				console.log("Erreur lors de l'envoi de l'e-mail");
				setAlertMessage("Erreur lors de l'envoi de l'e-mail");
				setShowAlert(true);
			}
		}
	};

	return (
		<>
			{isOpen && <div className={styles.modalOverlay}></div>}
			{showAlert && (
				<Alert variant="success" className={styles.myAlert} onClose={() => setShowAlert(false)} dismissible>
					<Alert.Heading>Info</Alert.Heading>
					<p>{alertMessage}</p>
				</Alert>
			)}
			<BootstrapModal show={isOpen} onHide={closeModal} aria-labelledby="modalTitle" aria-describedby="modalDescription">
				<BootstrapModal.Header closeButton>
					<BootstrapModal.Title id="modalTitle">Contactez nous</BootstrapModal.Title>
				</BootstrapModal.Header>
				<BootstrapModal.Body>
					<form onSubmit={handleSubmit}>
						<p id="modalDescription" className="sr-only">
							Veuillez remplir le formulaire ci-dessous pour nous contacter.
						</p>

						<div className={styles.divInput}>
							<label htmlFor="first">Prénom</label>
							<br />
							<input
								className={`${
									firstNameErr && firstNameFocused
										? styles.orangeBorder
										: firstNameErr
										? styles.redBorder
										: firstNameFocused
										? styles.focus
										: styles.greenBorder
								}  ${styles.inputWidth}`}
								id="first"
								type="text"
								value={firstName}
								minLength="2"
								aria-required="true"
								aria-labelledby="first"
								aria-describedby="firstNameErr"
								onChange={(e) => {
									setFirstName(e.target.value);
									validateFirstName();
								}}
								onFocus={handleFirstNameFocus}
								onBlur={handleFirstNameBlur}
								placeholder="Prénom"
							/>
							<span className={styles.errorMessage} id="firstNameErr">
								{firstNameErr}
							</span>
						</div>
						<div className={styles.divInput}>
							<label htmlFor="last">Nom</label>
							<br />
							<input
								className={`${
									lastNameErr && lastNameFocused
										? styles.orangeBorder
										: lastNameErr
										? styles.redBorder
										: lastNameFocused
										? styles.focus
										: styles.greenBorder
								} ${styles.inputWidth}`}
								id="last"
								type="text"
								value={lastName}
								minLength="2"
								aria-required="true"
								aria-labelledby="last"
								aria-describedby="lastNameErr"
								onChange={(e) => {
									setLastName(e.target.value);
									validateLastName();
								}}
								onFocus={handleLastNameFocus}
								onBlur={handleLastNameBlur}
								placeholder="Nom"
							/>
							<span className={styles.errorMessage} id="lastNameErr">
								{lastNameErr}
							</span>
						</div>
						<div className={styles.divInput}>
							<label htmlFor="emailInput" id="emailInputLabel">
								Email
							</label>
							<br />
							<input
								className={`${
									emailErr && emailFocused ? styles.orangeBorder : emailErr ? styles.redBorder : emailFocused ? styles.focus : styles.greenBorder
								}  ${styles.inputWidth}`}
								id="emailInput"
								type="email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									validateEmail();
								}}
								onFocus={handleEmailFocus}
								onBlur={handleEmailBlur}
								aria-required="true"
								aria-describedby="emailErr"
								placeholder="Email"
							/>
							<span className={styles.errorMessage} id="emailErr">
								{emailErr}
							</span>
						</div>

						<div className={styles.divInput}>
							<label htmlFor="date">Date</label> <br />
							<input
								type="date"
								value={birthdate}
								className={styles.dateInput}
								id="date"
								aria-describedby="birthdateErr"
								onChange={(e) => setBirthdate(e.target.value)}
								onBlur={validateBirthdate}
							/>
							<span id="birthdateErr">{birthdateErr}</span>{" "}
						</div>

						<div className={styles.divInput}>
							<label htmlFor="siteType0" id="siteType">
								Quel type de site souhaitez-vous ?
							</label>
							<br />

							<div className={styles.radioContainer} role="radiogroup" aria-labelledby="siteType">
								{[
									"Site Vitrine",
									"Site E-commerce",
									"Site Éducatif",
									"Portail Web",
									"Portfolio",
									"Site Mobile",
									"Site Multilingue",
									"Landing Page",
									"Wordpress",
									"Joomla",
								].map((name, index) => (
									<div key={index} className={styles.radioItem}>
										<input type="radio" name="siteType" id={`siteType${index}`} value={name} onClick={handleRadioClick} className={styles.radio} />
										<label htmlFor={`siteType${index}`}>{name}</label>
									</div>
								))}
							</div>
						</div>

						<div>
							<label id="howCanWeHelpLabel" htmlFor="howCanWeHelpSelect">
								Que pouvons-nous faire pour vous ?
							</label>
							<select
								id="howCanWeHelpSelect"
								value={howCanWeHelp}
								onChange={handleOptionClick}
								onFocus={handlehowCanWeHelpFocus}
								onBlur={handlehowCanWeHelpBlur}
								aria-labelledby="howCanWeHelpLabel"
								aria-describedby="howCanWeHelpsErr"
								className={`${howCanWeHelpsErr ? styles.redBorder : howCanWeHelpFocused ? styles.focus : styles.greenBorder} ${styles.select}`}
							>
								<option value="">Que pouvons nous faire pour vous ?</option>
								<option value="Creation">Création d’un site web</option>
								<option value="Optimisation">Optimiser votre référencement (SEO)</option>
								<option value="Design">Apporter un nouveau Look (Design)</option>
								<option value="Campagne">Créer une campagne Sociale Network</option>
								<option value="Refonte">Refondre votre site web actuel</option>
								<option value="NewFonction">Rajouter de nouvelles fonctions Web</option>
								<option value="TechSupport">Besoin d’un support technique</option>
								<option value="Audit">Audit de performances de votre site</option>
								<option value="Other">Autre</option>
							</select>
						</div>
						<br />
						<span className={styles.errorMessage} id="howCanWeHelpsErr">
							{howCanWeHelpsErr}
						</span>

						<div className={styles.divInput}>
							<label htmlFor="comment">Commentaires</label>
							<br />
							<textarea
								id="comment"
								aria-labelledby="comment"
								value={comment}
								onChange={(e) => setComment(e.target.value)}
								onFocus={() => setCommentFocused(true)}
								onBlur={() => setCommentFocused(false)}
								className={`${commentFocused ? styles.focus : styles.greenBorder}  ${styles.inputWidth} ${styles.textarea}`}
								placeholder="Vos commentaires..."
							></textarea>
						</div>
					</form>
				</BootstrapModal.Body>
				<BootstrapModal.Footer className={styles.footerColumn}>
					<div className={styles.checkboxContainer}>
						<input
							type="checkbox"
							id="conditions"
							className={`${styles.customCheckbox} ${styles.checkbox}`}
							checked={checkbox1}
							onChange={(e) => setCheckbox1(e.target.checked)}
						/>

						<label htmlFor="conditions">J&apos;accepte les termes et conditions</label>
					</div>
					<span className={styles.errorMessage}>{conditionErr}</span>
					<div className={styles.buttonContainer}>
						<button type="submit" className={styles.submitButton} onClick={handleSubmit}>
							Envoyer
						</button>

						<Button variant="secondary" onClick={closeModal}>
							Fermer
						</Button>
					</div>
				</BootstrapModal.Footer>
			</BootstrapModal>
		</>
	);
}
