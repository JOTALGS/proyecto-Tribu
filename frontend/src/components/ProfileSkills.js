'use client'
import React from 'react';

class ProfileSkills extends React.Component {
  render() {
    return (
      <section style={{ backgroundColor: '#eee' }}>
        <div className="py-2 w-full">
          <div className='w-full'>
            <div className='mx-auto flex items-center border' style={{ width: '70vw', height: '28vh' }}>
              <div className='border shadow-lg bg-green-800' style={{ width: '100vw', height: '100%', color: 'white' }}>
                <div className="m-4">
                  <h2 className='font-bold text-lg'>Competencias y habilidades</h2>
                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div className="placeholder" style={{ width: '100px', height: '100px', backgroundColor: 'lightgray', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Imagen 1</div>
                    <div className="placeholder" style={{ width: '100px', height: '100px', backgroundColor: 'lightgray', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Imagen 2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProfileSkills;
