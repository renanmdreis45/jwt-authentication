import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 60px 60px;
`;

export const LoginImage = styled.div`
    background-color: #FFFFFF;
    position: relative;
    width: 50%;
    height: 626px;
    display: flex;
    align-items: center;
    margin-top: 60px;
    margin-left: 60px;
    margin-right: 5px;

`;

export const LoginFields = styled.div`
    display: flex;
    position: relative;
    text-align: left;
    width: 50%;
    height: 646px;
    flex-direction: column;
    margin-top: 65px;
    margin-right: 60px;
    margin-left: 10px
    padding: 30px 20px;

    h1 {
        margin: 0;
        font-weight: 700;
    }
`;

export const HeaderLogin = styled.div`
    position: relative;
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    h1 {
        font-weight: 900;
    }
    
    h3 {
        font-weight: 600;
        letter-spacing: 0.5px;
        a {
            color:#4682B4;
            cursor: pointer;
        }
    }
`;

export const LoginButtons = styled.div `

    display:flex;
    gap: 20px;
    align-items: center;
    
    button {
        border-radius: 25px;
        height: 40px;
        width: 210px;
        padding: 5px;
        border-style: none;
        display:flex;
        justify-content: left;
        align-items: center;
        gap: 10px;
        padding: 20px;
        cursor: pointer;

        span {
            position: relative;
            margin-top: 2px;
            font-size: 14px;
        }
        
    }

    .btn-google {

    }

    .btn-facebook {

    }
`;

export const DivSeparators = styled.div`
    display: flex;
    position: relative;
    width: 430px;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    span {
        position: relative;
        color: rgb(200,200,200);
    }
`;

export const SeparatorLeft = styled.div`
    border: 1px solid rgb(200,200,200);
    width: 205px;
    height: 1px;
`;

export const SeparatorRight = styled.div`
    border: 1px solid rgb(200,200,200);
    width: 200px;
    height: 1px;
`;

export const FormLogin = styled.form`
    width: 430px;
    height: 270px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const EmailField = styled.div`
    position: relative;
    height: 120px;
    width: 100%;
    label {
        display: flex;
        flex-direction: column;
        gap: 15px;
        
        span {
            font-weight: 400;
            font-size: 18px;
        }

        input {
            height: 40px;
            border-style: none;

            &::placeholder {
                color: rgb(200,200,200);
            }

            &:focus {
                outline: none;
                border: 2px solid #4682B4;
            }
        }
    }
`;

export const PasswordField = styled.div`
    position: relative;
    height: 160px;
    width: 100%;
    margin-top: 15px;

    label {
        display: flex;
        flex-direction: column;
        gap: 15px;

        span {
            font-weight: 400;
            font-size: 18px;
        }


        input {
            height: 40px;
            border-style: none;

            &::placeholder {
                color: rgb(200,200,200);
            }

            &:focus {
                outline: none;
                border: 2px solid #4682B4;
            }
        }
    }
`;

export const PasswordFooter = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    font-weight: 400;
    font-size: 16px;

    .savePassword {
        display:flex;
        gap: 5px;

        span {
            margin-top: 1px;
        }

        input {
             height: 15px;
             width: 15px;
        }
    }

    .forgotPassword {
        color: #4682B4;
    }
`;

export const FooterLogin = styled.div `
    position: relative;
    height: 100px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        border-radius: 10px;
        height: 50px;
        width: 70%;
        border-style: none;
        background-color: #4682B4;
        color: #FFFFFF;
        font-size: 16px;
        
        &:hover {
            cursor: pointer;
        }
    }
`;