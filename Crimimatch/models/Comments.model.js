const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
    {
        author: {
            type: mongoose.Types.ObjectId,
            ref: User
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

const Comments = model("Commets", commentsSchema);

module.exports = Comments;



