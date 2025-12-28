# Instagram Stories & Reels Clone

A responsive Instagram-like Stories and Reels feature built with **React** and **Tailwind CSS**. Users can view posts in a feed, click on a post to open a Reels-style modal, swipe up/down or tap to navigate, and enjoy smooth auto-scrolling transitions.

---

## Features

- **Stories/Posts Feed:** Displays posts in a vertical scrollable list.
- **Reels Modal:** Clicking a post opens a modal with:
  - Swipe navigation (up/down) to move between posts.
  - Tap left/right to go to previous/next post.
  - Auto-scroll to the next post every 5 seconds.
- **Smooth Animations:** Slide-in/out transitions for a polished look.
- **Blurred Background:** Subtle blur overlay to mimic Instagram style.
- **Responsive Design:** Mobile-first layout compatible with modern devices.
- **Tailwind CSS Styling:** Simple, scalable, and customizable styling.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/Instagram-Stories.git
```
2. Navigate to the project folder:

```bash
cd Instagram-Stories
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:
```bash
npm start
```

## Project Structure

src/
├── Components/
│   ├── PostSlider/          # Optional slider component
│   ├── Posts/               # Posts feed component
│   └── ReelModal/           # Reels modal with swipe navigation
├── data/
│   └── stories.json         # Sample post data
├── utils/
│   └── swipeHelper.js       # Swipe handling logic
├── App.js                   # Main app component
└── App.css                  # Global styles
package.json

##Usage

- Scroll through the feed to see all posts.
- Tap a post to open the Reels modal.
- Swipe up/down or click left/right to navigate.
- Click outside the modal to close it.
- Enjoy smooth transition effects and blurred background.

## Dependencies

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
