interface DefaultResponse {
  status: string;
  message: string;
  data: any;
}

interface ErrorResponse {
  status: string;
  message: string;
  data: any;
}

export { DefaultResponse, ErrorResponse };
