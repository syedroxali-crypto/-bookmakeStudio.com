let currentPage = 0;
let pages = [];

function helpAuthor() {
  const prompt = document.getElementById("prompt").value.trim();
  const genre = document.getElementById("genre").value.trim() || "fantasy";
  const tone = document.getElementById("tone").value.trim() || "hopeful";
  const goal = document.getElementById("goal").value.trim() || "to save their home and discover their true purpose";

  const hero = buildHero(prompt);
  const setting = buildSetting(prompt);
  const conflict = buildChallenge(prompt);
  const arc = [
    "Beginning: " + hero + " feels stuck in their ordinary life and is pulled toward an unexpected opportunity.",
    "Middle: " + hero + " learns the truth about " + setting + " and faces a difficult choice that tests their courage.",
    "Climax: " + hero + " must confront " + conflict + " to achieve " + goal + ".",
    "Ending: " + hero + " changes, the story resolves, and the world feels brighter, wiser, or more mysterious than before."
  ];

  const output = [
    "Genre: " + genre,
    "Tone: " + tone,
    "Main idea: " + (prompt || "A quiet dreamer discovers a hidden world"),
    "Main character: " + hero,
    "World: " + setting,
    "Conflict: " + conflict,
    "Story goal: " + goal,
    "",
    "Plot arc:",
    arc.join("\n"),
    "",
    "Prompt for your draft:",
    "Write a " + genre + " story with a " + tone + " tone. The protagonist is " + hero + ". They are trying to " + goal + ". The story takes place in " + setting + ". The central conflict is " + conflict + "."
  ].join("\n");

  document.getElementById("assistantOutput").value = output;
}

function expandStoryDraft() {
  const prompt = document.getElementById("prompt").value.trim();
  const genre = document.getElementById("genre").value.trim() || "fantasy";
  const tone = document.getElementById("tone").value.trim() || "hopeful";
  const goal = document.getElementById("goal").value.trim() || "to prove they are brave enough to change their destiny";

  const hero = buildHero(prompt);
  const setting = buildSetting(prompt);
  const conflict = buildChallenge(prompt);

  const draft = [
    "Chapter Draft",
    "In a world shaped by " + setting + ", " + hero + " had always believed that safety meant accepting a life of small dreams.",
    "But then, everything changed when a hidden clue appeared at the edge of their daily routine. It spoke of a truth no one had dared to tell: the real danger was not the unknown, but the fear of pursuing it.",
    "As " + hero + " followed the trail, they discovered that " + conflict + ". The path ahead was filled with difficult choices, sudden losses, and moments of hope so fragile they seemed almost impossible.",
    "Still, the heart of the story was never about perfection. It was about choosing to move forward when the world felt uncertain. With each brave step, " + hero + " learned that the dream they had been chasing was not only about " + goal + ", but about becoming the kind of person who could carry it.",
    "By the final scene, the world had shifted, the truth had been revealed, and " + hero + " stood ready to begin the next chapter of their life. The ending carried a " + tone + " feeling, rich with wonder, danger, and a quiet promise that great things begin with one courageous decision.",
    "This chapter is written in a " + genre + " style and is ready to become a page in a storybook."
  ].join("\n\n");

  document.getElementById("assistantOutput").value = draft;
}

function addDraftToStory() {
  const draft = document.getElementById("assistantOutput").value.trim();
  const existingStory = document.getElementById("story").value.trim();

  if (!draft) {
    alert("Please generate an AI story draft first.");
    return;
  }

  const finalStory = existingStory
    ? existingStory + "\n\n" + draft
    : draft;

  document.getElementById("story").value = finalStory;
  document.getElementById("title").value = document.getElementById("title").value.trim() || (document.getElementById("prompt").value.trim() || "Untitled Story");
  createBook();
}

function generateStory() {
  const prompt = document.getElementById("prompt").value.trim();
  const idea = prompt || "A shy inventor who finds a hidden world beneath the ocean";

  const title = buildTitle(idea);
  const hero = buildHero(idea);
  const setting = buildSetting(idea);
  const challenge = buildChallenge(idea);
  const ending = buildEnding(idea);

  const generatedStory = [
    "Chapter 1",
    "In the heart of " + setting + ", " + hero + " was living a quiet life until the unexpected happened.",
    "One day, while searching for a lost memory and a forgotten dream, " + hero + " discovered a clue that led to " + challenge + ".",
    "Chapter 2",
    "The path ahead was filled with danger, wonder, and impossible choices. Yet " + hero + " kept moving forward, learning that courage is often quiet and difficult.",
    "Chapter 3",
    "At the final moment, " + hero + " faced the truth behind the mystery and chose to act with bravery instead of fear.",
    ending
  ].join("\n\n");

  document.getElementById("title").value = title;
  document.getElementById("author").value = "AI Story Generator";
  document.getElementById("story").value = generatedStory;
  createBook();
}

function buildTitle(idea) {
  const cleaned = idea.replace(/\s+/g, " ").trim();
  const words = cleaned.split(" ");
  const mainWord = words.slice(0, 3).join(" ");
  return mainWord.charAt(0).toUpperCase() + mainWord.slice(1) + " and the Hidden Path";
}

function buildHero(idea) {
  const heroNames = ["Ari", "Nora", "Milo", "Sera", "Ezra", "Lina", "Ivo", "Kira"];
  const moodWords = ["brave", "curious", "gentle", "clever", "dreaming", "determined"];
  const name = heroNames[Math.floor(Math.random() * heroNames.length)];
  const mood = moodWords[Math.floor(Math.random() * moodWords.length)];
  return name + ", a " + mood + " young dreamer";
}

function buildSetting(idea) {
  const settings = [
    "a glowing forest under moonlight",
    "a floating city made of old stars",
    "a hidden valley protected by ancient magic",
    "a forgotten kingdom beneath the sea",
    "a castle built inside a giant tree",
    "a desert where time itself is alive"
  ];
  return settings[Math.floor(Math.random() * settings.length)];
}

function buildChallenge(idea) {
  const challenges = [
    "a mystery hidden in an abandoned library",
    "a dragon that guarded the last source of light",
    "a secret map that changed every time it was opened",
    "a forgotten promise that could reshape the world",
    "an ancient machine waking after a thousand years",
    "a storm that threatened the last safe place on earth"
  ];
  return challenges[Math.floor(Math.random() * challenges.length)];
}

function buildEnding(idea) {
  const endings = [
    "When the sun rose, the world was different, but hope had returned. The adventure was only beginning, and the heart of the story was finally awake.",
    "The hidden truth was revealed, and with it came peace, wonder, and a new beginning for everyone who had dared to believe.",
    "The journey ended with a smile, a promise, and a thousand more stories waiting just beyond the horizon.",
    "By the time the moon rose, the impossible had become real, and the dreamer had become a legend."
  ];
  return endings[Math.floor(Math.random() * endings.length)];
}

function createBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const story = document.getElementById("story").value.trim();

  if (!title || !story) {
    alert("Please enter a book title and story!");
    return;
  }

  document.getElementById("book").style.display = "block";
  document.getElementById("bookTitle").textContent = title;
  document.getElementById("bookAuthor").textContent = author || "Unknown Author";

  const pagesContainer = document.getElementById("pages");
  pagesContainer.innerHTML = "";

  const paragraphs = story.split(/\n\s*\n/);
  pages = [];

  let pageText = "";
  paragraphs.forEach((paragraph) => {
    if ((pageText + paragraph).length > 900) {
      pages.push(pageText);
      pageText = paragraph;
    } else {
      pageText += (pageText ? "\n\n" : "") + paragraph;
    }
  });

  if (pageText) {
    pages.push(pageText);
  }

  pages.forEach((text, index) => {
    const page = document.createElement("div");
    page.className = "page";
    page.innerHTML = `
      <h2>Page ${index + 1}</h2>
      <p>${escapeHTML(text).replace(/\n/g, "<br>")}</p>
    `;
    pagesContainer.appendChild(page);
  });

  currentPage = 0;
  showPage();
  document.getElementById("book").scrollIntoView({ behavior: "smooth" });
}

function showPage() {
  const allPages = document.querySelectorAll(".page");

  allPages.forEach((page) => {
    page.classList.remove("active");
  });

  if (allPages.length > 0) {
    allPages[currentPage].classList.add("active");
    document.getElementById("pageNumber").textContent = `Page ${currentPage + 1} of ${allPages.length}`;
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage += 1;
    showPage();
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage -= 1;
    showPage();
  }
}

function clearBook() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("story").value = "";
  document.getElementById("book").style.display = "none";
  document.getElementById("pageNumber").textContent = "";

  pages = [];
  currentPage = 0;
}

function printBook() {
  window.print();
}

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
