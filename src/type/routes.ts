interface routePath {
  id: number;
  path: string;
  component: React.FC;
  auth: boolean;
  icon: React.FC;
}

export interface arrayPath {
  arrayOfObject: routePath[];
}
