import React, { useState } from "react";

const AboutComponent = (props) => {
  const [selected, setSelected] = useState(null);

  function handleCheck(item) {
    setSelected(item);
  }

  return (
    <main>
      <section className="btp">
        <img
          src="../public/icon-close-modal.svg"
          alt=""
          onClick={props.handleModal}
          className="close-modal"
        />
        <h1 className="btp-title">Back this project</h1>
        <p className="btp-description">
          Want to support us in bringing MasterCraft Bamboo Monitor Riser out in
          the world?
        </p>

        {props.infotatments.map((item) => {
          return (
            <label
              onClick={() => handleCheck(item)}
              htmlFor={item.title}
              key={item.index}
              className={item.stock === 0 ? "A-no-stock" : "pledge-items"}
              style={{ pointerEvents: item.stock === 0 ? "none" : "auto" }}
            >
              <input type="radio" id={item.title} name="pledge" />
              <div className="texts">
                <div>
                  <h1 className="Atitle">{item.title}</h1>
                  {item.outsideModal && (
                    <>
                      <h1 className="Apledge">Pledge ${item.price} or more</h1>
                      <h1 className="Astock">
                        {item.stock} <span>left</span>
                      </h1>
                    </>
                  )}
                </div>
                <p>{item.description}</p>

                {selected === item && (
                  <>
                    <hr />

                    <div className="pledge-inputs">
                      <p>Enter your pledge</p>
                      <input type="text" />
                      <button>Continue</button>
                    </div>
                  </>
                )}
              </div>
            </label>
          );
        })}
      </section>
    </main>
  );
};

export default AboutComponent;
