import React from "react";
import styles from './card.css'

const counterCard = () => {
    
    return (
      <div className="container my-5">
        <div className="card">
          <div className="card-body d-flex justify-content-between">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="bg-light border rounded" style={{ width: '12.5%', height: '100px' }}>
                {/* Contenido del div, si es necesario */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default counterCard;