import logo from "./logo.svg";
import "./App.css";
import background from "./images/image3.jpg";
import mainLogo from "./images/sevenhills_icon.png"; // with import
import imageTwo from "./images/sevenhills_icon.png"; // with import

import logoWhite from "./images/sevenhills_icon_white.png"; // with import

function App() {
  return (
    <div className="App">
      <section className="sh-intro-section">
        <img className="header-info-logo" src={mainLogo} />
        <section>
          <section className="profile-text-container">
            <span className="profile-text profile-text-left">
              Company Profile
            </span>
            <span className="profile-divider"></span>
            <span className="profile-text">Excavation Demolition</span>
          </section>
        </section>
      </section>

      <section className="sh-section-2">
        <section className="sh-section-2-container">
          <article className="sh-section-2-article">
            <label className="sh-section-2-article-text">
              Founded by Gyaneshwar Raikanti in 2007 , Seven Hills Constructions
              is a proprietorship firm based out of Mumbai. We have commissioned
              projects to the tune of over 15 Crores within a short period.
            </label>

            <label className="sh-section-2-article-text">
              We provide outstanding service and the results you expect on every
              job, No matter what the size of your project is, we can get it
              done to your specifications.
            </label>

            <label className="sh-section-2-article-text">
              Our extensive excovation experience coupled with our state of the
              art equipment will ensure that your project goes smoothly and
              safely.
            </label>

            <label className="sh-section-2-article-text">
              Whether it's residential or commerçial project, you can count on
              Seven Hills Constructions to get it done right the first time,
              everytime. By staying ahead of technology and continually
              educating our employees.
            </label>

            <label className="sh-section-2-article-text">
              We provide the safest and most cost effective site solution to any
              project.
            </label>
          </article>
          <article className="sh-section-2-article-heading">
            we undertake Projects for Escavation and demoliton{" "}
          </article>
        </section>

        <section className="sh-logo-footer-container">
          <img className="header-info-logo-white" src={logoWhite} />
        </section>
      </section>

      <section className="sh-section-3">
        <section className="sh-section-3-container">
          <label className="sh-section-3-article-text">
            Our Vision is to be most preferred firm for excavation & demolition
            in India, We envisage our workforce to deliver high quality output
            within the given timeframe.
          </label>
          <label className="sh-section-3-article-text">
            Our Mission remains to be an integral part of all awarded projects
            and ensure fruition to the fullest of our potential. To invest in a
            workforce of top quality and maintain high standards of Safety and
            Execution.
          </label>
        </section>
        <section className="sh-logo-footer-container">
          <img className="header-info-logo-white" src={logoWhite} />
        </section>
      </section>

      <section className="sh-section-2 sh-section-4">
        <section className="sh-section-2-container sh-section-4-container">
          <article className="sh-section-2-article">
            <label className="sh-section-2-article-text sh-section-4-heading">
              The people who work at Seven Hills share our vision and values.
            </label>

            <label className="sh-section-2-article-text sh-section-4-article-text">
              We’re driven by a strong team of Financial, Legal and Liaison
              experts to see through every project we undertake.
            </label>

            <label className="sh-section-2-article-text sh-section-4-article-text">
              Our workforce consists of able Engineers, Project Managers, Site
              Supervisors, Machine Operators, Mechanics, Drivers and Field Staff
              to ensure seamless operations.
            </label>

            <label className="sh-section-2-article-text sh-section-4-article-text">
              Our Extended Workforces include Contractors, Manpower and Material
              Suppliers who believe in us and our company values.
            </label>
          </article>
        </section>

        <section className="sh-logo-footer-container">
          <img className="header-info-logo-white" src={logoWhite} />
        </section>
      </section>
    </div>
  );
}

export default App;
