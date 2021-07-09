const { getComponentSource } = require("../../../../../lib/helpers");

module.exports = (request, response) => {
    response.addComponent("title", "content", getComponentSource("cms/components/admin/title.js"), { "title": "Create new page" }, 1);
}