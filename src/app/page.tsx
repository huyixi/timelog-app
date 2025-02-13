"use client";
import TimeLog from "@/components/TimeLog";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6">时间日志记录</h1>
      <TimeLog />
    </main>
  );
}
