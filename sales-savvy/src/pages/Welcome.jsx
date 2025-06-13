import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Welcome() {
  return (
    <section className="hero">
      {/* simple text-logo */}
      <h1 className="brand">
        Sales <span>Savvy</span>
      </h1>

      {/* one-liner + elevator pitch */}
      <p className="tagline">
        Shop smarter, not harder. Sales&nbsp;Savvy brings hand-picked deals,
        lightning-fast delivery and a personalised cart—all in one place.
        Sign up free and start exploring today!
      </p>

      {/* big call-to-action blocks */}
      <div className="cta-blocks">
        <NavLink to="/sign_up" className="cta-card">
          <span className="cta-text">Create account</span>
        </NavLink>
		<br></br>
        <NavLink to="/sign_in" className="cta-card">
          <span className="cta-text">Sign&nbsp;in</span>
        </NavLink>
      </div>
    </section>
  );
}
