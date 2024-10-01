import express from "express"
import cors from "cors"
import sensor from "node-dht-sensor"

const app = express();
const _PORT = 3000;

const DHT_TYPE = 11; // DHT11
const DHT_PIN = 17;

app.use(express.static("public"))

app.get("/", async(req, res) => {
    try {
        const data = await readDHT11()
        console.log(data)
        res.render('index.ejs', data)
    } catch (error) {
        console.log(error)
    }

})

app.get("/sensor-data", async (req, res) => {
    try {
        const data = await readDHT11();
        res.json(data); // Send data as JSON
    } catch (error) {
        console.log(error);
        res.status(500).send("Error reading sensor data");
    }
});

app.get("/time-data", async (req,res) =>{
        const serverTime = new Date(); // Get the current date and time
    res.json({ time: serverTime.toISOString() }); // Send it as JSON
})


app.listen(_PORT, () => {
    console.log(`Server is running on port ${_PORT}`)
})

const readDHT11 = () => {
    console.log("pointer is here")
    return new Promise((resolve, reject) => {
        sensor.read(DHT_TYPE, DHT_PIN, (err, temperature, humidity) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(temperature, humidity)
                resolve({ temperature, humidity });
            }
        });
    });
};