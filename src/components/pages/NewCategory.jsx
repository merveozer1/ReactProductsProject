import { useSelector, useDispatch } from "react-redux";
import { addCategory, removeCategory } from "../../reduxStore/category"
import { BiCategoryAlt } from 'react-icons/bi';

function NewCategory() {
  const state = useSelector((state) => state);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch()

  const formHandler = (event) => {
    event.preventDefault();
    dispatch(addCategory(event.target.task.value))
    event.target.task.value = "" //sifirla bu valueyu
  }

  return (
    <div className="New category">
  <div className="col-sm-6 ">
          <div className="card border-3 border-primary">
            <div className="card-body">
              <h5 className="card-title">
                <BiCategoryAlt /> Category
              </h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.
              </p>
            </div>
          </div>
         
        </div>
      <hr />
      <form onSubmit={formHandler}>
        <input type="text" name='category' id='category' />
        <button type='submit'>Add Task</button>
        <button type='submit'>Remove Task</button>
      </form>
      <hr />
      <ul>
        {
          category.map((item) => (
            <li key={item.id} onClick={() => dispatch(removeCategory(item.id))} > {item.title}
            </li>
          ))}
      </ul>
  
    </div>
  );
}

export default NewCategory;
