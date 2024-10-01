# Temperature and Humidity Data to Web

This project collects and visualizes temperature and humidity data using a DHT11 sensor connected to a Raspberry Pi 3 (RPI3). The main goal is to monitor the room's internal climate conditions and compare them with external data collected from a public API. 

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Code Examples](#code-examples)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Project Description

This project aims to visualize data for monitoring the internal temperature and humidity of a room. The DHT11 sensor collects internal data, while additional sensors will be integrated in the future. The project will also fetch external climate data from an API to allow for meaningful comparisons.

## Features

- Collects temperature and humidity data using a DHT11 sensor.
- Real-time updates on a web page.
- Simple RESTful API using Express.
- CORS enabled for cross-origin requests.
- Data sent to an `index.ejs` file through the `app.get` method.

## Requirements

- Raspberry Pi 3 (RPI3)
- DHT11 Sensor
- Node.js
- npm (Node Package Manager)
