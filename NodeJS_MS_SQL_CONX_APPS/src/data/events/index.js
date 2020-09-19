"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
    const sqlQueries = await utils.loadSqlQueries("events");

    const getEvents =asyns userId =>{
        const cnx =await getConnection();
        const request = wait cnx.request();
        request.input("userId",sql.VarChar(50),userId);
        return request.query(sqlQueries.getEvents);
    }
}