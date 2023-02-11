import { IconSearch, Input, PressableStyled, ViewSearch } from "./style";

export const SearchTask = () => {
  return (
    <ViewSearch>
      <Input placeholder="Pesquisar por tarefa" />
      <PressableStyled>
        <IconSearch name="search" />
      </PressableStyled>
    </ViewSearch>
  );
};
