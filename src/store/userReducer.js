const initialState = {
    uid: '',
    fullName: 'AMMMM',
    email: '',
    photoUrl: '',
    isAdmin: false,
    isLogin: false,
    accessToken: ''
};

export const userReducer = (state = initialState , action) => {
    switch (action.type) {
        case "ADD_USER":
            let {uid, fullName, email, photoUrl, accessToken} = action.payload;
            let isAdmin = uid === 'Y0Uz0QLyH4U3meAoPKYHhhzFz1m1';
            console.log(action.payload)
            return {
                ...state,
                uid: uid,
                fullName: fullName || 'Қолданушы',
                email: email,
                photoUrl: photoUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB88zjt7Xh0zNX6WIi_LBVjklAhUBzhRZtg&usqp=CAU',
                isAdmin: isAdmin,
                isLogin: true,
                accessToken: accessToken,
            };
        case "DELETE_USER":
            return {
                ...state,
                uid: '',
                fullName: '',
                email: '',
                photoUrl: '',
                isAdmin: false,
                isLogin: false,
                accessToken: ''
            };
        case "ADD_ADMIN":
            console.log(action.payload)
            return {
                state
            };
        default:
            return state
    }
};


export const addUserAction = (payload) => {
    return {type: "ADD_USER", payload}
};
export const removeUserAction = () =>{
    return {type: "DELETE_USER"}
};

export const testAction = (payload) =>{
    return {type: 'ADD_ADMIN', payload}
};



