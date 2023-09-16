function App() {
  return (
    <div>


      <div className="container-main">

      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</svg>
      
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">Novo aqui?</h2>
          </div>
      
          <div className="second-column">
            <p className="title title-second">Crie uma conta:</p>


            <form className="form">

              <div className="inputs">
            
              <label className="label-input" for="">
                <i className="far fa-user icon-modify"></i>
                <input type="text" placeholder="Nome" />
              </label>

              <label className="label-input" for="">
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input" for="">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Senha" />
              </label>


              <button id="signin" className="btn btn-primary">Registrar</button>
              </div>

            </form>
          </div>
        </div>








        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">Bem-vindo(a) de volta!</h2>
         
          </div>

          <div className="second-column">

            <p className="description description-second">Que bom te ver novamente! <br /> Acesse sua conta:</p>
            
            <form className="form">
              <div className="inputs">

              
              <div className="inputs">
                <label className="label-input" for="">
                  <i className="far fa-envelope icon-modify"></i>
                  <input type="email" placeholder="Email" />
                </label>

                <label className="label-input" for="">
                  <i className="fas fa-lock icon-modify"></i>
                  <input type="password" placeholder="Senha" />
                </label>
              </div>

              <a className="password" href="/">Esqueceu sua senha?</a>
              <button id="signup" className="btn btn-primary">Login</button>
              </div>

            </form>
          </div>
        </div>
      </div>

      <script src="js/app.js"></script>


    </div>


  );
}

export default App;
