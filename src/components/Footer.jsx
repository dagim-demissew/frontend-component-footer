import React from 'react';
import '../_footer.scss';
import footerLogo from '../assets/logo.png';

import React from 'react';
import '../_footer.scss';
import footerLogo from '../assets/logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <div className="powered-area">
          <ul className="logo-list">
            <li className="powered-text">Powered by:</li>
            <li>
              <a href="https://afrolms.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={footerLogo}
                  alt="Afro LMS"
                  className="footer-logo"
                />
              </a>
            </li>
          </ul>
        </div>

        <nav className="nav-colophon" aria-label="About">
          <ol>
            <li><a href="/about">About</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
          </ol>
        </nav>
      </div>

      <div className="footer-bottom">
        <span className="copyright-site">
          © {year} My Open edX. All Rights Reserved.
        </span>

        <p className="edx-attribution">
          Powered by Open edX
        </p>
      </div>
    </footer>
  );
}
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <div className="powered-area">
          <ul className="logo-list">
            <li className="powered-text">Powered by:</li>
            <li>
              <a href="https://afrolms.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={footerLogo}
                  alt="Afro LMS"
                  className="footer-logo"
                />
              </a>
            </li>
          </ul>
        </div>

        <nav className="nav-colophon" aria-label="About">
          <ol>
            <li><a href="/about">About</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
          </ol>
        </nav>
      </div>

      <div className="footer-bottom">
        <span className="copyright-site">
          © {year} My Open edX. All Rights Reserved.
        </span>

        <p className="edx-attribution">
          Powered by Afro LMS
        </p>
      </div>
    </footer>
  );
}
