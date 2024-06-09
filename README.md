# WebPlant

## Introduction

This repository contains the code for the WebPlant project. The following guide will help you set up the development environment on Windows, Linux, and macOS.

## Prerequisites

Before you begin, ensure you have the following installed:
- Git
- Node.js and npm
- Python (optional, if your project requires it)

## Setup Instructions

### Windows

1. **Install Git**:
   - Download and install Git from [git-scm.com](https://git-scm.com/download/win).
   - Follow the installation instructions and set up Git with your user information.

2. **Install Node.js and npm**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/). This will also install npm (Node Package Manager).
   - Choose the LTS version for better stability.

3. **Clone the Repository**:
   - Open Command Prompt or PowerShell and run:
     ```bash
     git clone https://github.com/johnbtitor/WebPlant.git
     cd WebPlant
     ```

4. **Install Project Dependencies**:
   - In the project directory, run:
     ```bash
     npm install
     ```

5. **Install Python (if needed)**:
   - Download and install Python from [python.org](https://www.python.org/downloads/).
   - Add Python to your PATH during installation.

### Linux

1. **Install Git**:
   - Open a terminal and run:
     ```bash
     sudo apt update
     sudo apt install git
     ```

2. **Install Node.js and npm**:
   - Install Node.js using the NodeSource binary distributions:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
     sudo apt install -y nodejs
     ```

3. **Clone the Repository**:
   - In the terminal, run:
     ```bash
     git clone https://github.com/johnbtitor/WebPlant.git
     cd WebPlant
     ```

4. **Install Project Dependencies**:
   - In the project directory, run:
     ```bash
     npm install
     ```

5. **Install Python (if needed)**:
   - In the terminal, run:
     ```bash
     sudo apt install python3
     ```

### macOS

1. **Install Git**:
   - Open Terminal and install Git using Homebrew:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     brew install git
     ```

2. **Install Node.js and npm**:
   - Install Node.js using Homebrew:
     ```bash
     brew install node
     ```

3. **Clone the Repository**:
   - In the terminal, run:
     ```bash
     git clone https://github.com/johnbtitor/WebPlant.git
     cd WebPlant
     ```

4. **Install Project Dependencies**:
   - In the project directory, run:
     ```bash
     npm install
     ```

5. **Install Python (if needed)**:
   - In the terminal, run:
     ```bash
     brew install python
     ```

## Common Steps

1. **Run the Project**:
   - After installing the dependencies, you can run the project:
     ```bash
     npm start
     ```

2. **Configure Environment Variables (if applicable)**:
   - Check if there are any environment variables required by the project and set them up accordingly. Typically, these are listed in a `.env.example` file.

By following these steps, you should be able to set up the `WebPlant` repository on Windows, Linux, and macOS.

## Contributing

Feel free to fork this repository, make changes, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

