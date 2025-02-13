"use client";
import TimeLog from "@/components/TimeLog";
import { DateTimePicker } from "@/components/DateTimePicker";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">时间日志记录</h1>
      <DateTimePicker />
      <TimeLog />
    </main>
  );
}
