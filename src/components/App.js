import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function Links() {
  return (
    <div className='links'>
      <div className="links__lg">
        <span className='links__circle'>
          <Link to="/"><i className="fa fa-home fa-2x" aria-hidden="true"></i></Link>
        </span>
        <span className='links__circle'>
          <Link to="/about"><i className="fa fa-info fa-2x" aria-hidden="true"></i></Link>
        </span>
        <span className='links__circle'>
          <Link to="/projects"><i className="fa fa-product-hunt fa-2x" aria-hidden="true"></i></Link>
        </span>
        <span className='links__circle'>
          <Link to="/tech"><i className="fa fa-language fa-2x" aria-hidden="true"></i></Link>
        </span>
      </div>
      <div className="links-right">
        <span className='links__circle links__resume'>
          <Link to="/resume"><i className="fa fa-file-text fa-2x" aria-hidden="true"></i></Link>
        </span>
        <span className='links__circle'>
          <a target="_blank" href="https://www.linkedin.com/in/joel-legg-279a5b58/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </span>
        <span className='links__circle'>
          <a href="mailto:joellegg@bellsouth.net"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
        </span>
        <span className='links__circle'>
          <a target="_blank" href="https://github.com/joellegg"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
        </span>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <div className='container__button_content'>
          <Links />
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
