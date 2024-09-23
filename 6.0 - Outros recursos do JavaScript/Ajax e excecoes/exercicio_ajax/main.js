document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('.profile-avatar'); 
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/rodolfosouza88')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        // Adiciona o console.log para ver o conteúdo da resposta
        console.log(json);

        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        reposElement.innerText = json.public_repos; 
        linkElement.href = json.html_url; 
    })
    .catch(function(error) {
        console.error('Erro ao buscar dados da API:', error);
    });
});
