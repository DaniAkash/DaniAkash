export interface AIDocumentType {
  document_name: string;
  document_text: string;
}

export interface AIDocumentChunk {
  document_id: number;
  document_name: string;
  number_of_chunks: number;
  chunk_number: number;
  model_name: string;
  dtype: string;
  text: string;
  token_length: number;
}
