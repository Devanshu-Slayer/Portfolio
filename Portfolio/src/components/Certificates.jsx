import { certificates } from '../data/certificates';
import CertificateCard from './CertificateCard';

function Certificates() {
  return (
    <section id="certificates" className="certificates section section--alt">
      <div className="container">

        <div className="section-heading">
          <h2>My <span>Certificates</span></h2>
          <p>Courses and certifications I've completed</p>
        </div>

        <div className="certificates__grid">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} {...cert} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;
