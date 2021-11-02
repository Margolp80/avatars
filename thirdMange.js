

const data = {
    first: {
        Fname: 'FIRST',
        Lname: '1',
        img_src: '/images/first.jpeg',
        value: '70'
    },
    second: {
        Fname: 'SECOND',
        Lname: '2',
        img_src: '/images/third.jpeg',
        value: '10'
    },
    third: {
        Fname: 'THIRD  ',
        Lname: '3',
        img_src: '/images/secondnft.jpeg',
        value: '20'
    },
    fourth: {
        Fname: 'FOURTH  ',
        Lname: '4',
        img_src: '/images/secondnft.jpeg',
        value: '30'
    },
    current: {
        Fname: 'CURRENT  ',
        Lname: '5',
        img_src: '/images/secondnft.jpeg',
        value: '40'
    },

}
const avatars = ['first', 'second', 'third']
let offset = -1

const renderAvatars = (currentData) => {

    avatars.forEach((val, index) => {
        console.log(currentData[index]);
        let bar = new ldBar(`#${val}_loadbar`);
        bar.set(data[currentData[index]].value)
        let Fname = document.getElementById(`${val}_Fname`)
        let Lname = document.getElementById(`${val}_Lname`)
        Fname.innerHTML = data[currentData[index]].Fname.slice(0, 10)
        Lname.innerHTML = data[currentData[index]].Lname.slice(0, 10)
        bar.set(data[currentData[index]].value)
    })
}



const render = () => {
    offset++
    const keys = Object.keys(data)
    const mappedData = avatars.map((val, index) => keys[(index + offset) % 4])
    renderAvatars(mappedData)

}

const renderRight=() => {
    offset=(offset!==0)?offset:4
    offset--
    const keys = Object.keys(data)
    const mappedData = avatars.map((val, index) => keys[(index + offset) % 4])
    renderAvatars(mappedData)
}
render()