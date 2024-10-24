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




Project Structure 🗂️
/src
/components: Contains reusable UI components.
/pages: Pages for different views (Login, Signup, Dashboard).
/context: Context for handling authentication and role-based access.
/types: TypeScript interfaces for handling props and data structures.
/assets: Images and static assets.
## API Endpoints (Planned/Under Development) 📡

| Method | Endpoint              | Description                                   | Status             |
|--------|-----------------------|-----------------------------------------------|--------------------|
| `POST` | `/api/login`           | Login to the system                           | **Planned**        |
| `POST` | `/api/signup`          | Register a new user                           | **Planned**        |
| `GET`  | `/api/donations`       | Retrieve all available food donations         | **In Progress**    |
| `POST` | `/api/donations`       | Create a new food donation offer              | **In Progress**    |
| `GET`  | `/api/donations/:id`   | Retrieve details of a specific donation offer | **Planned**        |
| `PUT`  | `/api/donations/:id`   | Update an existing food donation offer        | **Planned**        |
| `DELETE` | `/api/donations/:id` | Delete a food donation offer                  | **Planned**        |

### Notes
- **Planned**: These endpoints are conceptualized but have not yet been implemented.
- **In Progress**: These endpoints are currently being developed or tested.

Once the backend is fully implemented, this table can be updated to reflect the actual API structure.



Contributing 🤝
Contributions are welcome! Please open an issue or submit a pull request for any improvements.

License 📜
This project is licensed under the MIT License - see the LICENSE file for details.

Contact 💬
For any queries or discussions, feel free to reach out to:

Author: Atharva Mahajan
Email: atharvamahajan2004@gmail.com
GitHub: Atharva Mahajan
