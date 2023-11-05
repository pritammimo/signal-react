import { signal, computed, effect } from '@preact/signals-react';

const count = signal(0);
const todos = signal([{ name: Date.now() }]);
const double = computed(() => count.value * 2);
const Counter = () => {
    const addToDo = () => {
        todos.value = [...todos.value, { name: Date.now() }];
      };
    
      effect(() => console.log(count.value));
  return (
    <div>
      <h1>Double: {double}</h1>
      <button
        onClick={() => {
          count.value++;
          addToDo();
        }}
      >
        Count: {count}
      </button>
      {todos.value.map((td,i) => (
        <h1 key={i}>{td.name}</h1>
      ))}
    </div>
  )
}

export default Counter