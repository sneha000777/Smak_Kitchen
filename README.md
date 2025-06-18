
# 🍽️ Recipe Sharing Website

A colorful, dynamic, and user-friendly recipe sharing platform built using **HTML, CSS, JavaScript, Node.js, and Express**. This website allows users to add their own recipes and view all recipes in a gallery-style interface with image previews, search functionality, and clean UI design.

---

## 🎯 Features

- 🔥 **Start Page** with option to Add or View Recipes
- 📝 **Add Recipe** form with fields for title, ingredients, instructions, and image URL
- 📋 **Recipe Gallery** with real-time listing of all recipes
- 🔍 **Search Bar** to filter recipes by name or ingredients
- 🖼️ **Image support** for every recipe
- 🧭 **Navigation** with back buttons for smooth user flow
- 💾 Backend data storage using `recipes.json`

---

## 🛠️ Tech Stack

| Frontend      | Backend     | Others         |
|---------------|-------------|----------------|
| HTML5         | Node.js     | VS Code        |
| CSS3          | Express.js  | JSON for storage |
| JavaScript    |             |                |

---

## 📂 Project Structure

```

project-root/
├── public/
│   ├── index.html       # View recipes
│   ├── add.html         # Add a new recipe
│   ├── start.html       # Landing page (first screen)
│   ├── style.css        # Styling for all pages
│   ├── script.js        # View recipes script
│   └── add.js           # Add recipe script
├── server/
│   ├── server.js        # Express backend
│   └── recipes.json     # Stores recipe data

````

---

## 🚀 How to Run the Project

### 1. Clone or Download the Repository

```bash
git clone https://github.com/your-username/recipe-sharing-website.git
cd recipe-sharing-website
````

### 2. Install Dependencies

```bash
cd server
npm install express
```

### 3. Start the Server

```bash
node server.js
```

### 4. Open in Browser

Go to:

```
http://localhost:3000/
```

---

## 📸 Screenshots

> You can add screenshots here like:
> ![Start Page](screenshots/start-page.png)

---

## ✨ Customization Ideas

* Add categories (e.g., Breakfast, Lunch, Dessert)
* Allow image uploads
* Save recipes with user accounts
* Responsive design for mobile devices

---

## 🤝 Acknowledgments

Made with ❤️ for a website-making competition.

---

## 🏁 License

This project is free to use for educational and non-commercial purposes.


