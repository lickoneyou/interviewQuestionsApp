export interface DataItem {
  id: string,
  title: string,
  jsx: React.JSX.Element
}

export interface Data {
  [title: string]: DataItem;
}

export interface FullData {
  [title: string]: Data;
}