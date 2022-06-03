export interface ToastrPayload {
  title: string;
  message: string;
}

export interface NotifyPayload extends ToastrPayload {
  icon: string;
  status: string;
}
