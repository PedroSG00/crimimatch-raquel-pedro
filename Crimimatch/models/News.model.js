const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
    {
        header: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            // required: true
        },

        body: {
            type: String,
            required: true
        },

        link: {
            type: String,
        },

        // comments: {
        //     type: mongoose.Types.ObjectId,
        //     ref: 'Comments'
        // },
    },

    {
        timestamps: true,
    }
);

const News = model("News", newsSchema);

module.exports = News;





