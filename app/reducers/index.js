import { combineReducers } from 'redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import { routeReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  topic,
  routing
});

export default rootReducer;
