export default function Contact(){
    return (
        <section>
          {/* <> Content </> */}
          <div>
            <h2>Wnat to work together?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos odit nesciunt laudantium nihil, vero ex temporibus amet veritatis possimus.</p>

            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
            </ul>
          </div>

          {/* <> Form </> */}
          <div>
            <form action="">
              <label htmlFor="">
                <span>Name : </span>
                <input type="text" />
              </label>
              <label htmlFor="">
                <span>Email : </span>
                <input type="email" />
              </label>
              <label htmlFor="">
                <span>Message : </span>
                <textarea name="" id=""></textarea>
              </label>

              <button>Send </button>
            </form>
          </div>
        </section>
    );
}