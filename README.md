# rakesh-roman-project1
A character catalogue for creative writing projects

SECTION 1: Running the Project
    Step 1: Acquire the Source Code
        - Clone the Main Project Repository from https://github.com/241209-JavaReactAWS/rakesh-roman-project1.git to your local machine using GitBash
    Step 2: Set up the H2 Database
        - Open the application.properties file through the path                                 
        \rakesh-roman-project1\project1\src\main\resources\application.properties
        - Lines 5 and 7 represent example filepaths for the H2 database. Ensure both of these are commented out by inserting a '#' at the beginning of the line
        - To set up your own filepath, write a new line beginning with 'spring.datasource.url=jdbc:h2' followed by the full filepath to where
          your computer stored \rakesh-roman-project1, followed by \project1_db (refer to the example filepaths in application.properties)
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
        - Follow the link (should be http://localhost:5173/) provided to your terminal to open the webpage

SECTION 2: Basic Operations
    SECTION 2a: User Operations
        1. Registering a New Account
            After completing the steps to set up the running environment and clicking the http://localhost:5173/ link, you will be
            brought to the Login Menu. If you are a new user, type in your username and password, and hit the "New User" button. This
            will persist your username and password to the database, allowing you to log in
        2. Logging In
            Type your Username (case sensitive) and password (case sensitive) into their respective fields and hit the "Log In" button.
            You will be brought to your profile, and you will have access to the Navigation Bar.
        3. Your Profile
            This is your home page, containing your username, your created characters and the option to delete your account. See Section 2b for instructions on creating your first character!
        4. The Navigation Bar
            The Navigation Bar is how you access the various functionalities of the website, such as logging out, opening the Search Menu,
            viewing your Profile, and accessing the Character Creator.
        5. Admin Privileges
            Admin accounts have certain additional privileges. They can ban and unban users through the Search Menu, see all users (banned
            or unbanned), and see all characters in the database, including private ones. The only way to create an admin account is 
            directly through the H2 Console, using the following command (choose your own username and password):
            INSERT INTO USERS (IS_BANNED, ACC_TYPE, MATURE_CONTENT_VISIBLE, PASSWORD, USERNAME) VALUES (false, true, USERS 0, 'Admin1234', 'NewAdmin') 

    SECTION 2b: Character Operations
        1. Creating a Character
            At the far left end of the Navigation Bar is the "Create" button. Clicking this button will open the 
            Character Creation menu. All fields marked with (R) are required
                - (R) Name:         The name of your character
                
                - (R) Age:          A numeric field for your character's age
                
                - (R) Description:  A brief summary of important character details
                
                - (R) Setting:      A short field where you can list what setting or work your character is from

                - Public:           An optional setting that allows other users to find your character through a search.
                                    Characters are private by default. Admins can see private characters.
                
                - Mature:           An optional setting that can be applied to characters that contain graphic or disturbing
                                    material that may not be suitable for all Users. Defaults to false
        
        2. Searching Characters
            The second item on the Navigation Bar is the Search button. This will open the Search Menu, which will allow you to
            search for users or public characters. Mature content will be hidden or visible according to the Mature Content Visibility
            setting in your database entry. Banned users are only visible to Admins, and Private characters are only visible to their Creator
            and to Admins.
        
        3. Viewing your Characters
            In your Profile, you will see a list of all your created characters in tidy, short cards that list their name, setting, and
            age. You can view their description by clicking the "More" button in the bottom left of their character card.
        
        4. Updating a Character
            To edit an existing character, navigate to your Profile and find the character's card in the list of your created characters.
            Clicking the "Edit" button in the bottom left of the character card will open the Edit Menu. The Edit Menu is similar to
            Character Creation menu, but with the fields already populated by the character's existing information. Simply update whatever
            fields you need to, and hit the "Confirm Changes" button in the bottom left to save your changes.
        
        5. Deleting a Character
            A character can be deleted from the Edit Menu by clicking the "Delete" button in the bottom left of the menu. This will
            permanently delete the character and return you to your Profile