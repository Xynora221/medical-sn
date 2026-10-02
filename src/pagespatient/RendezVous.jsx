import React, { useState } from "react";

function Appointment() {
  const [service, setService] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const services = [
    {
      name: "Médecine générale",
      icon: "bi-person-vcard-fill",
      description: "Consultation générale et suivi de santé",
    },
    {
      name: "Cardiologie",
      icon: "bi-heart-pulse-fill",
      description: "Cœur et système cardiovasculaire",
    },
    {
      name: "Pédiatrie",
      icon: "bi-balloon-heart-fill",
      description: "Soins et suivi médical des enfants",
    },
    {
      name: "Gynécologie",
      icon: "bi-gender-female",
      description: "Santé de la femme et suivi gynécologique",
    },
    {
      name: "Dermatologie",
      icon: "bi-person-badge-fill",
      description: "Peau, cheveux et ongles",
    },
    {
      name: "Ophtalmologie",
      icon: "bi-eye-fill",
      description: "Santé et troubles de la vision",
    },
  ];

  const doctors = [
    "Dr. Amadou Ndiaye",
    "Dr. Fatou Diop",
    "Dr. Mariama Fall",
  ];

  const times = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!service || !doctor || !date || !time) {
      alert("Veuillez compléter toutes les informations.");
      return;
    }

    alert(
      `Rendez-vous confirmé\n\nService : ${service}\nMédecin : ${doctor}\nDate : ${date}\nHeure : ${time}`
    );
  };

  return (
    <div className="min-vh-100 bg-light">

      {/* ==============================
          NAVBAR
      =============================== */}
      <nav className="navbar bg-white border-bottom sticky-top">
        <div className="container py-2">

          <a
            href="#"
            className="navbar-brand fw-bold text-success d-flex align-items-center"
          >
            <span
              className="bg-success text-white rounded-3 d-flex align-items-center justify-content-center me-2"
              style={{ width: "42px", height: "42px" }}
            >
              <i className="bi bi-heart-pulse-fill"></i>
            </span>

            MEDICAL
          </a>

          <div className="d-flex align-items-center gap-3">

            <button className="btn btn-light border position-relative">
              <i className="bi bi-bell-fill text-success"></i>
            </button>

            <div
              className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "42px", height: "42px" }}
            >
              <i className="bi bi-person-fill"></i>
            </div>

          </div>

        </div>
      </nav>


      {/* ==============================
          CONTENU
      =============================== */}
      <main className="container py-4 py-md-5">

        {/* Retour */}
        <div className="mb-4">

          <a
            href="#"
            className="text-decoration-none text-secondary"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Retour à l'accueil
          </a>

        </div>


        {/* ==============================
            TITRE
        =============================== */}
        <div className="mb-5">

          <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-3">
            ESPACE PATIENT
          </span>

          <h1 className="fw-bold display-6">
            Prendre un rendez-vous
          </h1>

          <p className="text-secondary mb-0">
            Choisissez le service, le médecin et l'horaire qui vous
            conviennent.
          </p>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="row g-4">


            {/* ====================================
                COLONNE PRINCIPALE
            ===================================== */}
            <div className="col-lg-8">


              {/* ==============================
                  ÉTAPE 1 — SERVICE
              =============================== */}
              <div className="card border-0 shadow-sm mb-4">

                <div className="card-body p-4">

                  <div className="d-flex align-items-center mb-4">

                    <div
                      className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "42px", height: "42px" }}
                    >
                      <strong>1</strong>
                    </div>

                    <div>
                      <h5 className="fw-bold mb-1">
                        Choisissez un service
                      </h5>

                      <p className="text-secondary small mb-0">
                        Quelle spécialité souhaitez-vous consulter ?
                      </p>
                    </div>

                  </div>


                  <div className="row g-3">

                    {services.map((item) => (

                      <div
                        className="col-12 col-md-6"
                        key={item.name}
                      >

                        <button
                          type="button"
                          onClick={() => setService(item.name)}
                          className={`btn text-start w-100 p-3 border rounded-3 ${
                            service === item.name
                              ? "border-success bg-success-subtle"
                              : "bg-white"
                          }`}
                        >

                          <div className="d-flex align-items-center">

                            <div
                              className={`rounded-3 d-flex align-items-center justify-content-center me-3 ${
                                service === item.name
                                  ? "bg-success text-white"
                                  : "bg-success-subtle text-success"
                              }`}
                              style={{
                                width: "52px",
                                height: "52px",
                              }}
                            >
                              <i
                                className={`bi ${item.icon} fs-4`}
                              ></i>
                            </div>

                            <div className="flex-grow-1">

                              <div className="fw-bold">
                                {item.name}
                              </div>

                              <div className="small text-secondary">
                                {item.description}
                              </div>

                            </div>

                            {service === item.name && (
                              <i className="bi bi-check-circle-fill text-success fs-5"></i>
                            )}

                          </div>

                        </button>

                      </div>

                    ))}

                  </div>

                </div>

              </div>


              {/* ==============================
                  ÉTAPE 2 — MÉDECIN
              =============================== */}
              <div className="card border-0 shadow-sm mb-4">

                <div className="card-body p-4">

                  <div className="d-flex align-items-center mb-4">

                    <div
                      className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "42px", height: "42px" }}
                    >
                      <strong>2</strong>
                    </div>

                    <div>
                      <h5 className="fw-bold mb-1">
                        Choisissez votre médecin
                      </h5>

                      <p className="text-secondary small mb-0">
                        Sélectionnez le professionnel de santé.
                      </p>
                    </div>

                  </div>


                  <label className="form-label fw-semibold">
                    Médecin
                  </label>

                  <select
                    className="form-select form-select-lg"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    disabled={!service}
                  >

                    <option value="">
                      {service
                        ? "Sélectionnez un médecin"
                        : "Choisissez d'abord un service"}
                    </option>

                    {doctors.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}

                  </select>

                </div>

              </div>


              {/* ==============================
                  ÉTAPE 3 — DATE ET HEURE
              =============================== */}
              <div className="card border-0 shadow-sm mb-4">

                <div className="card-body p-4">

                  <div className="d-flex align-items-center mb-4">

                    <div
                      className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "42px", height: "42px" }}
                    >
                      <strong>3</strong>
                    </div>

                    <div>
                      <h5 className="fw-bold mb-1">
                        Date et heure
                      </h5>

                      <p className="text-secondary small mb-0">
                        Choisissez votre créneau de consultation.
                      </p>
                    </div>

                  </div>


                  <div className="row g-4">

                    {/* DATE */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        <i className="bi bi-calendar3 text-success me-2"></i>
                        Date
                      </label>

                      <input
                        type="date"
                        className="form-control form-control-lg"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        disabled={!doctor}
                      />

                    </div>


                    {/* HEURE */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        <i className="bi bi-clock text-success me-2"></i>
                        Heure
                      </label>

                      <select
                        className="form-select form-select-lg"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        disabled={!date}
                      >

                        <option value="">
                          Choisissez une heure
                        </option>

                        {times.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}

                      </select>

                    </div>

                  </div>

                </div>

              </div>


              {/* ==============================
                  MOTIF
              =============================== */}
              <div className="card border-0 shadow-sm mb-4">

                <div className="card-body p-4">

                  <label className="form-label fw-bold">
                    Motif de la consultation
                    <span className="text-secondary fw-normal ms-2">
                      (facultatif)
                    </span>
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Décrivez brièvement la raison de votre consultation..."
                  ></textarea>

                  <div className="form-text">
                    Ces informations permettront au professionnel de santé
                    de mieux préparer votre consultation.
                  </div>

                </div>

              </div>


              {/* Bouton mobile */}
              <button
                type="submit"
                className="btn btn-success btn-lg w-100 d-lg-none"
              >
                <i className="bi bi-calendar-check-fill me-2"></i>
                Confirmer le rendez-vous
              </button>

            </div>


            {/* ====================================
                RÉCAPITULATIF
            ===================================== */}
            <div className="col-lg-4">

              <div
                className="card border-0 shadow-sm sticky-lg-top"
                style={{ top: "90px" }}
              >

                <div className="card-body p-4">

                  <div className="d-flex align-items-center mb-4">

                    <div
                      className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center me-3"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <i className="bi bi-clipboard2-check-fill fs-4"></i>
                    </div>

                    <div>
                      <h5 className="fw-bold mb-1">
                        Votre rendez-vous
                      </h5>

                      <small className="text-secondary">
                        Récapitulatif
                      </small>
                    </div>

                  </div>


                  {/* Service */}
                  <div className="border-bottom pb-3 mb-3">

                    <small className="text-secondary d-block mb-1">
                      SERVICE
                    </small>

                    <div className="fw-semibold">

                      {service ? (
                        <>
                          <i className="bi bi-hospital-fill text-success me-2"></i>
                          {service}
                        </>
                      ) : (
                        <span className="text-secondary">
                          Non sélectionné
                        </span>
                      )}

                    </div>

                  </div>


                  {/* Médecin */}
                  <div className="border-bottom pb-3 mb-3">

                    <small className="text-secondary d-block mb-1">
                      MÉDECIN
                    </small>

                    <div className="fw-semibold">

                      {doctor ? (
                        <>
                          <i className="bi bi-person-badge-fill text-success me-2"></i>
                          {doctor}
                        </>
                      ) : (
                        <span className="text-secondary">
                          Non sélectionné
                        </span>
                      )}

                    </div>

                  </div>


                  {/* Date */}
                  <div className="border-bottom pb-3 mb-3">

                    <small className="text-secondary d-block mb-1">
                      DATE
                    </small>

                    <div className="fw-semibold">

                      {date ? (
                        <>
                          <i className="bi bi-calendar3 text-success me-2"></i>
                          {date}
                        </>
                      ) : (
                        <span className="text-secondary">
                          Non sélectionnée
                        </span>
                      )}

                    </div>

                  </div>


                  {/* Heure */}
                  <div className="pb-3">

                    <small className="text-secondary d-block mb-1">
                      HEURE
                    </small>

                    <div className="fw-semibold">

                      {time ? (
                        <>
                          <i className="bi bi-clock-fill text-success me-2"></i>
                          {time}
                        </>
                      ) : (
                        <span className="text-secondary">
                          Non sélectionnée
                        </span>
                      )}

                    </div>

                  </div>


                  {/* Séparateur */}
                  <hr />


                  {/* Bouton */}
                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100"
                  >
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Confirmer le rendez-vous
                  </button>


                  <div className="text-center mt-3">

                    <small className="text-secondary">
                      <i className="bi bi-shield-check text-success me-1"></i>
                      Vos informations sont protégées.
                    </small>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </form>

      </main>

    </div>
  );
}

export default Appointment;