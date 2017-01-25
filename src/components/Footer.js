import React from 'react';

function renderFooterColumns(data){
  return data.map( (col) => {
      return (
        <div className="footer-col" key={col.title}>
          <h2 className="footer-title">{col.title}</h2>
          {col.links.map((link) => { return <p key={link} className="footer-link">{link}</p> })}
        </div>
      )
  })
}

export default (props) => {
  const { data } = props
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        {renderFooterColumns(data)}
        <div className="footer-col newsletter">
          <h2 className="footer-title">Newsletter</h2>
          <input type="text" className="form-control" placeholder="Your email address"/>
          <button type="submit" className="btn-xs btn-default subscribe-btn">Sign up</button>
          <p className="newsletter-text">Sign up now to be the first to hear about new and featured films, film culture news and exclusive offers from Fandor.</p>
        </div>
      </div>
      <div className="copyright">
        <span className="copyright-text">©2010-2017 Our Film Festival, Inc.</span>
        <span className="footer-link copyright-link">Privacy</span>
        <span className="footer-link copyright-link">Terms</span>
        <span className="footer-link copyright-link">Sitemap</span>
      </div>
    </div>
  )
}
