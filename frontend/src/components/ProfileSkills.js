import React from 'react';

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
          <div
            className="mx-auto flex items-center border rounded-lg"
            style={{ 
              maxWidth: '70vw', 
              height: '40vh',
              borderRadius: '15px', // Redondear los bordes aquí
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Agregar sombra aquí
            }}
          >
            <div className="w-full h-full bg-white text-white p-6" style={{ borderRadius: '15px' }}>
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
                className="w-full px-4 py-2 font-bold text-white rounded-lg 
                bg-gray-900 transition-all duration-900 
                hover:bg-gradient-to-r hover:from-pink-500 hover:via-pink-900 hover:to-purple-800
                focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
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
