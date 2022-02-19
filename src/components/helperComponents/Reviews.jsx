import React from 'react';
import { FiSave } from 'react-icons/fi';

export const Reviews = ({appState}) => {
  return (
    <div className='review border border-primary'>
    <div className="card">
      <div className="card-body">
        <div className="reviewStyle">
          <h5 className="reviewTitle">
            <FiSave /> Review
          </h5>
          <div className="card-text" >
            
            <small>
              {`Available Products: ${appState.availableProducts.length}`}
            </small>
            <br />
            <small>{`Categories: ${appState.containers.length} `}</small>
            <br />
            {appState.containers.map(container => (
              <div className='categoryFollow' key={container.name}>
                <small>
                  {`Category ${container.name}: ${container.favItems.length}
                      ${container.favItems.length > 1 ? "products" : "product"}`}
                </small>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
};