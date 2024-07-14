import db from "../config/dbSetup.js";

const initializeDatabase = async () => {
    try {
        await db.connectDB();

        console.log("Database bootstrapped successfully.");
    } catch (error) {
        console.log("error", error);
    }
}

export default initializeDatabase;