import { useState } from 'react';

const TaskForm = () => {
  const [title, setTitle] = useState('');

  return (
    <form>
      <legend>Add task</legend>
      <label>
        Title
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <button type={'button'}>Cancel</button>
      <button type={'submit'}>Save</button>
    </form>
  );
};

export default TaskForm;
