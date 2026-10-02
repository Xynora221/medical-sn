import {useNavigate} from "react-router-dom";
import React, { useState } from "react";


function PatientRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();/* c'est la fonction qui permet d'aller automatiquement a la page d'acceuil
  c'est un hook qui apporte des capacité que les fonctions de java script n'ont pas comme la mémoire*/

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est obligatoire.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est obligatoire.";
    }

    if (!formData.birthDate) {
      newErrors.birthDate = "La date de naissance est obligatoire.";
    }

    if (!formData.gender) {
      newErrors.gender = "Veuillez sélectionner votre sexe.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est obligatoire.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'adresse e-mail est obligatoire.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Adresse e-mail invalide.";
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est obligatoire.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Veuillez confirmer votre mot de passe.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Les mots de passe ne correspondent pas.";
    }

    if (!formData.terms) {
      newErrors.terms =
        "Vous devez accepter les conditions d'utilisation.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      console.log("Patient :", formData);

      alert("Compte créé avec succès !");
      navigate("/accueil");/*cela permet quand on valide l'inscription d'aller automatiquement a la page d'acceuil*/
    }, 1500);
  };

  return (
    <div className="bg-light min-vh-100 py-4">

      <div className="container">

        {/* =================================================
            EN-TÊTE DU SITE
        ================================================= */}
        <div className="position-relative mb-4">

  {/* Drapeau Sénégal, ancré en haut à droite */}
  <div className="position-absolute top-0 end-0">
    <img
      src="https://flagcdn.com/w80/sn.png"
      alt="Drapeau du Sénégal"
      title="Sénégal"
      style={{ width: '56px', height: 'auto', borderRadius: '4px' }}
    />
  </div>

  {/* Logo + titre, centrés */}
  <div className="d-flex flex-column align-items-center text-center pt-2">
    <div
      className="bg-success text-white rounded-circle p-3 d-flex align-items-center justify-content-center mb-2"
      style={{ width: '60px', height: '60px' }}
    >
      <span style={{ fontSize: '1.75rem' }}>⚕️</span>
    </div>
    <div className="fw-bold text-success fs-3">MEDICAL</div>
    <small className="text-secondary">Votre santé, notre priorité</small>
  </div>

</div>
        {/* =================================================
            CARTE PRINCIPALE
        ================================================= */}

        <div className="row justify-content-center">

          <div className="col-12 col-lg-9 col-xl-8">

            <div className="card border-0 shadow-lg rounded-4">

              <div className="card-body p-4 p-md-5">


                {/* =================================================
                    TITRE
                ================================================= */}

                <div className="text-center mb-5">

                  <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle p-3 mb-3">

                    <i className="bi bi-person-plus-fill fs-3"></i>

                  </div>

                  <h2 className="fw-bold text-dark">
                    Créer votre compte
                  </h2>

                  <p className="text-secondary mb-0">
                    Rejoignez Medical pour prendre vos
                    rendez-vous médicaux facilement.
                  </p>

                </div>


                <form onSubmit={handleSubmit}>


                  {/* =================================================
                      INFORMATIONS PERSONNELLES
                  ================================================= */}

                  <div className="mb-4">

                    <h5 className="fw-bold text-success mb-4">

                      <i className="bi bi-person-fill me-2"></i>

                      Informations personnelles

                    </h5>


                    <div className="row g-3">


                      {/* PRÉNOM */}

                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Prénom
                          <span className="text-danger ms-1">*</span>
                        </label>

                        <input
                          type="text"
                          name="firstName"
                          className={`form-control fs-6 ${
                            errors.firstName
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Ex : Khadija"
                          value={formData.firstName}
                          onChange={handleChange}
                        />

                        {errors.firstName && (
                          <div className="invalid-feedback">
                            {errors.firstName}
                          </div>
                        )}

                      </div>


                      {/* NOM */}

                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Nom
                          <span className="text-danger ms-1">*</span>
                        </label>

                        <input
                          type="text"
                          name="lastName"
                          className={`form-control fs-6 ${
                            errors.lastName
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Ex : Diop"
                          value={formData.lastName}
                          onChange={handleChange}
                        />

                        {errors.lastName && (
                          <div className="invalid-feedback">
                            {errors.lastName}
                          </div>
                        )}

                      </div>


                      {/* DATE DE NAISSANCE */}

                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Date de naissance
                          <span className="text-danger ms-1">*</span>
                        </label>

                        <input
                          type="date"
                          name="birthDate"
                          className={`form-control fs-6 ${
                            errors.birthDate
                              ? "is-invalid"
                              : ""
                          }`}
                          value={formData.birthDate}
                          onChange={handleChange}
                        />

                        {errors.birthDate && (
                          <div className="invalid-feedback">
                            {errors.birthDate}
                          </div>
                        )}

                      </div>


                      {/* SEXE */}

                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Sexe
                          <span className="text-danger ms-1">*</span>
                        </label>

                        <select
                          name="gender"
                          className={`form-select fs-6 ${
                            errors.gender
                              ? "is-invalid"
                              : ""
                          }`}
                          value={formData.gender}
                          onChange={handleChange}
                        >

                          <option value="">
                            Sélectionner
                          </option>

                          <option value="femme">
                            Femme
                          </option>

                          <option value="homme">
                            Homme
                          </option>

                          <option value="autre">
                            Autre
                          </option>

                        </select>

                        {errors.gender && (
                          <div className="invalid-feedback">
                            {errors.gender}
                          </div>
                        )}

                      </div>

                    </div>

                  </div>


                  <hr className="my-4" />


                  {/* =================================================
                      COORDONNÉES
                  ================================================= */}

                  <div className="mb-4">

                    <h5 className="fw-bold text-success mb-4">

                      <i className="bi bi-telephone-fill me-2"></i>

                      Coordonnées

                    </h5>


                    <div className="row g-3">


                      {/* TÉLÉPHONE */}

                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Numéro de téléphone
                          <span className="text-danger ms-1">*</span>
                        </label>

                        <div className="input-group">

                          <span className="input-group-text bg-white">
                            🇸🇳 +221
                          </span>

                          <input
                            type="tel"
                            name="phone"
                            className={`form-control fs-6 ${
                              errors.phone
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="77 000 00 00"
                            value={formData.phone}
                            onChange={handleChange}
                          />

                        </div>

                        {errors.phone && (
                          <div className="text-danger small mt-1">
                            {errors.phone}
                          </div>
                        )}

                      </div>


                      {/* EMAIL */}

                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Adresse e-mail
                          <span className="text-danger ms-1">*</span>
                        </label>

                        <input
                          type="email"
                          name="email"
                          className={`form-control fs-6 ${
                            errors.email
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="exemple@email.com"
                          value={formData.email}
                          onChange={handleChange}
                        />

                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email}
                          </div>
                        )}

                      </div>

                    </div>

                  </div>


                  <hr className="my-4" />


                  {/* =================================================
                      SÉCURITÉ
                  ================================================= */}

                  <div className="mb-4">

                    <h5 className="fw-bold text-success mb-4">

                      <i className="bi bi-shield-lock-fill me-2"></i>

                      Sécurité du compte

                    </h5>


                    <div className="row g-3">


                      {/* MOT DE PASSE */}

                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Mot de passe
                          <span className="text-danger ms-1">*</span>
                        </label>

                        <div className="input-group">

                          <input
                            type={
                              showPassword
                                ? "text"
                                : "password"
                            }
                            name="password"
                            className={`form-control fs-6 ${
                              errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="Minimum 8 caractères"
                            value={formData.password}
                            onChange={handleChange}
                          />

                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              setShowPassword(!showPassword)
                            }
                          >

                            <i
                              className={
                                showPassword
                                  ? "bi bi-eye-slash"
                                  : "bi bi-eye"
                              }
                            ></i>

                          </button>

                        </div>

                        {errors.password && (
                          <div className="text-danger small mt-1">
                            {errors.password}
                          </div>
                        )}

                        <div className="form-text small">
                          Au moins 8 caractères.
                        </div>

                      </div>


                      {/* CONFIRMATION */}

                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Confirmer le mot de passe
                          <span className="text-danger ms-1">*</span>
                        </label>

                        <div className="input-group">

                          <input
                            type={
                              showConfirmPassword
                                ? "text"
                                : "password"
                            }
                            name="confirmPassword"
                            className={`form-control fs-6 ${
                              errors.confirmPassword
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="Répétez votre mot de passe"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />

                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              setShowConfirmPassword(
                                !showConfirmPassword
                              )
                            }
                          >

                            <i
                              className={
                                showConfirmPassword
                                  ? "bi bi-eye-slash"
                                  : "bi bi-eye"
                              }
                            ></i>

                          </button>

                        </div>

                        {errors.confirmPassword && (
                          <div className="text-danger small mt-1">
                            {errors.confirmPassword}
                          </div>
                        )}

                      </div>

                    </div>

                  </div>


                  {/* =================================================
                      CONDITIONS
                  ================================================= */}

                  <div className="mb-4">

                    <div className="form-check">

                      <input
                        className={`form-check-input ${
                          errors.terms
                            ? "is-invalid"
                            : ""
                        }`}
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                      />

                      <label
                        className="form-check-label small"
                        htmlFor="terms"
                      >

                        J'accepte les{" "}

                        <a
                          href="#conditions"
                          className="text-success fw-semibold text-decoration-none"
                        >
                          conditions d'utilisation
                        </a>

                        {" "}et la{" "}

                        <a
                          href="#confidentialite"
                          className="text-success fw-semibold text-decoration-none"
                        >
                          politique de confidentialité
                        </a>

                        .

                      </label>

                    </div>

                    {errors.terms && (
                      <div className="text-danger small mt-1">
                        {errors.terms}
                      </div>
                    )}

                  </div>


                  {/* =================================================
                      BOUTON
                  ================================================= */}

                  <button
                    type="submit"
                    className="btn btn-success w-100 py-3 rounded-3 fw-semibold"
                    disabled={loading}
                  >

                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                        ></span>

                        Création du compte...
                      </>
                    ) : (
                      <>
                        Créer mon compte

                        <i className="bi bi-arrow-right ms-2"></i>
                      </>
                    )}

                  </button>


                </form>


                {/* =================================================
                    CONNEXION
                ================================================= */}

                <div className="text-center mt-4">

                  <span className="text-secondary small">
                    Vous avez déjà un compte ?
                  </span>

                  <a
                    href="/login"
                    className="text-success fw-bold text-decoration-none ms-1"
                  >
                    Se connecter
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="text-center mt-4">

          <small className="text-secondary">
            © 2026 Medical — Votre santé, notre priorité.
          </small>

        </div>

      </div>

    </div>
  );
}

export default PatientRegister;