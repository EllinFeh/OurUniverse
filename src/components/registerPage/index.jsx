import React from "react";
import * as S from "./styled"

function RegisterPage() {
    return (
        <>

            <S.Flex>

                <div>
                    <h2 className="title title-primary">Viajando por aqui?</h2>
                    <S.Astrounaut>
                        <img className="AstronautImage" src="https://static.vecteezy.com/system/resources/previews/020/003/904/non_2x/astronaut-graphic-clipart-design-free-png.png" alt="" />
                    </S.Astrounaut>
                </div>
                
                <S.Column>
                    <div>
                        <p>Crie uma conta:</p>
                        <form>
                            <div className="inputs">
                                <S.Column>
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
                                </S.Column>

                                <button className="btn btn-primary">Registrar</button>
                            </div>
                        </form>
                    </div>
                </S.Column>

            </S.Flex>


        </>
    );
}

export default RegisterPage;
