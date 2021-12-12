import { gql } from "@apollo/client";

const ADD_COMMENT = gql`
  mutation ADD_COMMENT($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
    }
  }
`;

export default ADD_COMMENT;
