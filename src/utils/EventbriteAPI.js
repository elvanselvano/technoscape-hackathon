import axios from 'axios';
import * as consts from '../config/constants';

export function getCategories() {
  return axios({
    method: 'get',
    url: `${consts.PATH_BASE}${consts.PATH_CATEGORIES}/?token=${consts.TOKEN}&${consts.PARAM_LOCALE}`,
    headers: {
      Accept: 'application/json',
    },
  });
}

export function getEvents(searchTerms) {
  return axios({
    method: 'get',
    url: `${consts.PATH_BASE}${consts.PATH_EVENTS}/?token=${consts.TOKEN}&q=${searchTerms.criteria}&categories=${
      searchTerms.category
    }&${consts.PARAM_LOCALE}`,
    headers: {
      Accept: 'application/json',
    },
  });
}