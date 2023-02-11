import { Dispatch, SetStateAction, useState } from "react";
import { FlatList } from "react-native";
import { CardTask } from "../CardTasks/CardTasks";
import { ContainerTasks, PressableAddTask, TextAddTask } from "./style";

interface IListTaskProps {
  stateModal: boolean;
  openModalAddTask: Dispatch<SetStateAction<boolean>>;
}

export const ListTasks = ({ stateModal, openModalAddTask }: IListTaskProps) => {
  const [task, setTask] = useState([
    {
      id: "1",
      name: "Boleto pra paga1",
      content: "Pagar no itau",
      isFinished: false,
    },
  ]);

  return (
    <ContainerTasks>
      <PressableAddTask
        onPress={() => (!stateModal ? openModalAddTask(true) : null)}
      >
        <TextAddTask>Adicionar nova tarefa</TextAddTask>
      </PressableAddTask>
      <FlatList
        data={task}
        renderItem={({ item }) => <CardTask task={item} />}
        keyExtractor={(item) => item.id}
      />
    </ContainerTasks>
  );
};
