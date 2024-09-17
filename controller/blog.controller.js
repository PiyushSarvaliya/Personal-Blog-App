const blog = require("../modals/blog.modal")

const blogformui = (req, res) => {
    res.render("blogform")
}

const createblog = async (req, res) => {
    let { title, content, img } = req.body

    let data = await blog.create(req.body)
    res.send("create successfully")
}

const home = async(req, res) => {
    res.render("home")
}


const allblog = async (req, res) => {
    let data = await blog.find().sort({createdAt : -1})
    res.send(data)
}

const singleblog = async (req, res) => {
    let { id } = req.params

    let singleBlog = await blog.findById(id)
    res.render("singleblog", { singleBlog })
}

const deletedata = async (req, res) => {
    let { id } = req.params;
    await blog.findByIdAndDelete(id);
    res.redirect("/blog/home");
};

const editdata = async (req, res) => {
    let { id } = req.params;
    const singleBlog = await blog.findById(id);

    res.render("edit", { singleBlog });
};


const updatedata = async (req, res) => {
    let { id } = req.params;
    let listing = await blog.findByIdAndUpdate(id, req.body);
    console.log(listing);

    res.redirect(`/blog/singleBlog/${ id }`);
};
module.exports = { blogformui, createblog, home, allblog, singleblog, deletedata, editdata , updatedata}