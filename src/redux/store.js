import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

// Объект store  - OOP

let store = {
    _state: {
        profilePage:{
            posts: [
                {id:1, name:'Alexandra', message:'Hi,how are you?',ava:'https://lastfm-img2.akamaized.net/i/u/770x0/140ab88fbc27abfda6001d33718a52db.jpg' },
                {id:2, name:'Vasya', message:'Hi!',ava:'https://scstylecaster.files.wordpress.com/2015/10/model-with-glowing-skin.jpg?w=916&h=1374' },
                {id:3, name:'Petr', message:'Hello!',ava:'https://i.kinja-img.com/gawker-media/image/upload/s--oFm5GcfO--/c_scale,f_auto,fl_progressive,q_80,w_800/d4tapmk7e7p9gf2fch3a.png' }
            ],
            newPostText:'Enter your text'
        },
        dialogsPage:{
            dialogsData: [
                {id: 1, name: 'Alexander'},
                {id: 2, name: 'Alex'},
                {id: 3, name: 'Katya'},
            ],
            messagesData: [
                {id: 1, mes: 'Hi'},
                {id: 2, mes: 'How are you?'},
                {id: 3, mes: 'Bye'},
            ],
            newMessageBody:""
        },
        sidebar:{}
    },
    _callSubscriber ()  {
        console.log('State changed');
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer; // наблюдатель - pattern // observer(addEventListner)
    },

    dispatch(action) { //{type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;

window.state = store;