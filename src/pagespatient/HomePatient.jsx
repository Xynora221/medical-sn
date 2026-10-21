import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-vh-100 bg-light">

      {/* =========================
          NAVBAR MOBILE
      ========================== */}
      <nav className="navbar navbar-dark bg-success d-lg-none">
        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menuMobile"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <span className="navbar-brand fw-bold">
            <i className="bi bi-heart-pulse-fill me-2"></i>
            MEDICAL
          </span>

          <button className="btn btn-success border-0">
            <i className="bi bi-bell-fill fs-5"></i>
          </button>

        </div>
      </nav>


      {/* =========================
          MENU MOBILE
      ========================== */}
      <div
        className="offcanvas offcanvas-start bg-success text-white"
        tabIndex="-1"
        id="menuMobile"
      >

        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold">
            <i className="bi bi-heart-pulse-fill me-2"></i>
            MEDICAL
          </h5>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">

          <p className="small opacity-75">
            ESPACE PATIENT
          </p>

          <ul className="nav nav-pills flex-column gap-2">

            <li className="nav-item">
              <Link className="nav-link active bg-white text-success" to="/accueil">
                <i className="bi bi-house-door-fill me-3"></i>
                Accueil
              </Link> {/* ici on a remplacer le lien a par un lien, responsive link pour rendre le bouton acceuil responsive*/}
            </li>
            <li>
              <Link className="nav-link text-white" to="/rendez-vous">
                <i className="bi bi-calendar2-check-fill me-3"></i>
                Rendez-vous
              </Link>
            </li>

            <li>
              <Link className="nav-link text-white" to="/Téléconsultation">
                <i className="bi bi-camera-video-fill me-3"></i>
                Téléconsultation
              </Link>
            </li>

            <li>
              <Link className="nav-link text-white" to="/Services de l'hôpital"> {/*pas d'espace entre le "/" et le nom*/}
                <i className="bi bi-hospital-fill me-3"></i>
                Services de l'hôpital
              </Link>
            </li>

            <li>
              <Link className="nav-link text-white"to="/Mon dossier médical">
                <i className="bi bi-file-earmark-medical-fill me-3"></i>
                Mon dossier médical
              </Link>
            </li>

            <li>
              <Link className="nav-link text-white" to="/Plan de l'hôpital">
                <i className="bi bi-signpost-2-fill me-3"></i>
                Plan de l'hôpital
              </Link>
            </li>

            <li>
              <Link className="nav-link text-white" to="/Informations">
                <i className="bi bi-info-circle-fill me-3"></i>
                Informations
              </Link>
            </li>

            <li>
              <Link className="nav-link text-white" to="/Paramètres">
                <i className="bi bi-gear-fill me-3"></i>
                Paramètres
              </Link>
            </li>

          </ul>

          <hr />

          <button className="btn btn-outline-light w-100">
            <i className="bi bi-box-arrow-right me-2"></i>
            Déconnexion
          </button>

        </div>
      </div>


      {/* =========================
          STRUCTURE PRINCIPALE
      ========================== */}
      <div className="container-fluid">

        <div className="row">


          {/* =========================
              SIDEBAR DESKTOP
          ========================== */}
          <aside className="col-lg-2 d-none d-lg-flex flex-column bg-success text-white min-vh-100 p-4">

            {/* Logo */}
            <div className="mb-5">

              <h4 className="fw-bold">
                <i className="bi bi-heart-pulse-fill me-2"></i>
                MEDICAL
              </h4>

              <small className="opacity-75">
                ESPACE PATIENT
              </small>

            </div>


            {/* Menu */}
            <ul className="nav nav-pills flex-column gap-2 flex-grow-1">

              <li className="nav-item">
                <Link 
                  to="/accueil"
                  className="nav-link active bg-white text-success"
                >
                  <i className="bi bi-house-door-fill me-3"></i>
                  Accueil
                </Link>
              </li>   

              <li className="nav-item">
                <Link to="/rendez-vous" className="nav-link text-white">
                  <i className="bi bi-calendar2-check-fill me-3"></i>
                  Rendez-vous
                </Link>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-camera-video-fill me-3"></i>
                  Téléconsultation
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-hospital-fill me-3"></i>
                  Services de l'hôpital
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-file-earmark-medical-fill me-3"></i>
                  Mon dossier médical
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-signpost-2-fill me-3"></i>
                  Plan de l'hôpital
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-info-circle-fill me-3"></i>
                  Informations
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-gear-fill me-3"></i>
                  Paramètres
                </a>
              </li>

            </ul>


            {/* Déconnexion */}
            <button className="btn btn-outline-light w-100">
              <i className="bi bi-box-arrow-right me-2"></i>
              Déconnexion
            </button>

          </aside>


          {/* =========================
              CONTENU
          ========================== */}
          <main className="col-lg-10 px-3 px-md-4 px-lg-5 py-4">


            {/* =========================
                HEADER
            ========================== */}
            <div className="d-flex justify-content-between align-items-center mb-4">

              <div>

                <p className="text-secondary mb-1">
                  Bienvenue dans votre espace santé
                </p>

                <h2 className="fw-bold mb-0">
                  Bonjour Khadija 👋
                </h2>

              </div>

              <div className="d-none d-md-flex align-items-center gap-3">

                <button className="btn btn-light border position-relative">
                  <i className="bi bi-bell-fill fs-5 text-success"></i>

                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2
                  </span>
                </button>

                <div className="d-flex align-items-center">

                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "45px", height: "45px" }}>
                    <i className="bi bi-person-fill fs-4"></i>
                  </div>

                </div>

              </div>

            </div>


            {/* =========================
                MESSAGE BIENVENUE
            ========================== */}
            <div className="card border-0 shadow-sm mb-4 bg-success text-white">

              <div className="card-body p-4">

                <div className="row align-items-center">

                  <div className="col-md-8">

                    <span className="badge bg-white text-success mb-3">
                      ESPACE PATIENT
                    </span>

                    <h3 className="fw-bold">
                      Votre santé, simplement.
                    </h3>

                    <p className="mb-0">
                      Prenez rendez-vous, consultez vos informations
                      médicales et trouvez facilement les services de
                      l'hôpital.
                    </p>

                  </div>

                  <div className="col-md-4 text-center d-none d-md-block">

                    <i className="bi bi-heart-pulse-fill"
                      style={{ fontSize: "90px" }}>
                    </i>

                  </div>

                </div>

              </div>

            </div>


            {/* =========================
                ACTIONS PRINCIPALES
            ========================== */}
            <div className="d-flex justify-content-between align-items-center mb-3">

              <h4 className="fw-bold mb-0">
                Que souhaitez-vous faire ?
              </h4>

            </div>


            <div className="row g-4 mb-5">


              {/* Rendez-vous */}
              <div className="col-12 col-sm-6 col-xl-3">

                <div className="card h-100 border-0 shadow-sm">

                  <div className="card-body p-4">

                    <div className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center mb-4"
                      style={{ width: "60px", height: "60px" }}>

                      <i className="bi bi-calendar2-check-fill fs-3"></i>

                    </div>

                    <h5 className="fw-bold">
                      Prendre un rendez-vous
                    </h5>

                    <p className="text-secondary small">
                      Choisissez un médecin, une spécialité et
                      une date selon vos disponibilités.
                    </p>

                    <button className="btn btn-success w-100">
                      Prendre rendez-vous
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                  </div>

                </div>

              </div>


              {/* Téléconsultation */}
              <div className="col-12 col-sm-6 col-xl-3">

                <div className="card h-100 border-0 shadow-sm">

                  <div className="card-body p-4">

                    <div className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center mb-4"
                      style={{ width: "60px", height: "60px" }}>

                      <i className="bi bi-camera-video-fill fs-3"></i>

                    </div>

                    <h5 className="fw-bold">
                      Téléconsultation
                    </h5>

                    <p className="text-secondary small">
                      Consultez un professionnel de santé à distance
                      depuis votre téléphone.
                    </p>

                    <button className="btn btn-success w-100">
                      Consulter
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                  </div>

                </div>

              </div>


              {/* Services */}
              <div className="col-12 col-sm-6 col-xl-3">

                <div className="card h-100 border-0 shadow-sm">

                  <div className="card-body p-4">

                    <div className="bg-success-subtle text-success rounded-3 d-fl ex align-items-center justify-content-center mb-4"
                      style={{ width: "60px", height: "60px" }}>

                      <i className="bi bi-hospital-fill fs-3"></i>

                    </div>

                    <h5 className="fw-bold">
                      Services de l'hôpital
                    </h5>

                    <p className="text-secondary small">
                      Trouvez facilement la cardiologie, la maternité,
                      la radiologie et les autres services.
                    </p>

                    <button className="btn btn-success w-100">
                      Voir les services
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                  </div>

                </div>

              </div>


              {/* Dossier médical */}
              <div className="col-12 col-sm-6 col-xl-3">

                <div className="card h-100 border-0 shadow-sm">

                  <div className="card-body p-4">

                    <div className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center mb-4"
                      style={{ width: "60px", height: "60px" }}>

                      <i className="bi bi-file-earmark-medical-fill fs-3"></i>

                    </div>

                    <h5 className="fw-bold">
                      Mon dossier médical
                    </h5>

                    <p className="text-secondary small">
                      Retrouvez vos informations, consultations,
                      prescriptions et résultats.
                    </p>

                    <button className="btn btn-success w-100">
                      Mon dossier
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                  </div>

                </div>

              </div>

            </div>


            {/* =========================
                DEUXIÈME PARTIE
            ========================== */}
            <div className="row g-4">


              {/* Prochain rendez-vous */}
              <div className="col-lg-7">

                <div className="card border-0 shadow-sm h-100">

                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                      <h5 className="fw-bold mb-0">
                        Prochain rendez-vous
                      </h5>

                      <span className="badge bg-success-subtle text-success">
                        Confirmé
                      </span>

                    </div>

                    <div className="d-flex align-items-center gap-3">

                      <div className="bg-success text-white rounded-3 d-flex align-items-center justify-content-center"
                        style={{ width: "60px", height: "60px" }}>

                        <i className="bi bi-calendar-check-fill fs-4"></i>

                      </div>

                      <div>

                        <h6 className="fw-bold mb-1">
                          Consultation médicale
                        </h6>

                        <p className="text-secondary mb-1">
                          <i className="bi bi-person-badge-fill me-2"></i>
                          Médecin généraliste
                        </p>

                        <p className="text-secondary mb-0">
                          <i className="bi bi-clock-fill me-2"></i>
                          Demain — 10:30
                        </p>

                      </div>

                    </div>

                    <hr />

                    <button className="btn btn-outline-success">
                      Voir les détails
                    </button>

                  </div>

                </div>

              </div>


              {/* Services à proximité */}
              <div className="col-lg-5">

                <div className="card border-0 shadow-sm h-100">

                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center mb-3">

                      <h5 className="fw-bold mb-0">
                        Trouver un service
                      </h5>

                      <i className="bi bi-geo-alt-fill text-success fs-4"></i>

                    </div>

                    <p className="text-secondary small">
                      Besoin de trouver un service dans l'hôpital ?
                    </p>

                    <div className="bg-success-subtle rounded-3 p-4 text-center">

                      <i className="bi bi-signpost-2-fill text-success fs-1"></i>

                      <h6 className="fw-bold mt-3">
                        Plan de l'hôpital
                      </h6>

                      <p className="small text-secondary">
                        Localisez rapidement les différents services
                        et découvrez où ils se trouvent.
                      </p>

                      <button className="btn btn-success">
                        Voir le plan
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =========================
                INFORMATIONS
            ========================== */}
            <div className="alert alert-success border-0 mt-4 d-flex align-items-center">

              <i className="bi bi-info-circle-fill fs-4 me-3"></i>

              <div>
                <strong>Besoin d'aide ?</strong>
                <br />
                <span className="small">
                  Consultez les informations de l'hôpital ou contactez
                  notre assistance.
                </span>
              </div>

            </div>


            {/* Footer */}
            <div className="text-center text-secondary small mt-5">

              <p>
                © 2026 MEDICAL — Votre espace santé
              </p>

            </div>

          </main>

        </div>

      </div>

    </div>
  );
}

export default App;