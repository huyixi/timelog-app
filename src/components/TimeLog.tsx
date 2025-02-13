"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Log {
  startTime: string;
  endTime: string;
  activity: string;
}

export default function TimeLog() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [activity, setActivity] = useState("");

  // 加载 localStorage 日志数据
  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
    setLogs(storedLogs);
  }, []);

  // 更新 localStorage
  const updateLocalStorage = (newLogs: Log[]) => {
    localStorage.setItem("logs", JSON.stringify(newLogs));
  };

  // 添加日志
  const addLog = () => {
    if ((!startTime && !endTime) || !activity) {
      alert("请填写所有字段！");
      return;
    }

    const newLog = { startTime, endTime, activity };
    const updatedLogs = [...logs, newLog];
    setLogs(updatedLogs);
    updateLocalStorage(updatedLogs);

    // 清空表单
    setStartTime("");
    setEndTime("");
    setActivity("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>添加时间日志</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              placeholder="开始时间"
            />
            <Input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              placeholder="结束时间"
            />
            <Input
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="活动描述"
            />
            <Button onClick={addLog} className="w-full">
              添加日志
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>时间日志记录</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>开始时间</TableHead>
                <TableHead>结束时间</TableHead>
                <TableHead>活动</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell>{log.startTime}</TableCell>
                  <TableCell>{log.endTime}</TableCell>
                  <TableCell>{log.activity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
