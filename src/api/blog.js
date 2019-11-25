import session from "./session";

export default {
    // loadAccount(accountId) {
    //     return session
    //       .get(`/accounts/${accountId}/?payment_link=true`)
    //       .then(res => {
    //         return res.data;
    //       })
    //       .catch(err => err);
    //   },

    getBlogs(){
        return session.get(`/blogs.json`).then(res => res.data.data)
    }
}
