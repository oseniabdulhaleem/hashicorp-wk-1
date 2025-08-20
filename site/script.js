class DailyMotivation {
  constructor() {
    this.questions = [];
    this.currentQuestion = null;

    // Generate random values on each visit
    this.config = {
      dailySeed: Math.floor(Math.random() * 16),
      quoteSeed: Math.floor(Math.random() * 100),
      themeColor: this.generateRandomColor(),
      deployDate: new Date().toLocaleDateString(),
      personalName: window.CONFIG?.personalName || "Developer",
      githubUsername: window.CONFIG?.githubUsername || "",
      linkedinUrl: window.CONFIG?.linkedinUrl || "",
      twitterUsername: window.CONFIG?.twitterUsername || "",
      totalQuestions: 16,
    };

    console.log("Daily seed:", this.config.dailySeed); // Debug log
    this.init();
  }

  generateRandomColor() {
    const colors = [
      "#3b82f6",
      "#8b5cf6",
      "#ef4444",
      "#10b981",
      "#f59e0b",
      "#ec4899",
      "#06b6d4",
      "#84cc16",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  async init() {
    try {
      await this.loadQuestions();
      this.setupUI();
      this.loadDailyContent();
      this.setupEventListeners();
      this.updateProgress();
    } catch (error) {
      console.error("Failed to initialize app:", error);
      this.showError("Failed to load content. Please refresh the page.");
    }
  }

  async loadQuestions() {
    try {
      const response = await fetch("./questions.json");
      if (!response.ok) throw new Error("Failed to fetch questions");
      const data = await response.json();

      // Handle the specific structure of your questions.json file
      if (Array.isArray(data) && data[0]?.data?.question) {
        // Extract questions from the nested structure
        this.questions = data.map((item) => item.data.question);
      } else if (data.questions) {
        // Handle if there's a questions property
        this.questions = data.questions;
      } else if (Array.isArray(data)) {
        // Handle direct array
        this.questions = data;
      } else {
        throw new Error("Invalid questions format");
      }

      console.log("Loaded questions:", this.questions.length); // Debug log
    } catch (error) {
      console.error("Error loading questions:", error);
      // Fallback questions
      this.questions = [
        {
          questionId: "1",
          title: "Sample Question",
          content: "This is a sample question for testing.",
          difficulty: "Easy",
          topicTags: [{ name: "Sample" }],
        },
      ];
    }
   
  }

  setupUI() {
    // Set current date
    document.getElementById("current-date").textContent =
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

    // Set deploy date
    document.getElementById("deploy-date").textContent =
      this.config.deployDate || new Date().toLocaleDateString();

    // Setup social links
    this.setupSocialLinks();
  }

  setupSocialLinks() {
    const socialContainer = document.getElementById("social-links");
    const links = [];

    if (this.config.githubUsername) {
      links.push(
        `<a href="https://github.com/${this.config.githubUsername}" target="_blank" class="social-link">🐙 GitHub</a>`
      );
    }

    if (this.config.linkedinUrl) {
      links.push(
        `<a href="${this.config.linkedinUrl}" target="_blank" class="social-link">💼 LinkedIn</a>`
      );
    }

    if (this.config.twitterUsername) {
      links.push(
        `<a href="https://twitter.com/${this.config.twitterUsername}" target="_blank" class="social-link">🐦 Twitter</a>`
      );
    }

    // Add HUG Ibadan as required
    links.push(
      '<a href="https://www.linkedin.com/company/hug-ibadan" target="_blank" class="social-link">🚀 HUG Ibadan</a>'
    );

    socialContainer.innerHTML = links.join("");
  }

  loadDailyContent() {
    this.loadDailyQuote();
    this.loadDailyChallenge();
  }

  async loadDailyQuote() {
    const quotes = [
      {
        content: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
      {
        content: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House",
      },
      {
        content: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
      },
      {
        content:
          "Programming isn't about what you know; it's about what you can figure out.",
        author: "Chris Pine",
      },
      {
        content: "The best error message is the one that never shows up.",
        author: "Thomas Fuchs",
      },
      {
        content: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
      },
      {
        content: "Make it work, make it right, make it fast.",
        author: "Kent Beck",
      },
      {
        content:
          "Clean code always looks like it was written by someone who cares.",
        author: "Robert C. Martin",
      },
    ];

    // Use quote seed for consistent daily quote
    const quoteIndex = (this.config.quoteSeed || 0) % quotes.length;
    const dailyQuote = quotes[quoteIndex];

    document.getElementById("daily-quote").textContent = dailyQuote.content;
    document.getElementById(
      "quote-author"
    ).textContent = `— ${dailyQuote.author}`;
  }

  loadDailyChallenge() {
    if (this.questions.length === 0) {
      document.getElementById("challenge-container").innerHTML =
        '<div class="error">No challenges available. Please check back later.</div>';
      return;
    }

    // Use daily seed for consistent challenge
    const questionIndex = (this.config.dailySeed || 0) % this.questions.length;
    this.currentQuestion = this.questions[questionIndex];

    document.getElementById("question-number").textContent = questionIndex + 1;

    this.renderChallenge();
  }

  renderChallenge() {
   const container = document.getElementById("challenge-container");
   const q = this.currentQuestion;

   if (!q) {
     container.innerHTML = '<div class="error">Question not available</div>';
     return;
   }

   // Extract difficulty and topic tags
   const difficulty = q.difficulty || "Medium";
   const topics = q.topicTags
     ? q.topicTags.map((tag) => tag.name).join(", ")
     : "Programming";

   // Clean up the HTML content for display
   const cleanContent = q.content
     ? q.content
         .replace(/<[^>]*>/g, " ")
         .replace(/\s+/g, " ")
         .trim()
     : q.question || "No content available";

   let questionHtml = `
    <div class="challenge-card">
      <div class="challenge-meta">
        <span class="difficulty ${difficulty.toLowerCase()}">${difficulty}</span>
        <span class="category">${topics}</span>
      </div>
      <div class="question-title">${q.title}</div>
      <div class="question-content">${cleanContent}</div>
      
      ${
        q.hints && q.hints.length > 0
          ? `
        <div class="hints" id="hints" style="display: none;">
          <strong>💡 Hints:</strong>
          <ul>
            ${q.hints.map((hint) => `<li>${hint}</li>`).join("")}
          </ul>
        </div>
      `
          : ""
      }
      
      <div class="explanation" id="explanation" style="display: none;">
        <strong>Explanation:</strong> 
        ${
          q.explanation ||
          "Think about the optimal approach and time complexity for this problem."
        }
      </div>
    </div>
  `;

   container.innerHTML = questionHtml;
  }

  setupEventListeners() {
    // Answer checking for multiple choice
    document.addEventListener("change", (e) => {
      if (e.target.name === "answer") {
        this.checkAnswer(parseInt(e.target.value));
      }
    });

    // Mark completed
    document.getElementById("mark-completed").addEventListener("click", () => {
      this.markCompleted();
    });

    // Show hint
    document.getElementById("show-hint").addEventListener("click", () => {
      this.showHint();
    });

    // Share functionality
    document.getElementById("share-quote").addEventListener("click", () => {
      this.shareQuote();
    });

    document.getElementById("share-challenge").addEventListener("click", () => {
      this.shareChallenge();
    });

    // Refresh challenge (for testing)
    document
      .getElementById("refresh-challenge")
      .addEventListener("click", () => {
        this.loadRandomChallenge();
      });

    // Contact form
    document.getElementById("contact-form").addEventListener("submit", (e) => {
      this.handleFormSubmit(e);
    });
  }

  checkAnswer(selectedIndex) {
    if (!this.currentQuestion.options) return;

    const correctIndex = this.currentQuestion.correct;
    const options = document.querySelectorAll(".option");

    options.forEach((option, index) => {
      option.classList.remove("correct", "incorrect");
      if (index === correctIndex) {
        option.classList.add("correct");
      } else if (index === selectedIndex && index !== correctIndex) {
        option.classList.add("incorrect");
      }
    });

    // Show explanation
    document.getElementById("explanation").style.display = "block";

    // Update progress if correct
    if (selectedIndex === correctIndex) {
      this.updateStreak();
    }
  }

  markCompleted() {
    const completedToday = this.getCompletedToday();
    if (completedToday) {
      alert("You already completed today's challenge! 🎉");
      return;
    }

    this.saveCompletion();
    this.updateProgress();

    // Visual feedback
    document.getElementById("mark-completed").innerHTML = "✅ Completed!";
    document.getElementById("mark-completed").disabled = true;

    // Confetti effect (simple version)
    this.showSuccess();
  }

  showHint() {
    const explanation = document.getElementById("explanation");
    explanation.style.display = "block";
    document.getElementById("show-hint").innerHTML = "💡 Hint Shown";
  }

  shareQuote() {
    const quote = document.getElementById("daily-quote").textContent;
    const author = document.getElementById("quote-author").textContent;
    const text = `${quote} ${author}\n\nDaily Dev Motivation: ${window.location.href}`;

    if (navigator.share) {
      navigator.share({ text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(text);
      alert("Quote copied to clipboard!");
    }
  }

  shareChallenge() {
    const questionNum = document.getElementById("question-number").textContent;
    const text = `🧠 Just tackled coding challenge #${questionNum} on Daily Dev Motivation!\n\nCheck out today's challenge: ${window.location.href}`;

    if (navigator.share) {
      navigator.share({ text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(text);
      alert("Challenge link copied to clipboard!");
    }
  }

  loadRandomChallenge() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.currentQuestion = this.questions[randomIndex];
    document.getElementById("question-number").textContent = randomIndex + 1;
    this.renderChallenge();
  }

  // Progress tracking methods
  getCompletedToday() {
    const today = new Date().toDateString();
    const completed = JSON.parse(
      localStorage.getItem("completedChallenges") || "{}"
    );
    return completed[today];
  }

  saveCompletion() {
    const today = new Date().toDateString();
    const completed = JSON.parse(
      localStorage.getItem("completedChallenges") || "{}"
    );
    completed[today] = {
      questionIndex: this.config.dailySeed || 0,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("completedChallenges", JSON.stringify(completed));
  }

  updateProgress() {
    const completed = JSON.parse(
      localStorage.getItem("completedChallenges") || "{}"
    );
    const completedCount = Object.keys(completed).length;

    // Update completed count
    document.getElementById("completed-count").textContent = completedCount;

    // Calculate streaks
    const { current, best } = this.calculateStreaks(completed);
    document.getElementById("current-streak").textContent = `${current} days`;
    document.getElementById("best-streak").textContent = `${best} days`;
    document.getElementById("streak-counter").textContent = current;
  }

  calculateStreaks(completed) {
    const dates = Object.keys(completed).sort();
    if (dates.length === 0) return { current: 0, best: 0 };

    let current = 0;
    let best = 0;
    let streak = 0;
    let today = new Date();

    // Check if completed today
    const todayStr = today.toDateString();
    if (completed[todayStr]) {
      streak = 1;
    }

    // Calculate streaks backwards from today
    for (let i = completed[todayStr] ? 1 : 0; i < dates.length; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() - i);
      const checkDateStr = checkDate.toDateString();

      if (completed[checkDateStr]) {
        streak++;
      } else {
        break;
      }
    }

    current = streak;

    // Calculate best streak
    let tempStreak = 0;
    for (let i = 0; i < dates.length; i++) {
      const date = new Date(dates[i]);
      const nextDate = i < dates.length - 1 ? new Date(dates[i + 1]) : null;

      tempStreak++;

      if (!nextDate || nextDate - date > 24 * 60 * 60 * 1000) {
        best = Math.max(best, tempStreak);
        tempStreak = 0;
      }
    }

    return { current, best: Math.max(best, tempStreak) };
  }

  updateStreak() {
    const today = new Date().toDateString();
    let streak = JSON.parse(localStorage.getItem("dailyStreak") || "0");
    const lastDate = localStorage.getItem("lastVisit");

    if (lastDate !== today) {
      streak++;
      localStorage.setItem("dailyStreak", streak);
      localStorage.setItem("lastVisit", today);
    }
  }

  showSuccess() {
    // Simple success animation
    const button = document.getElementById("mark-completed");
    button.style.transform = "scale(1.1)";
    button.style.backgroundColor = "#22c55e";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 200);
  }

  showError(message) {
    const container = document.getElementById("challenge-container");
    container.innerHTML = `<div class="error">${message}</div>`;
  }

  handleFormSubmit(e) {
    // Netlify handles the form submission
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.innerHTML = "Sending... 📤";
    submitBtn.disabled = true;

    // Re-enable after submission
    setTimeout(() => {
      submitBtn.innerHTML = "Send Message 📧";
      submitBtn.disabled = false;
    }, 2000);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new DailyMotivation();
});
