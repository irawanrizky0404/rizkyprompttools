"use client";

import { useCallback, type FC } from "react";
import { Triangle, Cloud, Monitor, Globe, Container, Box, HardDrive, GitBranch, GitFork, Construction, Layout, CloudLightning, Train, Eye, Sailboat, Cloudy, Server, Shield, Repeat, CheckCircle, Workflow, GanttChart, Group, Notebook, Cpu } from "lucide-react";
import { SelectableCard } from "@/components/selectable-card";
import { useWizardStore } from "@/store/useWizardStore";
import type { SelectableCardOption } from "@/types/wizard";

const platforms: SelectableCardOption[] = [
  { id: "vercel", title: "Vercel", description: "Edge functions", icon: Triangle },
  { id: "netlify", title: "Netlify", description: "Serverless", icon: Layout },
  { id: "cloudflare", title: "Cloudflare", description: "Edge network", icon: CloudLightning },
  { id: "railway", title: "Railway", description: "Full-stack", icon: Train },
  { id: "render", title: "Render", description: "Managed Postgres", icon: Eye },
  { id: "fly-io", title: "Fly.io", description: "Edge compute", icon: Sailboat },
  { id: "aws", title: "AWS", description: "EC2, Lambda, RDS", icon: Cloud },
  { id: "azure", title: "Azure", description: "App Service, AKS", icon: Monitor },
  { id: "gcp", title: "GCP", description: "Cloud Run, GKE", icon: Globe },
  { id: "digitalocean", title: "DO", description: "Droplets", icon: Cloudy },
  { id: "docker", title: "Docker", description: "Containers", icon: Container },
  { id: "kubernetes", title: "K8s", description: "Orchestration", icon: Box },
  { id: "static", title: "Static", description: "S3, Pages", icon: HardDrive },
];

const cicd: SelectableCardOption[] = [
  { id: "github-actions", title: "GitHub Actions", description: "CI/CD", icon: GitBranch },
  { id: "gitlab", title: "GitLab CI", description: "Pipelines", icon: GitFork },
  { id: "circleci", title: "CircleCI", description: "Parallel", icon: Repeat },
  { id: "jenkins", title: "Jenkins", description: "Self-hosted", icon: Construction },
  { id: "argocd", title: "ArgoCD", description: "GitOps", icon: Workflow },
];

export const DeployStep: FC = () => {
  const { selections, updateSelection, updateNote } = useWizardStore();
  const hp = useCallback((id: string) => updateSelection("deploy", { ...selections.deploy, platform: id }), [selections.deploy, updateSelection]);
  const hc = useCallback((id: string) => {
    const arr = selections.deploy.ciCd.includes(id) ? selections.deploy.ciCd.filter((x) => x !== id) : [...selections.deploy.ciCd, id];
    updateSelection("deploy", { ...selections.deploy, ciCd: arr });
  }, [selections.deploy, updateSelection]);
  const np = useCallback((id: string, t: string) => updateNote(`deploy-platform-${id}`, t), [updateNote]);
  const nc = useCallback((id: string, t: string) => updateNote(`deploy-cicd-${id}`, t), [updateNote]);

  return (
    <div className="h-full flex flex-col gap-1.5">
      <h2 className="text-lg font-semibold text-text">Deployment</h2>
      <div className="grid grid-cols-4 gap-1.5">
        {platforms.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.deploy.platform === o.id}
            onSelect={hp} mode="single"
            optionalText={selections.notes[`deploy-platform-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => np(o.id, t)} />
        ))}
        <div className="col-span-full h-px bg-border my-0.5" />
        <div className="col-span-full text-xs text-muted font-mono tracking-wider">CI/CD</div>
        {cicd.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.deploy.ciCd.includes(o.id)}
            onSelect={hc} mode="multiple"
            optionalText={selections.notes[`deploy-cicd-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nc(o.id, t)} />
        ))}
      </div>
    </div>
  );
};





