import { connect } from 'react-redux';
import CounterApp from '../components/CounterApp';

function mapStateToProps(state) {
  return {
    counterApp: state.counterApp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () =>
      dispatch({
        type: 'INCREMENT'
      }),
    decrement: () =>
      dispatch({
        type: 'DECREMENT'
      })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
