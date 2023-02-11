import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { HeadPages } from "../../components/HeadPages/HeadPages";
import { ListTasks } from "../../components/ListsTasks/ListTasks";
import { ModalAddTask } from "../../components/Modals/ModalAddTask/ModalAddTask";
import { ModalLogout } from "../../components/Modals/ModalLogout/ModalLogout";
import { SearchTask } from "../../components/SearchTask/SearchTask";
import { color } from "../../styles/colors";
import { Page } from "./style";

export const Dashboardpage = () => {
  const [modalLogout, setModalLogout] = useState(false);
  const [modalAddTask, setModalAddTask] = useState(false);

  return (
    <Page>
      <HeadPages headColor={`${color.colorBaseDefault}`} />
      <Header openModalLogout={setModalLogout} stateModal={modalLogout} />
      <SearchTask />
      <ModalLogout stateModal={modalLogout} openModalLogout={setModalLogout} />
      <ModalAddTask
        stateModal={modalAddTask}
        openModalAddTask={setModalAddTask}
      />
      <ListTasks stateModal={modalAddTask} openModalAddTask={setModalAddTask} />
    </Page>
  );
};
