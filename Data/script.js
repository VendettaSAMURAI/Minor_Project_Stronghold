//  preloader here
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("preloader");
    setTimeout(function () {
        loader.style.display = "none";
    }, 1000); 
});

const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

// Define an endpoint to launch Streamlit
app.get('/launchStreamlit', (req, res) => {
    // Execute the command to launch Streamlit
    exec('streamlit run app.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return res.status(500).send('Failed to launch Streamlit');
        }
        console.log(`Streamlit launched: ${stdout}`);
        res.send('Streamlit launched');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
