export interface CommentInterface {
  comment: string,
  email: string
}

export interface RequestCommentInterface {
  courseId: number,
  comment: string,
  email: string
}

export interface ResponseCommentInterface {
  id: number,
  comments: CommentInterface[]
}
