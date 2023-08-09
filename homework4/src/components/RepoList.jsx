import React from 'react';

function RepoList({ repos }) {
  return (
    <ul className='popular-list'>
      {repos.map((repo, index) => (
        <li key={repo.id} className='popular-item'>
          <div className='popular-rank'>#{index + 1}</div>
          <ul>
            <li>
              <img className='avatar' src={repo.owner.avatar_url} alt={repo.owner.login} />
            </li>
            <li>
              <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                {repo.name}
              </a>
            </li>
            <li>{repo.owner.login}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default RepoList;