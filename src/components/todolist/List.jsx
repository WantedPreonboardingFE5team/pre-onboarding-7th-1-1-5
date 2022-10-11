import styled from "styled-components";

import Todo from "./Todo";

const List = ({ list }) => {
  const todos = list.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      contents={todo.contents}
      isDone={todo.isDone}
    ></Todo>
  ));
  return <StyledList>{todos}</StyledList>;
};

export default List;

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;