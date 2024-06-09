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
      <section className="bg-white py-8" style={{ fontFamily: 'Poppins, Open Sans, sans-serif' }}>
        <div className="container mx-auto">
          <div className="mx-auto flex items-center border" style={{ maxWidth: '70vw', height: '40vh' }}>
            <div className="w-full h-full bg-white text-white p-6">
              <h2 className="font-bold text-lg text-black">Skills</h2>
              <div className="flex justify-around">
                <div className="placeholder rounded-full w-24 h-24 bg-gray-300 flex justify-center items-center">
                  <img src="/imagen1.jpg" alt="Imagen 1" className="max-w-full max-h-full rounded-full" />
                </div>
                <div className="placeholder rounded-full w-24 h-24 bg-gray-300 flex justify-center items-center">
                  <img src="/imagen2.jpg" alt="Imagen 2" className="max-w-full max-h-full rounded-full" />
                </div>
              </div>
              <button
                onClick={this.handleToggle}
                className="font-bold mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                {isExpanded ? 'See less' : 'See more'}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProfileSkills;
