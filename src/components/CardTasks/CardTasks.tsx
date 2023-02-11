import { useEffect, useState } from "react";
import { Text } from "react-native";
import { ITask } from "../../interfaces/tasks";
import {
  ContentTask,
  IconStyled,
  PressableIcons,
  PressableIconsTrash,
  ProgressBar,
  ProgressLoading,
  TitleTask,
  ViewCard,
  ViewIcons,
  ViewNameAndIcons,
} from "./style";

interface ICardProps {
  task: ITask;
}

export const CardTask = ({ task }: ICardProps) => {
  const [filled, setFilled] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (task.isFinished) {
      setIsRunning(true);
    }
  }, []);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 30)), 0);
    }
  }, [filled, isRunning]);

  const finishedTask = () => {
    setIsRunning(true);
  };

  const removeFinished = () => {
    setIsRunning(false);
    setFilled(10);
  };

  return (
    <ViewCard>
      <ViewNameAndIcons>
        <TitleTask>{task.name}</TitleTask>
        <ViewIcons>
          <PressableIconsTrash>
            <IconStyled name="trash" />
          </PressableIconsTrash>
          <PressableIcons
            onPress={() => (isRunning ? removeFinished() : finishedTask())}
            finished={isRunning}
          >
            <IconStyled name="check" finished={isRunning} />
          </PressableIcons>
        </ViewIcons>
      </ViewNameAndIcons>
      <ContentTask>{task.content}</ContentTask>
      <ProgressBar>
        <ProgressLoading progress={filled}></ProgressLoading>
      </ProgressBar>
    </ViewCard>
  );
};                            