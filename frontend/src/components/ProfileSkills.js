'use client'
import React, { useState } from 'react';

class ProfileSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <section style={{ backgroundColor: '#eee', fontFamily: 'Poppins, Open Sans, sans-serif' }}>
        <div className="py-3 w-full">
          <div className="w-full">
            <div className="mx-auto flex items-center border shadow-lg" style={{ width: '70vw', height: '40vh' }}>
              {/* contenedor padre */}
              <div className="w-full h-full">
                {/* div verde que ocupa todo el espacio */}
                <div className="bg-green-800 text-white p-6 w-full h-full">
                  <h2 className="font-bold text-lg">Competencias y habilidades</h2>
                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div
                      className="placeholder"
                      style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'lightgray',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img src="/imagen1.jpg" alt="Imagen 1" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />
                    </div>
                    <div
                      className="placeholder"
                      style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'lightgray',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img src="/imagen2.jpg" alt="Imagen 2" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />
                    </div>
                  </div>
                  <button
                    onClick={this.handleToggle}
                    className="font-bold mt-1 p-2 bg-transparent hover:bg-white hover:bg-opacity-25 transition-colors duration-300"
                  >
                    {isExpanded ? 'See less' : 'See more'}
                  </button>
                </div>
                {/* fin de la div verde */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProfileSkills;
