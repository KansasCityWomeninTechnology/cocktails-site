export interface FormData {
  fieldName: string;
  fieldValue: string | null;
}

export type SubscribeResult = 'SUCCESS' | 'ERROR';

export interface SubscribeResponse {
  result: SubscribeResult;
  message: string;
}
