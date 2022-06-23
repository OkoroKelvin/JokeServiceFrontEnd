import React , {useState, useEffect, useCallback} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    email:'',
    localId: null,
    firstName:'',
    isLoggedIn: false,
    login: (token,localId,email)=>{},
    logout: ()=>{}
})  ;

const calculateRemainingTime =(expirationTime)=>{
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
};

export const AuthContextProvider = (props) =>{
    const initailToken = localStorage.getItem('token');
    const initailEmail = localStorage.getItem('email');
    const initailLocalId = localStorage.getItem('localId');
    const initailFirstName = localStorage.getItem('firstName');
    const [token, setToken] = useState(initailToken);
    const [email,setEmail] = useState(initailEmail);
    const [localId,setlocalId] = useState(initailLocalId);
    const [firstName, setFirstName] = useState(initailFirstName);
    
    const userIsLoggedIn = !!token;

    const logoutHandler =()=>{
        setToken(null);
        setlocalId(null);
        setEmail(null);
        setFirstName(null);

        localStorage.removeItem('token');
        localStorage.removeItem('localId');
        localStorage.removeItem('email');
        localStorage.removeItem('firstName');

        if(logoutTimer){
            clearTimeout(logoutTimer);
        }
    };

    const loginHandler =(token,localId,email,firstName)=>{
        setToken(token);
        setlocalId(localId);
        setEmail(email);
        setFirstName(firstName);

        localStorage.setItem('token',token);
        localStorage.setItem('localId',localId);
        localStorage.setItem('email',email);
        localStorage.setItem('firstName',firstName);

        //const remainingTime = calculateRemainingTime(expirationTime);

         //var expires = new Date(expirationTime);
        // var sessionObject = {
        //     expiresAt: expires
        //     }
        // sessionStorage.setItem('sessionObject', JSON.stringify(sessionObject));
        logoutTimer = setTimeout(logoutHandler,3600000);
    };

    const contextValue ={
        token: token,
        localId: localId,
        email:email,
        firstName:firstName,
        isLoggedIn: userIsLoggedIn,
        login:loginHandler,
        logout: logoutHandler
    };

    return (<AuthContext.Provider value={contextValue}>
        {props.children}
        </AuthContext.Provider>
    );
};
export default AuthContext;

















// const calculateRemainingTime = (expirationTime) =>{
//     const currentTIme = new Date().getTime();
//     const adjExpirationTime = new Date(expirationTime).getTime();

//     const remainingDuration = adjExpirationTime - currentTIme;
    
//     return remainingDuration;

// };


// const retrieveStoredToken = () => {
//     const storedToken = localStorage.getItem('token');
//     const storedExpirationDate = localStorage.getItem('expirationTime');

//     const remainingTime = calculateRemainingTime(storedExpirationDate);

//     if(remainingTime <= 3600){
//         localStorage.removeItem('token')
//         return null;
//     }

//     return {
//         token: storedToken,
//         duration: remainingTime
//     };

// };




// export const AuthContextProvider = (props) => {
    
// };
// export default AuthContext;


// const tokenData = retrieveStoredToken();
//     let intialToken;

//     if(tokenData){
//         intialToken = tokenData.token;

//     }
//     const [token,setToken] =useState(intialToken);

//     const userIsLoggedIn = !!token;


//     const logoutHandler = useCallback(() =>{
//         setToken(null);
//         localStorage.removeItem('token');
//         localStorage.removeItem('expirationTime');

//         if(logoutTimer){
//             clearTimeout(logoutTimer);
//         }

//     },[]);

//     const loginHandler = (token, expirationTime) =>{
//         setToken(token);
//         localStorage.setItem('token',token);
//         localStorage.setItem('expirationTime', expirationTime);

//         const remainingTime = calculateRemainingTime(expirationTime);
//        logoutTimer = setTimeout(logoutHandler,remainingTime);
          
//     };

//     useEffect(()=>{
//         if(tokenData){
//             console.log(tokenData.duration);
//             logoutTimer = setTimeout(logoutHandler, tokenData.duration);
//         }
//     }, [tokenData, logoutHandler]);

//     const contextValue = {
//         token: token,
//         isLoggedIn: userIsLoggedIn,
//         login: loginHandler,
//         logout: logoutHandler
//     };

//     return (
//     <AuthContext.Provider value={contextValue}>
//         {props.children}
//     </AuthContext.Provider>
//     );