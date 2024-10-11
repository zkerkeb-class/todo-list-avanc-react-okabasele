import TaskList from "@/components/TaskList";

export default function Home() {
  const tasks = [
    {
      id: "1",
      title: "Task 1",
      completed: false,
    },
    {
      id: "2",
      title: "Task 2",
      completed: true,
    },
  ];
  return (
    <section>
      <TaskList tasks={tasks} />
    </section>
  );
}
