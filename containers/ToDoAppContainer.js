import { connect } from 'react-redux'
import ToDoApp from '../components/ToDoApp'
import { inputChange, inputSubmit, listItemClick } from '../redux/modules/toDoApp'

function mapStateToProps(state) {
  return {
    toDoApp: state.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listItemClick: index => dispatch(listItemClick(index)),
    inputChange: value => dispatch(inputChange(value)),
    inputSubmit: () => dispatch(inputSubmit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp)
