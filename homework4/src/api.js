import axios, * as others from 'axios';

export const fetchPopularRepos = (language) => {
    const encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
        return axios.get(encodeURI)
            .then((response) => {
                return response.data.items;
            })
            .catch((error) => console.error(error));
}