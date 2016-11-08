import Telescope from 'meteor/nova:lib';
import Users from "meteor/nova:users";
import Posts from "meteor/nova:posts";
import Comments from "meteor/nova:comments";

const alwaysPublic = user => true;

Users.addField([
  /**
    An array containing comments upvotes
  */
  {
    fieldName: 'nova_upvotedComments',
    fieldSchema: {
      type: [Telescope.schemas.votes],
      publish: false,
      optional: true,
      viewableIf: alwaysPublic,
      resolveAs: 'nova_upvotedComments: [Vote]',
    }
  },
  /**
    An array containing posts upvotes
  */
  {
    fieldName: 'nova_upvotedPosts',
    fieldSchema: {
      type: [Telescope.schemas.votes],
      publish: false,
      optional: true,
      viewableIf: alwaysPublic,
      resolveAs: 'nova_upvotedPosts: [Vote]',
    }
  },
  /**
    An array containing comment downvotes
  */
  {
    fieldName: 'nova_downvotedComments',
    fieldSchema: {
      type: [Telescope.schemas.votes],
      publish: false,
      optional: true,
      viewableIf: alwaysPublic,
      resolveAs: 'nova_downvotedComments: [Vote]',
    }
  },
  /**
    An array containing posts downvotes
  */
  {  
    fieldName: 'nova_downvotedPosts',
    fieldSchema: {
      type: [Telescope.schemas.votes],
      publish: false,
      optional: true,
      viewableIf: alwaysPublic,
      resolveAs: 'nova_downvotedPosts: [Vote]',
    }
  },
]);

Posts.addField([
  /**
    How many upvotes the post has received
  */
  {
    fieldName: "upvotes",
    fieldSchema: {
      type: Number,
      optional: true,
      publish: true,
      defaultValue: 0,
      viewableIf: alwaysPublic,
    }
  },
  /**
    An array containing the `_id`s of the post's upvoters
  */
  {
    fieldName: "upvoters",
    fieldSchema: {
      type: [String],
      optional: true,
      publish: true,
      viewableIf: alwaysPublic,
      resolveAs: 'upvoters: [User]',
    }
  },
  /**
    How many downvotes the post has received
  */
  {
    fieldName: "downvotes",
    fieldSchema: {
      type: Number,
      optional: true,
      publish: true,
      defaultValue: 0,
      viewableIf: alwaysPublic,
    }
  },
  /**
    An array containing the `_id`s of the post's downvoters
  */
  {
    fieldName: "downvoters",
    fieldSchema: {
      type: [String],
      optional: true,
      publish: true,
      viewableIf: alwaysPublic,
      resolveAs: 'downvoters: [User]',
    }
  },
  /**
    The post's base score (not factoring in the post's age)
  */
  {
    fieldName: "baseScore",
    fieldSchema: {
      type: Number,
      decimal: true,
      optional: true,
      publish: true,
      defaultValue: 0,
      viewableIf: alwaysPublic,
    }
  },
  /**
    The post's current score (factoring in age)
  */
  {
    fieldName: "score",
    fieldSchema: {
      type: Number,
      decimal: true,
      optional: true,
      publish: true,
      defaultValue: 0,
      viewableIf: alwaysPublic,
    }
  },
]);

Comments.addField([
  /**
    The number of upvotes the comment has received
  */
  {
    fieldName: "upvotes",
    fieldSchema: {
      type: Number,
      optional: true,
      publish: true,
      defaultValue: 0,
      viewableIf: alwaysPublic,
    }
  },
  /**
    An array containing the `_id`s of upvoters
  */
  {
    fieldName: "upvoters",
    fieldSchema: {
      type: [String],
      optional: true,
      publish: true,
      viewableIf: alwaysPublic,
      resolveAs: 'upvoters: [User]',
    }
  },
  /**
    The number of downvotes the comment has received
  */
  {
    fieldName: "downvotes",
    fieldSchema: {
      type: Number,
      optional: true,
      publish: true,
      defaultValue: 0,
      viewableIf: alwaysPublic,
    }
  },
  /**
    An array containing the `_id`s of downvoters
  */
  {
    fieldName: "downvoters",
    fieldSchema: {
      type: [String],
      optional: true,
      publish: true,
      viewableIf: alwaysPublic,
      resolveAs: 'downvoters: [User]',
    }
  },
  /**
    The comment's base score (not factoring in the comment's age)
  */
  {
    fieldName: "baseScore",
    fieldSchema: {
      type: Number,
      decimal: true,
      optional: true,
      publish: true,
      defaultValue: 0,
      viewableIf: alwaysPublic,
    }
  },
  /**
    The comment's current score (factoring in age)
  */
  {
    fieldName: "score",
    fieldSchema: {
      type: Number,
      decimal: true,
      optional: true,
      publish: true,
      defaultValue: 0,
      viewableIf: alwaysPublic,
    }
  },
]);

