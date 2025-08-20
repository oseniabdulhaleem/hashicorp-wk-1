class DailyMotivation {
  constructor() {
    // Embed questions data directly
    this.questions = [
      {
        "questionId": "1",
        "questionFrontendId": "1",
        "title": "Two Sum",
        "content": "<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>\n\n<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>\n\n<p>You can return the answer in any order.</p>",
        "difficulty": "Easy",
        "topicTags": [
          { "name": "Array" },
          { "name": "Hash Table" }
        ],
        "hints": [
          "A really brute force way would be to search for all possible pairs of numbers but that would be too slow.",
          "So, if we fix one of the numbers, say <code>x</code>, we have to scan the entire array to find the next number <code>y</code> which is <code>value - x</code> where value is the input parameter.",
          "The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?"
        ]
      },
      {
        "questionId": "2",
        "questionFrontendId": "2",
        "title": "Add Two Numbers",
        "content": "<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>",
        "difficulty": "Medium",
        "topicTags": [
          { "name": "Linked List" },
          { "name": "Math" },
          { "name": "Recursion" }
        ],
        "hints": []
      },
      {
        "questionId": "3",
        "questionFrontendId": "3",
        "title": "Longest Substring Without Repeating Characters",
        "content": "<p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <span data-keyword=\"substring-nonempty\"><strong>substring</strong></span> without duplicate characters.</p>",
        "difficulty": "Medium",
        "topicTags": [
          { "name": "Hash Table" },
          { "name": "String" },
          { "name": "Sliding Window" }
        ],
        "hints": [
          "Generate all possible substrings & check for each substring if it's valid and keep updating maxLen accordingly."
        ]
      },
      {
        "questionId": "4",
        "questionFrontendId": "4",
        "title": "Median of Two Sorted Arrays",
        "content": "<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>",
        "difficulty": "Hard",
        "topicTags": [
          { "name": "Array" },
          { "name": "Binary Search" },
          { "name": "Divide and Conquer" }
        ],
        "hints": []
      },
      {
        "questionId": "5",
        "questionFrontendId": "5",
        "title": "Longest Palindromic Substring",
        "content": "<p>Given a string <code>s</code>, return <em>the longest</em> <span data-keyword=\"palindromic-string\"><em>palindromic</em></span> <span data-keyword=\"substring-nonempty\"><em>substring</em></span> in <code>s</code>.</p>",
        "difficulty": "Medium",
        "topicTags": [
          { "name": "Two Pointers" },
          { "name": "String" },
          { "name": "Dynamic Programming" }
        ],
        "hints": [
          "How can we reuse a previously computed palindrome to compute a larger palindrome?",
          "If 'aba' is a palindrome, is 'xabax' a palindrome? Similarly is 'xabay' a palindrome?"
        ]
      },
      {
        "questionId": "6",
        "questionFrontendId": "6",
        "title": "Zigzag Conversion",
        "content": "<p>The string <code>\"PAYPALISHIRING\"</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)</p>",
        "difficulty": "Medium",
        "topicTags": [
          { "name": "String" }
        ],
        "hints": []
      },
      {
        "questionId": "7",
        "questionFrontendId": "7",
        "title": "Reverse Integer",
        "content": "<p>Given a signed 32-bit integer <code>x</code>, return <code>x</code><em> with its digits reversed</em>. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then return <code>0</code>.</p>",
        "difficulty": "Medium",
        "topicTags": [
          { "name": "Math" }
        ],
        "hints": []
      },
      {
        "questionId": "8",
        "questionFrontendId": "8",
        "title": "String to Integer (atoi)",
        "content": "<p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer.</p>",
        "difficulty": "Medium",
        "topicTags": [
          { "name": "String" }
        ],
        "hints": []
      },
      {
        "questionId": "9",
        "questionFrontendId": "9",
        "title": "Palindrome Number",
        "content": "<p>Given an integer <code>x</code>, return <code>true</code><em> if </em><code>x</code><em> is a </em><span data-keyword=\"palindrome-integer\"><em><strong>palindrome</strong></em></span><em>, and </em><code>false</code><em> otherwise</em>.</p>",
        "difficulty": "Easy",
        "topicTags": [
          { "name": "Math" }
        ],
        "hints": ["Beware of overflow when you reverse the integer."]
      },
      {
        "questionId": "10",
        "questionFrontendId": "10",
        "title": "Regular Expression Matching",
        "content": "<p>Given an input string <code>s</code>&nbsp;and a pattern <code>p</code>, implement regular expression matching with support for <code>'.'</code> and <code>'*'</code> where:</p>",
        "difficulty": "Hard",
        "topicTags": [
          { "name": "String" },
          { "name": "Dynamic Programming" },
          { "name": "Recursion" }
        ],
        "hints": []
      },
      {
        "questionId": "11",
        "questionFrontendId": "11",
        "title": "Container With Most Water",
        "content": "<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>",
        "difficulty": "Medium",
        "topicTags": [
          { "name": "Array" },
          { "name": "Two Pointers" },
          { "name": "Greedy" }
        ],
        "hints": [
          "If you simulate the problem, it will be O(n^2) which is not efficient.",
          "Try to use two-pointers. Set one pointer to the left and one to the right of the array."
        ]
      },
      {
        "questionId": "12",
        "questionFrontendId": "12",
        "title": "Integer to Roman",
        "content": "<p>Seven different symbols represent Roman numerals with the following values:</p>",
        "difficulty": "Medium",
        "topicTags": [
          { "name": "Hash Table" },
          { "name": "Math" },
          { "name": "String" }
        ],
        "hints": []
      },
      {
        "questionId": "13",
        "questionFrontendId": "13",
        "title": "Roman to Integer",
        "content": "<p>Roman numerals are represented by seven different symbols:&nbsp;<code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p>",
        "difficulty": "Easy",
        "topicTags": [
          { "name": "Hash Table" },
          { "name": "Math" },
          { "name": "String" }
        ],
        "hints": [
          "Problem is simpler to solve by working the string from back to front and using a map."
        ]
      },
      {
        "questionId": "14",
        "questionFrontendId": "14",
        "title": "Longest Common Prefix",
        "content": "<p>Write a function to find the longest common prefix string amongst an array of strings.</p>",
        "difficulty": "Easy",
        "topicTags": [
          { "name": "Array" },
          { "name": "String" },
          { "name": "Trie" }
        ],
        "hints": []
      },
      {
        "questionId": "15",
        "questionFrontendId": "15",
        "title": "3Sum",
        "content": "<p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>",
        "difficulty": "Medium",
        "topicTags": [
          { "name": "Array" },
          { "name": "Two Pointers" },
          { "name": "Sorting" }
        ],
        "hints": [
          "So, we essentially need to find three numbers x, y, and z such that they add up to the given value.",
          "For the two-sum problem, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y."
        ]
      },
      {
        "questionId": "16",
        "questionFrontendId": "16",
        "title": "3Sum Closest",
        "content": "<p>Given an integer array <code>nums</code> of length <code>n</code> and an integer <code>target</code>, find three integers in <code>nums</code> such that the sum is closest to <code>target</code>.</p>",
        "difficulty": "Medium",
        "topicTags": [
          { "name": "Array" },
          { "name": "Two Pointers" },
          { "name": "Sorting" }
        ],
        "hints": []
      }
    ];

    this.currentQuestion = null;

    // Generate random values on each visit
    this.config = {
      dailySeed: Math.floor(Math.random() * this.questions.length),
      quoteSeed: Math.floor(Math.random() * 100),
      themeColor: this.generateRandomColor(),
      deployDate: new Date().toLocaleDateString(),
      personalName: window.CONFIG?.personalName || "Developer",
      githubUsername: window.CONFIG?.githubUsername || "",
      linkedinUrl: window.CONFIG?.linkedinUrl || "",
      twitterUsername: window.CONFIG?.twitterUsername || "",
      totalQuestions: this.questions.length,
    };

    console.log("Daily seed:", this.config.dailySeed); // Debug log
    console.log("Total questions loaded:", this.questions.length); // Debug log
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
      this.setupUI();
      this.loadDailyContent();
      this.setupEventListeners();
      this.updateProgress();
    } catch (error) {
      console.error("Failed to initialize app:", error);
      this.showError("Failed to load content. Please refresh the page.");
    }
  }

  // Remove the loadQuestions method since questions are now embedded
  // async loadQuestions() { ... } - REMOVED

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

    console.log("Selected question:", this.currentQuestion); // Debug log
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
      ? q.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
      : "No content available";

    let questionHtml = `
      <div class="challenge-card">
        <div class="challenge-meta">
          <span class="difficulty ${difficulty.toLowerCase()}">${difficulty}</span>
          <span class="category">${topics}</span>
        </div>
        <div class="question-title">${q.title}</div>
        <div class="question-content">${cleanContent}</div>
        
        ${q.hints && q.hints.length > 0
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
          Think about the optimal approach and time complexity for this problem. Consider different algorithms and their trade-offs.
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
    const hintsElement = document.getElementById("hints");
    const explanationElement = document.getElementById("explanation");
    
    if (hintsElement) {
      hintsElement.style.display = "block";
    }
    if (explanationElement) {
      explanationElement.style.display = "block";
    }
    
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