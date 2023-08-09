import React from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from "react-router-dom";
import {useEffect, useState} from "react";
import { fetchPopularRepos } from '../api';
import RepoList from './RepoList';
import LanguageSelector from './LanguageSelector';
import LoadingOverlay from './LoadingOverlay';

const languages  = ['All', 'Javascript', 'Java', 'Ruby', 'CSS', 'Python'];

function Popular() {
  const [searchParams, setSearchParams] = useSearchParams({ activeTab: 'home' });
  const activeTab = searchParams.get('activeTab');
  console.log("active: " + activeTab);

  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(activeTab);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchPopularRepos(languages[selectedLanguageIndex])
        .then(repos => setRepos (repos))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
  }, [selectedLanguageIndex]);

  const setSelected = (index) => {
    if(loading) return;

    setSelectedLanguageIndex(index);
    setSearchParams({ activeTab: selectedLanguageIndex });
  }

  if(loading) {
    return <LoadingOverlay/>
  }
  if (error) {
    return <p>[error]</p>
  }

  return <div>
            <LanguageSelector
                languages={languages}
                selectedLanguageIndex={selectedLanguageIndex}
                onSelect={setSelected}
            />
            <RepoList repos={repos} />
        </div>;
}

export default Popular;
