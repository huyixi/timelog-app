"use client";

import { useState } from "react";
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
import { DateTimePicker } from "./DateTimePicker";
import { useToast } from "@/hooks/use-toast";

interface Log {
  startTime: string;
  activity: string;
}

export default function TimeLog() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [newLog, setNewLog] = useState<Log>({
    startTime: new Date(),
    activity: "",
  });
  const [startTime, setStartTime] = useState("");
  // const [endTime, setEndTime] = useState("");
  const [activity, setActivity] = useState("");
  const { toast } = useToast();

  const handleStartTimeChange = (date: Date | undefined) => {
    console.log("selected Date:", date);
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
    setStartTime(date ? date.toISOString() : "");
  };

  // 添加日志
  const addLog = () => {
    if (!startTime || !activity) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }

    const newLog: Log = {
      startTime,
      activity,
    };

    setLogs([...logs, newLog]);

    setStartTime("");
    setActivity("");

    toast({
      title: "Success",
      description: "Log added successfully",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
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
      <Card>
        <CardHeader>
          <CardTitle>添加时间日志</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <DateTimePicker onChange={handleStartTimeChange} />
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
    </div>
  );
}
