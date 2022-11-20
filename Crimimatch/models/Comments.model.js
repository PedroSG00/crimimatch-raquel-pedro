const { Schema, model, Types } = require("mongoose");

const commentsSchema = new Schema(
    {
        author: {
            type: Types.ObjectId,
            ref: 'User'
        },

        text: {

            type: String,
            required: true
        }
    },

    {
        timestamps: true,
    }
);

const Comments = model("Comments", commentsSchema);

module.exports = Comments;



