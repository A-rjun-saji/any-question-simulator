# ⚡ Any Question Simulator

A **web-based exam simulator** that allows users to **practice any set of questions interactively** — ideal for certification prep, cybersecurity training, or general quizzes.

---

## 🧩 Introduction

**Any Question Simulator** is a lightweight web app built for practicing questions in a fun, interactive way.
You can **pick any bulk or few questions**, convert them into JSON format, and add them into `questions.js` and `answers.js`.
Then, simulate or practice exams with animations, sound, instant feedback, and score tracking.

---

## ✨ Features

* 🎮 **Exam Simulation Mode** – Practice questions like a real test
* 💾 **JSON-Based Question Bank** – Add your own question sets easily
* 🌌 **Dynamic Background Animations** – Futuristic visual effects
* 🎵 **Background Music** – Immersive audio from `music.js`
* ✅ **Instant Feedback** –

  * Green = Correct
  * Red = Wrong
* 🧠 **Score Tracking** – Keeps total correct count
* 🔍 **Review Mode** – See the right answers after finishing

---

## 🗂 Folder Structure

```
quiz-app/
├── video/
│   ├── test.mp4
│   ├── test-1.mp4
│   ├── test-2.mp4
│   └── test-3.mp4
├── index.html
├── questions.js
├── answers.js
├── background.js
├── music.js

```

---

## ⚙️ Setup Instructions

### 1. Open the Project

* Launch **VS Code**
* Go to `File → Open Folder → quiz-app`

### 2. Check JS File Links

Ensure your `index.html` includes the following:

```html
<script src="questions.js"></script>
<script src="answers.js"></script>
<script src="music.js"></script>
<script src="background.js"></script>
```

### 3. Run with Live Server

* Install **Live Server** extension in VS Code
* Right-click `index.html` → **Open with Live Server**

---

## 🧠 Adding Questions

Edit `questions.js`:

```js
const QUESTIONS = [
  {
    "id": 1,
    "q": "The road color is blue or white?",
    "options": ["Blue", "White"]
  },
  {
    "id": 2,
    "q": "Sky color is red or yellow?",
    "options": ["Red", "Yellow"]
  }
];
```

Then, in `answers.js`:

```js
const ANSWERS = {
  1: "White",
  2: "Yellow"
};
```

That’s it! The simulator will automatically load and display your questions.

---

## 🧾 Review and Scoring

* Click **Next / Prev** to navigate
* Select an answer → instant color feedback
* Click **Finish** → shows your total score and review sheet

---

## 🌍 Hosting on GitHub Pages

You can host the project directly from GitHub:

1. Go to your repo → **Settings → Pages**
2. Under “Source” → choose **Deploy from a branch**
3. Branch: `main` → Folder: `/ (root)`
4. Save and wait for 1–2 minutes

Your live link will look like:

```
https://yourusername.github.io/any-question-simulator/
```

---

## 🧰 Tech Stack

* HTML5
* CSS3
* JavaScript 
* GitHub Pages (optional hosting)

---

## 🏁 Conclusion

The **Any Question Simulator** is perfect for anyone who wants to:

* Build and test question banks
* Simulate exams interactively
* Practice CEH, SOC, or other certification quizzes

Fully customizable, fun, and lightweight!

---

**👨‍💻 Developed by:** [Arjun s]
**📅 Version:** 1.0
**📘 License:** MIT
