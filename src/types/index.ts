import * as monaco from "monaco-editor";

export interface Theme {
  id: string;
  label: string;
  color: string;
}

export interface Language {
  id: string;
  label: string;
  logoPath: string;
  monacoLanguage: string;
  defaultCode: string;
  pistonRuntime: LanguageRuntime;
}

export interface LanguageRuntime {
  language: string;
  version: string;
}

export interface ExecuteCodeResponse {
  compile?: {
    output: string;
  };
  run?: {
    output: string;
    stderr: string;
  };
}

export interface ExecutionResult {
  code: string;
  output: string;
  error: string | null;
}

export interface CodeEditorState {
  language: string;
  output: string;
  isRunning: boolean;
  error: string | null;
  theme: string;
  fontSize: number;
  editor: monaco.editor.IStandaloneCodeEditor | null;
  executionResult: ExecutionResult | null;

  setEditor: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  getCode: () => string;
  setLanguage: (language: string) => void;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: number) => void;
  runCode: () => Promise<void>;
}

export interface Snippet {
  id: string;
  createdAt: number;
  userId: string;
  language: string;
  code: string;
  title: string;
  userName: string;
};

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  createdAt: Date;
  snippetId: string;
  content: string;
};
