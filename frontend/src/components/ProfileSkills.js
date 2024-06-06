'use client'
import React from 'react';
import Head from 'next/head';



class ProfileSkills extends React.Component {
  render() {
    return (
      <section style={{ backgroundColor: '#eee', fontFamily: 'Poppins, Open Sans, sans-serif' }}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="py-3 w-full">
          <div className="w-full">
            <div className="mx-auto flex items-center border shadow-lg" style={{ width: '70vw', height: '40vh' }}>
              {/* contenedor padre */}
              <div className="w-full h-full">
                {/* ddiv verde que ocupa todo el espacio */}
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
