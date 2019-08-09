// const express = require('express')
import express from 'express';
import { Ads } from 'npm-ads';

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('Initialize', Ads.sizeMapping('super banner'))
  console.log('Example app listening on port 3000!')
})

