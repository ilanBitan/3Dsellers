const express = require('express');
const cors = require('cors');
const app = require('./src/app');  // importing the app configurations

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
