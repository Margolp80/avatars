

const data={
    first:{
        Fname:'First',
        Lname:'Morgulis',
        img_src:'/images/first.jpeg',
        value:'90'
    },
    second:{
        Fname:'SECOND',
        Lname:'Max',
        img_src:'/images/third.jpeg',
        value:'50'
    },
    third:{
        Fname:'THIRD  ',
        Lname:'Flask',
        img_src:'/images/secondnft.jpeg',
        value:'70'
    },
    current:{
        Fname:'You  ',
        Lname:'whateVer',
        img_src:'/images/secondnft.jpeg',
        value:'14'
    },
    
}

const loadbars = ['first','second','third','current']


loadbars.forEach(val=>{
    let bar =new ldBar(`#${val}_loadbar`);
    bar.set(data[val].value)
    let Fname = document.getElementById(`${val}_Fname`)
    let Lname = document.getElementById(`${val}_Lname`)
    Fname.innerHTML = data[val].Fname.slice(0,10)
    Lname.innerHTML = data[val].Lname.slice(0,10)
})

