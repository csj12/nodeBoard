const { ObjectId } = require("mongodb");

async function notice(collection) {
    const query = { content: new RegExp('', "i") };
    const cursor = collection
      .find(query)
      .sort({date: -1 });   // 역순으로 정렬
    const totalCount = await collection.count(query);
    const notice = await cursor.toArray();
    return notice;
}

async function getDetailNotice(collection, id) {
    return await collection.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $inc: { hits: 1 } },
        projectionOption
    );
}

const projectionOption = {
    projection: {
        // 프로젝션(투영) 결괏값에서 일부만 가져올 때 사용
        password: 0,
        "comments.password": 0,
    },
};

module.exports = {
    notice,
    getDetailNotice,
};