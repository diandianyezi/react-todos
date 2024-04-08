
export default function List (props) {

    const { todo } = props;

    function handleOnChange(event) {
      return (todo) => {
        console.info(event.target.checked)
        props.handleOnChange(todo)
      }
    }

    return (
      <li>
        <input type="checkbox" checked={todo.done} name="" id="" onChange={handleOnChange} />
        {todo.name}
      </li>
    )
}
