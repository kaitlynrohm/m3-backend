# AI Chatbot - Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Google Generative AI](https://img.shields.io/badge/Google%20Generative%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)


## Description

This is a backend application designed to simulate mock job interviews using Google Generative AI. It generates interview questions and provides feedback based on user input for a specified job title. This tool is intended to help users practice their interview skills and receive constructive feedback.

In addition to the interviewer functionality, the application also includes a chatbot that interacts with customers, asks relevant questions, and recommends the best insurance policy type based on their responses.

This backend needs to be run in conjunction with the project frontend, which is located at [AI Chatbot Frontend](https://github.com/nicolegunn/ai-chatbot-frontend.git).

## Features

- Generate interview questions based on job title
- Provide feedback on user responses
- Store and retrieve user interview sessions
- Chatbot that interacts with customers and recommends insurance policies

## Technologies Used

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Google Generative AI](https://img.shields.io/badge/Google%20Generative%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## Installation and Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/nicolegunn/ai-chatbot-backend.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd ai-chatbot-backend
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Create a .env file in the root directory and add your environment variables**:
   ```env
   PORT=4000
   GOOGLE_API_KEY=<your-google-api-key>
   ```
5. **Run the application**:
   ```sh
   npm run dev
   ```
6. **Clone and setup the frontend**:  
   The backend needs to be run in conjunction with the frontend, which is located at [AI Chatbot Frontend](https://github.com/nicolegunn/ai-chatbot-frontend.git).

   ```sh
   git clone https://github.com/nicolegunn/ai-chatbot-frontend.git
   cd ai-chatbot-frontend
   npm install
   npm start
   ```

## Docker

The application is also dockerized and available on the docker branch. To use Docker, follow these steps:

1. Checkout the docker branch:
   ```sh
   git checkout docker
   ```
2. Build and run the Docker containers:
   ```sh
   docker-compose up --build
   ```

## Contributors

### **Nicole Gunn**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nicole-gunn-a582ba23b/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nicolegunn)

### **Kaitlyn Rohm**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kaitlyn-rohm-083612307/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kaitlynrohm)

### **Cyrus Wen**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cyrus-wen/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cyy963)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
