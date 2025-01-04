export interface Response {
    query: {
      search: [
        {
          title: string,
          snippet: string,
          wordcount: number,
        }
      ]
    }
  }