"use client";

import { useCallback, type FC } from "react";
import { Database, Ellipsis, FileJson, HardDrive, Server, Shell, Table2, Flame, TreePine, Zap, Route, Search, BarChart3, GanttChart, Funnel, Code2, Leaf, Bug, FileStack, Cable, Binary, AppWindow, Globe } from "lucide-react";
import { SelectableCard } from "@/components/selectable-card";
import { useWizardStore } from "@/store/useWizardStore";
import type { SelectableCardOption } from "@/types/wizard";

const primary: SelectableCardOption[] = [
  { id: "postgres", title: "PostgreSQL", description: "Advanced relational", icon: Database },
  { id: "mysql", title: "MySQL", description: "Popular relational", icon: Ellipsis },
  { id: "mongodb", title: "MongoDB", description: "NoSQL documents", icon: FileJson },
  { id: "sqlite", title: "SQLite", description: "Embedded engine", icon: Server },
  { id: "cockroachdb", title: "CockroachDB", description: "Distributed SQL", icon: Shell },
  { id: "planetscale", title: "PlanetScale", description: "Serverless MySQL", icon: Table2 },
  { id: "supabase", title: "Supabase", description: "Firebase alt", icon: Flame },
  { id: "firestore", title: "Firestore", description: "Real-time NoSQL", icon: TreePine },
  { id: "dynamodb", title: "DynamoDB", description: "AWS key-value", icon: Zap },
  { id: "redis", title: "Redis", description: "Cache & broker", icon: HardDrive },
  { id: "neo4j", title: "Neo4j", description: "Graph database", icon: GanttChart },
  { id: "elasticsearch", title: "Elasticsearch", description: "Search engine", icon: Search },
  { id: "clickhouse", title: "ClickHouse", description: "Analytics DB", icon: BarChart3 },
];

const orm: SelectableCardOption[] = [
  { id: "prisma", title: "Prisma", description: "Type-safe ORM", icon: Code2 },
  { id: "drizzle", title: "Drizzle", description: "SQL-like ORM", icon: Table2 },
  { id: "typeorm", title: "TypeORM", description: "Data Mapper", icon: Leaf },
  { id: "sequelize", title: "Sequelize", description: "Promise-based", icon: Bug },
  { id: "knex", title: "Knex", description: "SQL builder", icon: FileStack },
  { id: "mongoose", title: "Mongoose", description: "MongoDB ODM", icon: Server },
];

export const DatabaseStep: FC = () => {
  const { selections, updateSelection, updateNote } = useWizardStore();
  const hp = useCallback((id: string) => updateSelection("database", { ...selections.database, primary: id }), [selections.database, updateSelection]);
  const ho = useCallback((id: string) => updateSelection("database", { ...selections.database, orm: id }), [selections.database, updateSelection]);
  const np = useCallback((id: string, t: string) => updateNote(`db-primary-${id}`, t), [updateNote]);
  const no = useCallback((id: string, t: string) => updateNote(`db-orm-${id}`, t), [updateNote]);

  return (
    <div className="h-full flex flex-col gap-1.5">
      <h2 className="text-lg font-semibold text-text">Database</h2>
      <div className="grid grid-cols-4 gap-1.5">
        {primary.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.database.primary === o.id}
            onSelect={hp} mode="single"
            optionalText={selections.notes[`db-primary-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => np(o.id, t)} />
        ))}
        <div className="col-span-full h-px bg-border my-0.5" />
        <div className="col-span-full text-xs text-muted font-mono tracking-wider">ORM / ODM</div>
        {orm.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.database.orm === o.id}
            onSelect={ho} mode="single"
            optionalText={selections.notes[`db-orm-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => no(o.id, t)} />
        ))}
      </div>
    </div>
  );
};





