# Food-Share 🍽️

**Food-Share** is a web platform that connects event organizers or restaurants with local shelters to donate leftover food. The system allows organizers to post food donation offers, and shelters or NGOs can claim the donations based on their needs.

## Features ✨

### Organizer Role:
- **Post Donation**: Organizers can post details of food donations including event name, location, quantity, and availability.
- **View Past Donations**: Organizers can track their past donations and the status of each.
- **Profile Management**: Organizers can view and update their profile.

### Shelter/NGO Role:
- **View Available Donations**: Shelters/NGOs can browse through available food donations and claim them.
- **View Past Claims**: Track past donations that were claimed.
- **Profile Management**: Shelters/NGOs can view and update their profile.

### Common Features:
- **JWT-based Authentication**: Secure login and role-based access.
- **Responsive Dashboard**: The layout dynamically changes based on the role of the user.
- **User-Friendly Interface**: Designed with a professional, clean UI.

## Technologies Used 🛠️

- **Frontend**: React.js with TypeScript
- **Backend**: Spring Boot (Java)
- **Authentication**: JWT (JSON Web Token)
- **Database**: MySQL
- **CSS Framework**: Tailwind CSS
- **Routing**: React Router & Wouter

## Installation & Setup 🚀

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [MySQL](https://www.mysql.com/)

### Clone the Repository
```bash
git clone https://github.com/Atharva-Mahajan-1104/Food-Share.git
cd Food-Share
Project Structure 🗂️
/src
/components: Contains reusable UI components.
/pages: Pages for different views (Login, Signup, Dashboard).
/context: Context for handling authentication and role-based access.
/types: TypeScript interfaces for handling props and data structures.
/assets: Images and static assets.
API Endpoints 📡
Method	Endpoint	Description
POST	/api/login	Login to the system
POST	/api/signup	Register a new user
GET	/api/donations	Get all available donations
POST	/api/donations	Post a new food donation
GET	/api/donations/:id	Get details of a specific donation
PUT	/api/donations/:id	Update donation details
DELETE	/api/donations/:id	Delete a specific donation
Screenshots 🖼️
Dashboard Overview (Organizer)

Post Donation

Contributing 🤝
Contributions are welcome! Please open an issue or submit a pull request for any improvements.

License 📜
This project is licensed under the MIT License - see the LICENSE file for details.

Contact 💬
For any queries or discussions, feel free to reach out to:

Author: Atharva Mahajan
Email: atharvamahajan2004@gmail.com
GitHub: Atharva Mahajan
