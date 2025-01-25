const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "john_doe",
        content: "Excited to start my new job today! #NewBeginnings"
    },
    {
        id: uuidv4(),
        username: "jane_smith",
        content: "Just baked the most delicious chocolate chip cookies 🍪✨"
    },
    {
        id: uuidv4(),
        username: "traveler42",
        content: "Hiking in the Rockies was a breathtaking experience! 🏞️ #NatureLover"
    },
    {
        id: uuidv4(),
        username: "tech_guru",
        content: "The new smartphone I reviewed today has some amazing features! 📱"
    },
    {
        id: uuidv4(),
        username: "foodie99",
        content: "Tried the new sushi place in town. Absolutely loved it! 🍣 #FoodieLife",
    },
    {
        id: uuidv4(),
        username: "john_doe",
        content: "Excited to start my new job today! #NewBeginnings"
    },
    {
        id: uuidv4(),
        username: "jane_smith",
        content: "Just baked the most delicious chocolate chip cookies 🍪✨"
    },
    {
        id: uuidv4(),
        username: "traveler42",
        content: "Hiking in the Rockies was a breathtaking experience! 🏞️ #NatureLover"
    },
    {
        id: uuidv4(),
        username: "tech_guru",
        content: "The new smartphone I reviewed today has some amazing features! 📱"
    },
    {
        id: uuidv4(),
        username: "foodie99",
        content: "Tried the new sushi place in town. Absolutely loved it! 🍣 #FoodieLife",
    },
    {
        id: uuidv4(),
        username: "john_doe",
        content: "Excited to start my new job today! #NewBeginnings"
    },
    {
        id: uuidv4(),
        username: "jane_smith",
        content: "Just baked the most delicious chocolate chip cookies 🍪✨"
    },
    {
        id: uuidv4(),
        username: "traveler42",
        content: "Hiking in the Rockies was a breathtaking experience! 🏞️ #NatureLover"
    },
    {
        id: uuidv4(),
        username: "tech_guru",
        content: "The new smartphone I reviewed today has some amazing features! 📱"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    const newPost = { id, username, content };
    posts.push(newPost);
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs", { post });
});
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(newContent);
    res.redirect("/posts");
    // res.send("patch request working!");
});
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
    //  res.send("edit request working!");
});
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id != p.id);
    res.redirect("/posts");
});
app.listen(port, (req, res) => {
    console.log("Server is running on port " + port);
});