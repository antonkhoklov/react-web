import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import ProfileList from './ProfileList';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    subContainer: {
      padding: 20,
    },
    spaceBottom: {
      marginBottom: 20,
    },
  })
);

interface SearchParams {
  searchQuery: string;
  predicate: string;
}

const StartUpProfile: React.FC<RouteComponentProps<SearchParams>> = ({
  match,
  history,
}) => {
  const rootStore = useContext(RootStoreContext);
  const {
    loadStartUpsForSearch,
    searchedStartUpsForSearch,
    loadingForSearch,
    setSearchParamsForSearch,
  } = rootStore.startUpStore;
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [predicate, setPredicate] = useState('');

  useEffect(() => {
    if (isEmpty(match.params)) {
      loadStartUpsForSearch();
    } else {
      if (match.params.searchQuery) {
        setQuery(match.params.searchQuery);
      }
      if (match.params.predicate) {
        setPredicate(match.params.predicate);
      }
      setSearchParamsForSearch(match.params);
    }
  }, [
    match.params,
    match.params.searchQuery,
    match.params.predicate,
    history,
    loadStartUpsForSearch,
    setSearchParamsForSearch,
  ]);
  function isEmpty(obj: any) {
    return Object.getOwnPropertyNames(obj).length === 0;
  }

  return (
    <div className={classes.root}>
      <div className={classes.subContainer}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={9}>
            <div className={classes.spaceBottom}>
              <SearchBar  title="Search"/>
            </div>
            {!loadingForSearch &&
              searchedStartUpsForSearch.map((startUp) => (
                <div 
                onClick= {()=> {
                  history.push(`/startUpProfile/${startUp.id}`)
                }}
                className={classes.spaceBottom}>
                  <ProfileList key={startUp.id} startUpDetails={startUp} />
                </div>
              ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default observer(StartUpProfile);
