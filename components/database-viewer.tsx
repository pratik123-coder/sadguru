"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tableNames } from "@/constants/tables.constant";
import { getTableData } from "@/action/db.action";

type TableData = Record<string, string | number | boolean | null>;

export default function DatabaseViewer() {
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleTableSelect = async (tableName: string) => {
    setSelectedTable(tableName);
    setError(null);
    try {
      const rawData: unknown = await getTableData(tableName);

      let flatData: TableData[] = [];

      if (
        tableName === "Admission" &&
        typeof rawData === "object" &&
        rawData !== null &&
        !Array.isArray(rawData)
      ) {
        // it's grouped object
        const groupedData = rawData as Record<string, any[]>;
        for (const group in groupedData) {
          flatData.push(...groupedData[group]);
        }
      } else if (Array.isArray(rawData)) {
        flatData = rawData;
      }

      const formatted = flatData.map((row: any) => ({
        ...row,
        createdAt:
          "createdAt" in row && row.createdAt
            ? new Date(row.createdAt).toISOString()
            : null,
        updatedAt:
          "updatedAt" in row && row.updatedAt
            ? new Date(row.updatedAt).toISOString()
            : null,
      }));

      setTableData(formatted);
    } catch (error) {
      console.error("Error fetching table data:", error);
      setTableData([]);
      setError("Failed to fetch table data. Please try again.");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <Select onValueChange={handleTableSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a table" />
        </SelectTrigger>
        <SelectContent>
          {tableNames.map((name) => (
            <SelectItem key={name} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {error && <p className="text-red-500">{error}</p>}

      {selectedTable && tableData.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              {Object.keys(tableData[0]).map((key) => (
                <TableHead key={key}>{key}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                {Object.entries(row).map(([key, value]) => (
                  <TableCell key={`${index}-${key}`}>
                    {typeof value === "object" && value !== null
                      ? JSON.stringify(value)
                      : String(value)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
