import React from 'react';

const Header: React.FC = () => (
  <header className="nhsuk-header" role="banner">
    <div className="nhsuk-width-container nhsuk-header__container app-width-container">
      <div className="nhsuk-header__logo">
        <a
          className="nhsuk-header__link nhsuk-header__link--service "
          href="/"
          aria-label="NHS digital service manual homepage"
        >
          <svg
            className="nhsuk-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 16"
          >
            <path className="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
            <path
              className="nhsuk-logo__text"
              d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"
            ></path>
          </svg>
          <span className="nhsuk-header__service-name">
            Digital service manual
          </span>
        </a>
      </div>

      <div className="nhsuk-header__content" id="content-header">
        <div className="nhsuk-header__menu">
          <button
            className="nhsuk-header__menu-toggle"
            id="toggle-menu"
            aria-controls="header-navigation"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>

        <div className="nhsuk-header__search">
          <button
            className="nhsuk-header__search-toggle"
            id="toggle-search"
            aria-controls="search"
            aria-label="Open search"
          >
            <svg
              className="nhsuk-icon nhsuk-icon__search"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
            </svg>
            <span className="nhsuk-u-visually-hidden">Search</span>
          </button>
        </div>
      </div>
    </div>

    <nav
      className="nhsuk-header__navigation app-header__navigation"
      id="header-navigation"
      role="navigation"
      aria-label="Primary navigation"
      aria-labelledby="label-navigation"
    >
      <div className="nhsuk-width-container app-width-container">
        <p className="nhsuk-header__navigation-title">
          <span id="label-navigation">Menu</span>
          <button className="nhsuk-header__navigation-close" id="close-menu">
            <svg
              className="nhsuk-icon nhsuk-icon__close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
            </svg>
            <span className="nhsuk-u-visually-hidden">Close menu</span>
          </button>
        </p>
        <ul className="nhsuk-header__navigation-list">
          <li className="nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile">
            <a className="nhsuk-header__navigation-link" href="/">
              Home
              <svg
                className="nhsuk-icon nhsuk-icon__chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>

          <li className="nhsuk-header__navigation-item">
            <a
              className="nhsuk-header__navigation-link"
              href="/service-standard"
            >
              NHS service standard
              <svg
                className="nhsuk-icon nhsuk-icon__chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>

          <li className="nhsuk-header__navigation-item">
            <a className="nhsuk-header__navigation-link" href="/design-system">
              Design system
              <svg
                className="nhsuk-icon nhsuk-icon__chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>

          <li className="nhsuk-header__navigation-item">
            <a className="nhsuk-header__navigation-link" href="/content">
              Content style guide
              <svg
                className="nhsuk-icon nhsuk-icon__chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>

          <li className="nhsuk-header__navigation-item">
            <a className="nhsuk-header__navigation-link" href="/accessibility">
              Accessibility
              <svg
                className="nhsuk-icon nhsuk-icon__chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>

          <li className="nhsuk-header__navigation-item">
            <a
              className="nhsuk-header__navigation-link"
              href="/community-and-contribution"
            >
              Community and contribution
              <svg
                className="nhsuk-icon nhsuk-icon__chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
