import TimeDemo from "@/components/TimeDemo";
import TimeLog from "@/components/TimeLog";

export default function Home() {
  const [date, setDate] = React.useState(new Date());

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">时间日志记录</h1>
      <TimeLog />
      <TimeDemo date={date} setDate={setDate} />
    </main>
  );
}
