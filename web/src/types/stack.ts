// Stack.types.ts
export type StackItem = {
  icon?: string;
  title?: string;
  description?: string;
};

export type StackProps = {
  title?: string; 
  stackData: StackItem[];
  showSearch?: boolean;
};