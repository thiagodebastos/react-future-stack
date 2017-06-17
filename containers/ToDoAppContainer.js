import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'
import { inputChange, inputSubmit, listItemClick, deleteListItem } from '../redux/modules/todoApp'

function mapStateToProps(state) {
  return {
    todoApp: state.todoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listItemClick: index => dispatch(listItemClick(index)),
    inputChange: value => dispatch(inputChange(value)),
    inputSubmit: () => dispatch(inputSubmit()),
    deleteListItem: index => dispatch(deleteListItem(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
