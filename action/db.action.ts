"use server";

import { db } from "@/lib/db";

export async function getTableData(tableName: string) {
  switch (tableName) {
    case "Admission": {
      const admissions = await db.admission.findMany({
        orderBy: {
          id: "desc",
        },
      });

      // Group by `interested` field
      const grouped: Record<string, typeof admissions> = {};

      for (const admission of admissions) {
        const key = admission.interested || "Others";
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(admission);
      }

      return grouped;
    }

    case "Contact": {
      const data = await db.contact.findMany({
        orderBy: {
          id: "desc",
        },
      });
      return data;
    }

    case "Courses": {
      const data = await db.courses.findMany({
        orderBy: {
          id: "desc",
        },
      });
      return data;
    }

    default:
      throw new Error("Invalid table name");
  }
}
