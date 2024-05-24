import { useState } from 'react'
import React from 'react'
import { category,data } from './Data'
import './section3.css'


const Section3 = () => {

  const [record, setRecord] = useState(data);

  const FilterData = item => {
    let datas = data.filter(val => val.category === item);
    setRecord(datas);
  };

  return (
    <>
      <div className="container">
        <div className="row">
        <div class="col-12 d-flex mt-5 mb-5">
            <div class="col-3">
              {
                category.map(val => {
                  return (
                    <div className="cet nav-item">
                      <button
                        key={val.id}
                        onClick={() => FilterData(val.name)} className="btn"> {val.name}
                      </button>
                    </div>
                  );
                })
              }
              <div class="col-3">
                <img
                  class="ih d-block"
                  src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/product-banner.jpg"
                />
              </div>
            </div>
            <div class="col-9 d-flex flex-wrap">
              {
                record.map(val => {
                  return (
                    <div className="col-3">
                      <div className=" card w-100 opa" style={{ width: "18rem" }}>
                        <img className="p-2 rounded" src={val.img} />
                        <div className="card-body">
                          <p className="card-text d-flex justify-content-center">
                            {val.category}
                          </p>
                          <h5 className="card-title text-center d-flex justify-content-center">
                            {val.name}
                          </h5>
                          <div className="d-flex mt-4 justify-content-center align-items-center">
                            <p className="price">
                              ${val.price}
                            </p>
                            <p className="rprice">
                              ${val.rprice}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3
