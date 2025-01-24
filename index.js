const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "john_doe",
        content: "Excited to start my new job today! #NewBeginnings"
    },
    {
        username: "jane_smith",
        content: "Just baked the most delicious chocolate chip cookies 🍪✨"
    },
    {
        username: "traveler42",
        content: "Hiking in the Rockies was a breathtaking experience! 🏞️ #NatureLover"
    },
    {
        username: "tech_guru",
        content: "The new smartphone I reviewed today has some amazing features! 📱"
    },
    {
        username: "foodie99",
        content: "Tried the new sushi place in town. Absolutely loved it! 🍣 #FoodieLife",
    },
    {
        username: "john_doe",
        content: "Excited to start my new job today! #NewBeginnings"
    },
    {
        username: "jane_smith",
        content: "Just baked the most delicious chocolate chip cookies 🍪✨"
    },
    {
        username: "traveler42",
        content: "Hiking in the Rockies was a breathtaking experience! 🏞️ #NatureLover"
    },
    {
        username: "tech_guru",
        content: "The new smartphone I reviewed today has some amazing features! 📱"
    },
    {
        username: "foodie99",
        content: "Tried the new sushi place in town. Absolutely loved it! 🍣 #FoodieLife",
    },
    {
        username: "john_doe",
        content: "Excited to start my new job today! #NewBeginnings"
    },
    {
        username: "jane_smith",
        content: "Just baked the most delicious chocolate chip cookies 🍪✨"
    },
    {
        username: "traveler42",
        content: "Hiking in the Rockies was a breathtaking experience! 🏞️ #NatureLover"
    },
    {
        username: "tech_guru",
        content: "The new smartphone I reviewed today has some amazing features! 📱"
    },
    {
        username: "foodie99",
        content: "Tried the new sushi place in town. Absolutely loved it! 🍣 #FoodieLife",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    const newPost = { username, content };
    posts.push(newPost);
    res.redirect("/posts");
});


app.listen(port, (req, res) => {
    console.log("Server is running on port " + port);
});