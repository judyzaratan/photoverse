# ONYX-CRAB

> VR image viewer

## Team

  - __Product Owner__: sunny-g
  - __Scrum Master__: aggfr12
  - __Development Team Members__: mochicat8, owen-d

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

Go to our [demo](http://onyxcrab.azurewebsites.net) page to try it out or run the server locally:

```
node server/server.js
```

In Chrome on your desktop, enable [reverse port forwarding](https://developer.chrome.com/devtools/docs/remote-debugging). After you're set up, navigate to ```localhost:8080``` on your smartphone, upload and/or pick a picture, hoist the phone into your Cardboard and enjoy!

## Requirements

- Node 0.10.x
- a smartphone with a WebGL-enabled web browser
- a Google Cardboard (or other smartphone-capable headset)

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [ROADMAP.md](ROADMAP.md)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
