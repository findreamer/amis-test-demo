import { types, getSnapshot } from 'mobx-state-tree';

const Todo = types
  .model({
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setName(newName) {
      self.name = newName;
    },

    toggle() {
      self.done = !self.done;
    },
  }));

const User = types.model({
  name: types.optional(types.string, ''),
});

export const RootStore = types.model({
  users: types.map(User),
  todos: types.optional(types.map(Todo), {}),
}).actions(self => ({
  addTodo(id, name){
    self.todos.set(id, Todo.create({name}))
  }
}))
