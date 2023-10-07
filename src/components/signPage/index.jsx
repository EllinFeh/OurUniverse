import React from "react";

const SignPage = () => {
    return (
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
    );
}

export default SignPage;