const data = {
  users:[{
      Fname: "FIRST",
      Lname: "1",
      img_src: "/images/first.jpeg",
      value: "70",
    },
     {
      Fname: "SECOND",
      Lname: "2",
      img_src: "/images/third.jpeg",
      value: "10",
    },
     {
      Fname: "THIRD  ",
      Lname: "3",
      img_src: "/images/secondnft.jpeg",
      value: "20",
    },
     {
      Fname: "FOURTH  ",
      Lname: "4",
      img_src: "/images/turbines.jpeg",
      value: "30",
    },
    {
      Fname: "fifth  ",
      Lname: "5",
      img_src: "/images/avatar5.png",
      value: "30",
    }
  ],
  currentUser: {
    Fname: "CURRENT  ",
    Lname: "5",
    img_src: "/images/3551911.jpg",
    value: "40",
  },
};


const store = (data)=>{
  let users = [...data.users]
  const toggleRight=()=>users =[...users.slice(-1),...users.slice(0,-1)]
  const toggleLeft=()=>users =[...users.slice(1,),...users.slice(0)]
  const getUsers=()=>users.slice(0,3)

  return {getUsers,toggleRight,toggleLeft}
}

const createAvatar=(usr)=>{
  return (`
  <div on class="container">
                <div id="first_loadbar" class="ldBar label-center" data-value="${usr.value}" data-preset="circle" data-fill='black'>
                    <img class="img" src="${usr.img_src}" alt=""
                        >
                </div>

                <div id='first_Fname' class="align" >${usr.Fname}</div>
                <div id='first_Lname' class="align" >${usr.Lname}</div>
            </div>
  `)
}
const render=(usrStore)=>{
  const users=usrStore.getUsers()
  return users.map(createAvatar)
}

const usrStore=store(data)

const displayUsersInDOM=()=>document.getElementById('container').innerHTML=render(usrStore).join('')
displayUsersInDOM()

console.log(render(usrStore).join(''))