import Telescope from 'meteor/nova:lib';
import Posts from 'meteor/nova:posts';
import Users from 'meteor/nova:users';

// shortcut
const gVF = Users.getViewableFields;

const resolvers = {
  Post: {
    commenters(post, args, context) {
      return post.commenters ? context.Users.find({_id: {$in: post.commenters}}, { fields: gVF(context.currentUser, Users) }).fetch() : [];
    },
    comments(post, args, context) {
      return post.commentCount ? context.Comments.find({postId: post._id}, { fields: gVF(context.currentUser, Comments) }).fetch() : [];
    },
  },
  Comment: {
    parentComment(comment, args, context) {
      return comment.parentCommentId ? context.Comments.findOne({_id: comment.parentCommentId}, { fields: gVF(context.currentUser, context.Comments) }) : null;
    },
    topLevelComment(comment, args, context) {
      return comment.topLevelCommentId ? context.Comments.findOne({_id: comment.topLevelCommentId}, { fields: gVF(context.currentUser, context.Comments) }) : null;
    },
    post(comment, args, context) {
      return context.Posts.findOne({_id: comment.postId}, { fields: gVF(context.currentUser, context.Posts) });
    },
    user(comment, args, context) {
      return context.Users.findOne({_id: comment.userId}, { fields: gVF(context.currentUser, context.Posts) });
    },
    upvoters(comment, args, context) {
      return comment.upvoters ? context.Users.find({_id: {$in: comment.upvoters}}, { fields: gVF(context.currentUser, context.Users) }).fetch() : [];
    },
    downvoters(comment, args, context) {
      return comment.downvoters ? context.Users.find({_id: {$in: comment.downvoters}}, { fields: gVF(context.currentUser, context.Users) }).fetch() : [];
    },
  },
  Query: {
    comments(root, args, context) {
      const options = {
        limit: 5,
        fields: gVF(context.currentUser, Comments)
      }
      return context.Comments.find({}, options).fetch();
    },
    comment(root, args, context) {
      return context.Comments.findOne({_id: args._id}, { fields: gVF(context.currentUser, Comments) });
    },
  }
};

Telescope.graphQL.addResolvers(resolvers);