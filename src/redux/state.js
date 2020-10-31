import { rerenderEntireTree } from './../render';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'Fine', likesCount: 11 }
    ],
    newPostText: 'it-kamasutra.com'
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Ну-Ну' },
      { id: 2, message: 'Ky-Ky' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' }
    ],
    dialogs: [
      { id: 1, src: "https://sun9-5.userapi.com/jzz4YfJog8IvY2hj8fn0tHYDvgNgwrC4dHzzXQ/Fy5lqDBXvnI.jpg", name: 'Dimych' },
      { id: 2, src: "https://sun9-5.userapi.com/jzz4YfJog8IvY2hj8fn0tHYDvgNgwrC4dHzzXQ/Fy5lqDBXvnI.jpg", name: 'Vova' },
      { id: 3, src: "https://sun9-5.userapi.com/jzz4YfJog8IvY2hj8fn0tHYDvgNgwrC4dHzzXQ/Fy5lqDBXvnI.jpg", name: 'Misha' },
      { id: 4, src: "https://sun9-5.userapi.com/jzz4YfJog8IvY2hj8fn0tHYDvgNgwrC4dHzzXQ/Fy5lqDBXvnI.jpg", name: 'Egor' },
      { id: 5, src: "https://sun9-5.userapi.com/jzz4YfJog8IvY2hj8fn0tHYDvgNgwrC4dHzzXQ/Fy5lqDBXvnI.jpg", name: 'Nastya' }
    ]
  },
  sidebar: {}
}
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}
export default state;