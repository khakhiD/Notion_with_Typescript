export interface DocumentDetail {
  title: string
  content: string
}

export interface DocumentDetails {
  id: string
  title: string
  content: string
}

export interface Document {
  id: number
  title: string
  documents: Document[]
}

export type Documents = Document[]
