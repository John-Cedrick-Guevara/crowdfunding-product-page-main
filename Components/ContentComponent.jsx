import React, { useState } from "react";

const ContentComponent = (props) => {
  // console.log(props.infotatments)

  const [isBookmarked, setIsBookmarked] = useState(false);



  return (
    <main>
      <section className="first-container">
        <img
          className="logo-mastercraft"
          src="../public/logo-mastercraft.svg"
          alt=""
        />
        <h1>mastercraft bamboo monitor riser</h1>
        <p>
          A beatiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="buttons">
          <button className="btp-btn" onClick={props.handleModal}>
            Back this project
          </button>
          <button
            className={isBookmarked ? "bookmarked" : "bookmark"}
            onClick={() => setIsBookmarked((prevstate) => !prevstate)}
          >
            <svg
              class="my-svg"
              width="56"
              height="56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <circle
                  fill={isBookmarked ? "hsl(176, 72%, 28%)" : "grey"}
                  cx="28"
                  cy="28"
                  r="28"
                />
                <path fill="white" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>

            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </button>
        </div>
      </section>

      <section className="info-numbers">
        <div className="numbers">
          <div>
            <h1>$89,914</h1>
            <p>of $100,000 backed</p>
          </div>
          <hr />
          <div>
            <h1>$5,007</h1>
            <p>total backers</p>
          </div>
          <hr />
          <div>
            <h1>56 days</h1>
            <p>days left</p>
          </div>
        </div>

        <div className="progressBar">
          <span className="progress"></span>
        </div>
      </section>

      <section className="about">
        <h1>About this project</h1>
        <p>
          The Master Craft Bamboo Monitor is a study and stylish platform that
          elevates your screen to a more comfortble viewing height. Placing your
          monitor at eye level has the potential to Improve your posture and
          make you more comfortable while at work, helping you stay focused on
          the task at hand.
        </p>
        <p>
          Featuring artisan craftmanship, the simplicity of design creates extra
          desk space below yout computer to allow notepads, pens, and USBsticks,
          to be stored under the stand.
        </p>

        {props.infotatments
          .filter((item) => item.outsideModal)
          .map((item) => {
            return (
              <section
                key={item.index}
                className={item.stock === 0 && "no-stock"}
              >
                <div>
                  <h1 className="title">{item.title}</h1>
                  <h1 className="pledge">Pledge ${item.price} or more</h1>
                </div>
                <p>{item.description}</p>
                <div>
                  <h1 className="stock">
                    {item.stock} <span>left</span>
                  </h1>
                  <button
                    className={
                      item.stock === 0 ? "no-stock-btn" : "on-stock-button"
                    }
                  >
                    {item.stock === 0 ? "Out of stock" : "Select Reward"}
                  </button>
                </div>
              </section>
            );
          })}
      </section>
    </main>
  );
};

export default ContentComponent;
