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

function isGroupedData(data: unknown): data is Record<string, TableData[]> {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}

export default function DatabaseViewer() {
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTableSelect = async (tableName: string) => {
    setSelectedTable(tableName);
    setError(null);
    setIsLoading(true);

    try {
      const rawData: unknown = await getTableData(tableName);

      let flatData: TableData[] = [];

      if (tableName === "Admission" && isGroupedData(rawData)) {
        for (const group in rawData) {
          flatData.push(...rawData[group]);
        }
      } else if (Array.isArray(rawData)) {
        flatData = rawData as TableData[];
      }

      const formatted = flatData.map((row: TableData) => ({
        ...row,
        createdAt:
          "createdAt" in row && row.createdAt
            ? new Date(row.createdAt as string).toISOString()
            : null,
        updatedAt:
          "updatedAt" in row && row.updatedAt
            ? new Date(row.updatedAt as string).toISOString()
            : null,
      }));

      setTableData(formatted);
    } catch (error) {
      console.error("Error fetching table data:", error);
      setTableData([]);
      setError("Failed to fetch table data. Please try again.");
    } finally {
      setIsLoading(false);
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

      {isLoading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {selectedTable && !isLoading && tableData.length === 0 && (
        <p className="text-gray-500">No data available for {selectedTable}.</p>
      )}

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
                    {typeof value === "object" && value !== null ? (
                      <pre className="whitespace-pre-wrap text-xs">
                        {JSON.stringify(value, null, 2)}
                      </pre>
                    ) : (
                      String(value)
                    )}
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
