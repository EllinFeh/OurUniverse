import React from "react";
import * as S from "./styled"

function RegisterPage() {
    return (
        <>

            <S.Flex>
                <div className="Content-One">

                <div className="content-title">
                    <h2> Bem-vindo </h2>
                    <span> ao nosso universo! </span> <br />

                    
                    <svg className="system-solar" width="311" height="312" viewBox="0 0 511 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M389.625 1.11432C389.304 1.63332 387.547 6.24532 385.721 11.3643C382.085 21.5553 382.209 21.4363 369.34 26.9693C365.258 28.7243 364.09 29.7203 364.091 31.4483C364.092 33.2583 365.528 34.3033 371.841 37.0893C376.103 38.9703 380.306 41.1123 381.18 41.8503C382.055 42.5883 384.251 47.4853 386.06 52.7333C388.857 60.8483 389.648 62.2303 391.346 61.9733C392.887 61.7393 394.149 59.4203 396.871 51.8163L400.398 41.9623L409.822 37.5883C417.105 34.2073 419.171 32.8123 418.918 31.4423C418.712 30.3283 415.183 28.0403 409.417 25.2803L400.243 20.8903L397.07 11.7803C393.237 0.777317 391.432 -1.80968 389.625 1.11432ZM112.444 31.9443C106.712 32.8463 104.874 40.8663 109.49 44.8373C112.984 47.8423 116.551 47.8003 119.635 44.7153C122.603 41.7483 122.772 38.3063 120.115 34.9283C117.996 32.2343 115.866 31.4063 112.444 31.9443ZM27.1425 67.9203C21.3455 83.8573 22.7245 82.0453 12.9685 86.5513C4.3035 90.5543 2.0565 92.5363 3.9915 94.4713C4.5235 95.0033 8.7005 97.1223 13.2745 99.1803L21.5905 102.922L25.1595 112.565C27.1225 117.869 29.2635 122.743 29.9165 123.396C31.6485 125.128 33.4925 122.795 35.6265 116.17C39.7565 103.344 40.0285 102.998 49.0035 99.2063C62.0155 93.7073 62.0205 92.3463 49.0555 86.4243C42.6565 83.5013 39.8655 81.6703 39.2695 80.0023C38.8115 78.7203 37.1875 74.1833 35.6615 69.9203C32.1285 60.0483 30.1725 59.5893 27.1425 67.9203ZM208.59 70.5623C196.616 74.3303 187.947 83.0263 184.549 94.6793L183.089 99.6893L174.839 101.534C109.011 116.257 52.5025 150.689 23.6285 193.67C-12.6075 247.608 -6.8785 310.642 38.8375 361.027L46.0645 368.992L44.5805 373.198C34.2425 402.501 52.9825 433.507 83.8815 438.224C97.9315 440.368 113.865 435.214 124.312 425.144L129.221 420.412L142.406 424.865C165.701 432.733 193.697 438.612 220.59 441.284C236.097 442.824 274.216 442.815 289.59 441.268C417.891 428.35 510.09 355.763 510.09 267.67C510.09 221.853 485.271 179.381 439.262 146.466C394.815 114.668 333.811 95.3653 271.78 93.4703L251.969 92.8653L249.594 88.1763C245.896 80.8783 237.273 73.6163 229.43 71.1933C222.069 68.9203 214.536 68.6923 208.59 70.5623ZM472.881 75.1583C468.309 76.5373 464.361 79.9793 462.176 84.4933C459.616 89.7803 459.545 95.3873 461.971 100.67C469.463 116.985 493.851 113.285 496.676 95.4053C498.714 82.5103 485.577 71.3323 472.881 75.1583ZM226.1 91.4203C231.629 95.1833 233.59 98.6523 233.59 104.67C233.59 112.965 228.148 118.958 219.755 119.904C207.259 121.313 198.419 106.51 205.518 96.0623C210.157 89.2363 219.721 87.0783 226.1 91.4203ZM274.59 113.206C283.94 113.766 297.89 115.131 305.59 116.241C397.284 129.452 469.851 179.13 486.616 240.17C489.873 252.026 491.021 272.095 489.119 283.897C481.281 332.515 438.122 376.501 373.438 401.793C351.038 410.551 322.273 417.448 294.09 420.816C276.801 422.882 235.009 423.177 219.59 421.341C194 418.294 163.924 411.748 146.714 405.477L138.839 402.608L138.699 390.139C138.54 376.005 136.916 370.706 129.738 360.922C114.489 340.136 84.6135 334.877 63.3395 349.234C60.9475 350.849 58.6305 352.17 58.1905 352.17C57.0055 352.17 48.0445 341.62 41.5555 332.585C27.1515 312.53 20.0905 291.167 20.0905 267.648C20.0905 237.245 32.5595 209.235 57.2545 184.166C85.2805 155.713 128.709 132.598 173.896 122.083C178.678 120.97 183.299 119.854 184.165 119.603C185.212 119.3 186.813 120.805 188.949 124.102C192.692 129.878 197.977 134.325 204.76 137.405C212.274 140.818 224.563 140.535 232.824 136.76C241.937 132.596 249.437 123.887 252.492 113.92C253.12 111.87 252.552 111.888 274.59 113.206ZM237.59 157.765C208.813 160.674 194.305 163.458 175.266 169.723C133.872 183.345 102.08 207.598 89.0105 235.528C83.6175 247.052 81.7715 256.939 82.3625 271.133C82.9465 285.141 85.1425 293.141 91.6635 305.003C105.888 330.884 136.648 353.306 175.09 365.82C186.247 369.451 205.033 373.759 218.59 375.795C235.632 378.355 273.596 378.369 291.59 375.822C307.308 373.598 331.22 367.63 343.876 362.772C372.735 351.695 398.903 333.502 411.632 315.664C415.785 309.843 416.268 309.492 420.31 309.346C432.623 308.901 443.264 302.807 449.969 292.359C461.886 273.787 454.71 248.709 434.734 239.121C431.514 237.575 427.149 236.018 425.035 235.661C421.705 235.098 420.8 234.32 418.264 229.841C398.159 194.321 349.372 167.504 290.59 159.659C279.034 158.116 245.846 156.931 237.59 157.765ZM291.09 179.666C322.212 184.396 348.781 194.027 370.18 208.336C380.815 215.447 392.029 226.06 397.372 234.071L400.974 239.471L397.223 242.189C386.894 249.671 381.753 259.837 381.724 272.84C381.708 280.263 382.044 281.693 385.404 288.491C387.438 292.606 390.674 297.354 392.596 299.041C394.518 300.728 396.09 302.609 396.09 303.221C396.09 305.48 378.307 321.881 369.699 327.561C339.873 347.241 298.928 358.17 255.023 358.17C159.487 358.17 85.9435 305.703 104.502 250.787C117.144 213.378 166.759 184.987 231.415 178.163C243.328 176.906 278.81 177.799 291.09 179.666ZM259.381 191.92C257.119 193.432 252.506 197.033 249.128 199.92C245.75 202.807 242.645 205.17 242.227 205.17C241.808 205.17 237.471 203.82 232.59 202.17C212.126 195.253 205.028 199.65 203.531 220.17C203.15 225.395 202.436 230.441 201.947 231.384C201.458 232.327 196.566 235.406 191.077 238.225C180.28 243.772 177.211 246.86 176.387 253.003C175.684 258.242 177.73 262.417 185.443 271.475C189.099 275.768 192.09 279.997 192.09 280.872C192.09 281.747 190.74 286.678 189.09 291.829C185.639 302.601 185.399 306.308 187.842 311.101C190.35 316.024 195.29 318.151 206.725 319.232C212.082 319.739 217.293 320.417 218.305 320.738C219.333 321.064 221.952 324.929 224.242 329.496C226.495 333.992 229.22 338.914 230.294 340.435C234.276 346.068 242.647 348.002 248.949 344.743C250.602 343.888 255.088 340.485 258.919 337.179C267.035 330.177 268.272 329.967 279.165 333.745C292.557 338.389 300.596 336.811 304.109 328.849C305.149 326.492 306.262 320.747 306.662 315.67C307.051 310.72 307.734 305.689 308.179 304.49C308.701 303.081 311.747 301.009 316.789 298.634C326.736 293.947 330.949 290.752 332.696 286.57C335.591 279.643 333.723 274.445 324.59 264.017C321.532 260.526 318.782 256.706 318.479 255.528C318.175 254.349 319.314 249.056 321.009 243.766C324.514 232.822 324.77 229.406 322.452 224.521C319.996 219.344 314.861 217.197 302.584 216.215C296.901 215.76 291.753 215.08 291.144 214.703C290.535 214.327 288.204 210.375 285.965 205.921C278.95 191.97 275.921 189.17 267.841 189.17C264.76 189.17 262.293 189.972 259.381 191.92ZM275.031 210.837C277.603 215.879 280.356 220.79 281.149 221.75C283.568 224.679 290.205 226.987 298.09 227.641C311.112 228.72 312.09 228.992 312.09 231.541C312.09 232.795 310.953 237.076 309.563 241.055C304.334 256.022 304.948 259.185 315.489 271.589C319.169 275.919 322.043 280.184 321.875 281.066C321.707 281.948 316.85 285.164 311.08 288.211C297.746 295.255 296.445 297.252 295.081 312.769C294.562 318.684 293.699 323.961 293.163 324.497C292.533 325.127 288.694 324.361 282.255 322.32C265.948 317.151 263.375 317.741 249.128 329.92C245.75 332.807 242.591 335.17 242.107 335.17C240.795 335.17 237.768 330.497 234.206 322.969C228.6 311.124 225.049 308.915 209.59 307.661C205.19 307.304 200.803 306.792 199.84 306.523C197.41 305.846 197.635 302.791 200.751 294.094C202.326 289.7 203.448 284.395 203.501 281.096C203.601 274.887 202.682 273.183 193.29 262.163C190.374 258.742 188.123 255.235 188.29 254.37C188.457 253.505 193.02 250.428 198.43 247.533C203.84 244.638 208.859 241.777 209.585 241.174C212.412 238.828 214.203 232.775 215.105 222.514C215.622 216.63 216.472 211.389 216.995 210.866C217.595 210.266 221.468 211.068 227.514 213.043C238.188 216.531 244.64 216.972 249.352 214.535C251.09 213.636 255.609 210.235 259.393 206.978C263.871 203.124 266.987 201.163 268.314 201.363C269.758 201.58 271.72 204.348 275.031 210.837ZM248.729 225.323C212.97 230.222 199.454 276.074 226.699 300.056C250.051 320.612 286.911 310.151 296.114 280.357C305.448 250.136 280.354 220.991 248.729 225.323ZM267.556 239.052C278.497 243.892 286.088 255.438 286.089 267.242C286.09 276.216 283.818 282.213 278.004 288.574C271.395 295.805 264.995 298.608 255.09 298.608C245.186 298.608 238.785 295.805 232.176 288.574C226.362 282.213 224.091 276.216 224.092 267.242C224.093 253.349 234.131 240.635 247.809 237.203C253.013 235.897 262.413 236.777 267.556 239.052ZM424.775 256.234C428.606 257.681 433.048 261.996 434.713 265.888C441.197 281.042 423.101 296.061 409.334 286.95C405.01 284.089 401.09 277.371 401.09 272.822C401.09 269.279 403.613 263.319 406.388 260.306C410.703 255.621 418.552 253.882 424.775 256.234ZM102.59 363.56C122.977 373.227 125.23 401.616 106.589 413.963C91.4225 424.009 71.3185 418.028 63.7535 401.221C61.1625 395.465 61.0315 384.413 63.4875 378.853C65.9775 373.215 72.9025 366.189 78.5905 363.528C85.5755 360.261 95.6605 360.274 102.59 363.56ZM456.371 429.372C455.797 430.086 453.401 436.07 451.046 442.67C448.691 449.27 446.41 455.075 445.978 455.569C445.545 456.064 439.881 458.821 433.391 461.696C422.275 466.621 421.59 467.091 421.59 469.797C421.59 472.379 422.298 472.997 428.59 475.904C432.44 477.683 438.045 480.383 441.046 481.904L446.502 484.67L451.186 497.649C458.123 516.873 459.443 516.834 466.582 497.192C469.067 490.354 471.436 484.441 471.845 484.052C472.255 483.663 477.863 481.005 484.308 478.146C496.29 472.83 498.862 470.5 495.943 467.605C495.199 466.868 489.865 464.183 484.09 461.64C478.315 459.097 472.946 456.39 472.158 455.626C471.371 454.861 468.641 448.483 466.092 441.453C462.406 431.288 461.043 428.609 459.436 428.372C458.324 428.208 456.945 428.658 456.371 429.372ZM146.204 463.92C142.966 466.608 142.503 471.153 145.126 474.488C146.979 476.844 147.941 477.227 151.354 476.972C154.356 476.747 155.898 475.987 157.37 474.007C162.469 467.15 152.816 458.43 146.204 463.92Z" fill="#DAB2FF"/>
</svg>
                </div>
                
                </div>
                
                <div className="Content-Two">
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
                </div>

            </S.Flex>


        </>
    );
}

export default RegisterPage;
