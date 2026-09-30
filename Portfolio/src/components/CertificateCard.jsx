function CertificateCard({ title, issuer, date, credentialUrl, icon, color }) {
  return (
    <div className="cert-card">

      <div className="cert-card__accent" style={{ background: color }} />

      <div className="cert-card__body">

        <span className="cert-card__icon" aria-hidden="true">{icon}</span>

        <h3 className="cert-card__title">{title}</h3>

        <div className="cert-card__meta">
          <span className="cert-card__issuer">{issuer}</span>
          <span className="cert-card__date">📅 {date}</span>
        </div>
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card__link"
            aria-label={`View ${title} certificate`}
          >
            View Certificate →
          </a>
        )}

      </div>
    </div>
  );
}

export default CertificateCard;
