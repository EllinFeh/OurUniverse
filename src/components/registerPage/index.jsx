import React from "react";
import * as S from "./styled"

function RegisterPage() {
    return (
        <>

            <S.Flex>
            <svg xmlns="http://www.w3.org/2000/svg" width="243" height="191" viewBox="0 0 243 191" fill="none">
<path d="M239.798 106.06C236.64 96.0673 231.416 87.3526 224.492 80.2646C215.624 70.6201 203.841 63.9968 190.599 61.0919C183.918 32.0428 165.21 11.1274 138.607 3.34221C109.695 -5.25634 76.1669 3.10981 55.1511 24.1414C36.6864 42.6167 30.6125 68.0637 37.7798 95.1378C13.4841 100.831 1.45774 120.236 0.121478 138.712C-1.13135e-07 139.99 0 141.152 0 142.314C0 164.159 14.9418 188.676 48.2269 191H174.321C191.571 191 208.092 184.842 220.726 173.803C240.527 157.187 247.816 131.275 239.798 106.06Z" fill="#DAD5B7"/>
</svg>
                <S.Column>
                    <div>
                        
                        <h2 className="title title-primary">Viajando por aqui?</h2>
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
