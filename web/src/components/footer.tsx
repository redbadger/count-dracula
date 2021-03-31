import React from 'react';

const Footer: React.FC = () => (
  <footer role="contentinfo">
    <div className="nhsuk-footer" id="nhsuk-footer">
      <div className="nhsuk-width-container app-width-container">
        <h2 className="nhsuk-u-visually-hidden">Support links</h2>
        <ul className="nhsuk-footer__list app-footer__list">
          <li className="nhsuk-footer__list-item">
            <a
              className="nhsuk-footer__list-item-link"
              href="/accessibility-statement"
            >
              Accessibility statement
            </a>
          </li>
          <li className="nhsuk-footer__list-item">
            <a className="nhsuk-footer__list-item-link" href="/cookie-policy">
              Cookie policy
            </a>
          </li>
          <li className="nhsuk-footer__list-item">
            <a className="nhsuk-footer__list-item-link" href="/get-in-touch">
              Get in touch
            </a>
          </li>
          <li className="nhsuk-footer__list-item">
            <a
              className="nhsuk-footer__list-item-link"
              href="/service-manual-team"
            >
              Service manual team
            </a>
          </li>
          <li className="nhsuk-footer__list-item">
            <a className="nhsuk-footer__list-item-link" href="/site-map">
              Site map
            </a>
          </li>
          <li className="nhsuk-footer__list-item">
            <a
              className="nhsuk-footer__list-item-link"
              href="/terms-and-conditions"
            >
              Terms and conditions
            </a>
          </li>
          <li className="nhsuk-footer__list-item">
            <a className="nhsuk-footer__list-item-link" href="/whats-new">
              What's new
            </a>
          </li>
          <li className="nhsuk-footer__list-item">
            <a className="nhsuk-footer__list-item-link" href="/your-privacy">
              Your privacy
            </a>
          </li>
        </ul>
        <p className="nhsuk-footer__copyright">© Crown copyright</p>
      </div>
    </div>
    <div className="app-ogl-footer">
      <div className="nhsuk-width-container app-width-container">
        <p className="app-ogl-footer--text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="17"
            width="41"
            role="presentation"
            focusable="false"
            viewBox="0 0 483.2 195.7"
          >
            <path
              fill="currentColor"
              d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
            ></path>
          </svg>
          All content is available under the{' '}
          <a
            className="nhsuk-footer__list-item-link"
            href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
            rel="license"
          >
            Open Government Licence v3.0
          </a>
          , except where otherwise stated.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
