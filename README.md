# rakesh-roman-project1
A character catalogue for creative writing projects

SECTION 1: Running the Project
    Step 1: Acquire the Source Code
        - Clone the Main Project Repository from https://github.com/241209-JavaReactAWS/rakesh-roman-project1.git to your local machine using GitBash
    Step 2: Set up the H2 Database
        - Open the application.properties file through the path \rakesh-roman-project1\project1\src\main\resources\application.properties
        - Lines 5 and 7 represent example filepaths for the H2 database. Ensure both of these are commented out by inserting a '#' at the beginning of the line
        - To set up your own filepath, write a new line beginning with 'spring.datasource.url=jdbc:h2' followed by the full filepath to where
          your computer stored /rakesh-roman-project1, followed by /project1db (refer to the example filepaths in application.properties)
        - Navigate to the *rakesh-roman-project1\project1\src\main\java\com\revature\project1\Project1Application.java in the latest version of IntellijIDEA 
          and click the "Run Project1Application.java" button in the top right of the page
    Step 3: Set up the Webpage Environment
        - On the latest version of Visual Studio Code, install the LiveServer extension
        - Install Node Project Manager on your machine
        - Inside the *\rakesh-roman-project1\front_end\React\project1-react folder, open up the terminal and run the following commands, in order:
            1. npm install
            2. npm install axios
            3. npm install react-router-dom
            4. npm run dev
        - Follow the link provided to your terminal to open the webpage