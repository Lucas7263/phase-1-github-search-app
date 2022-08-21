document.addEventListener('DOMContentLoaded', () => {
    //console.log(document.querySelector('form'))
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) =>  {
        e.preventDefault()
        searchResult(e.target.search.value)
        form.reset()
    }) 
})

function searchResult(searchUser) {
    
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.textContent = ' x'
    p.textContent = `${searchUser} `
    p.appendChild(btn).addEventListener('click', deleteSearch)
    let p1 = document.createElement('img')    
    
    
    document.querySelector('#user-list').appendChild(p) 
    let userInfo = getFetch(searchUser)
    .then(res => res.json())
    .then(data => p1.src = (data.items[0].avatar_url))
    .catch(err => console.log(err))
    document.querySelector('#user-list').appendChild(p1) 
    p.addEventListener('click', (e) => {
        fetchRepo(searchUser)
        

    })
  
    //  console.log(userInfo)
    
    // let repo = getFetch(searchUser)
}

function deleteSearch(e){
    e.target.parentNode.remove()
}

// console.log(avatar)


// function getResult(url, body){
//     fetch('https://api.github.com/search/users?q=octocat', {
//         method: 'POST',
//         headers: {
          
//             'Accept': 'application/vnd.github.v3+json',
//             'Content-Type': 'application/json'
            
//     },
//             body:JSON.stringify()
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// function Repo(userName) {
//     // let repoList = document.querySelector('#repos-list')
//     let header = document.createElement('h2')
//     let pRepo = document.createElement('p')
//     let repoInfo = getFetch(userName)
//     header.textContent = 'User Repo List'
//     // .then(res => res.json())
//     // .then(data => pRepo.textContent = (data.items[0].repos_url))
//     // .catch(err => console.log(err))
//     document.querySelector('#repos-list').appendChild(pRepo) 
//     // .then(res => res.json())
//     // .then(data => pRepo.textContent = (data.items[0].repos_url))
//     // .catch(err => console.log(err))
// }



function getFetch(userName, avatarName) {
    return fetch( `https://api.github.com/search/users?q=${userName}`) 
    // .then(res => res.json())
    // .then(data => console.log(data.items[0].followers_url))
    // // .then(data => console.log(data.items))
    // .catch(err => console.log(err))
    
            

}
function userRepo(item) {
    
    let pRepo = document.createElement('li')
    pRepo.textContent = JSON.stringify(item.archive_url)
    document.querySelector('#repos-list').appendChild(pRepo) 

    // console.log(pRepo.textContent = item.archive_url)
}

function fetchRepo(userName) {
    let header = document.createElement('h2')
    header.textContent = 'User Repo List'
    document.querySelector('#repos-list').appendChild(header) 
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json())
    .then(data => data.forEach(userRepo))
    .catch(err => console.log(err))
     
    
}