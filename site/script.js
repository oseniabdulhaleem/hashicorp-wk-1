class DailyMotivation {
  constructor() {
    // Hardcoded configuration - no more dependency on external config.js
    this.config = {
      personalName: "Abdulhaleem Oseni",
      githubUsername: "oseniabdulhaleem",
      linkedinUrl: "https://linkedin.com/in/oseniabdulhaleem",
      twitterUsername: "adel_wale",
      deployDate: new Date().toLocaleDateString(),
      themeColor: "#3b82f6",
    };

    // Hardcoded questions data
    this.questions = [
      {
        questionId: "1",
        questionFrontendId: "1",
        title: "Two Sum",
        content:
          "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        difficulty: "Easy",
        topicTags: [{ name: "Array" }, { name: "Hash Table" }],
        hints: [
          "A really brute force way would be to search for all possible pairs of numbers but that would be too slow.",
          "Try using a hash map to store numbers you've seen and their indices.",
          "For each number, check if target - current number exists in your hash map.",
        ],
      },
      {
        questionId: "2",
        questionFrontendId: "2",
        title: "Add Two Numbers",
        content:
          "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.",
        difficulty: "Medium",
        topicTags: [
          { name: "Linked List" },
          { name: "Math" },
          { name: "Recursion" },
        ],
        hints: [
          "Remember to handle the carry when digits sum to more than 9.",
          "Consider edge cases where lists have different lengths.",
          "Don't forget about a final carry that creates a new node.",
        ],
      },
      {
        questionId: "3",
        questionFrontendId: "3",
        title: "Longest Substring Without Repeating Characters",
        content:
          "Given a string s, find the length of the longest substring without repeating characters.",
        difficulty: "Medium",
        topicTags: [
          { name: "Hash Table" },
          { name: "String" },
          { name: "Sliding Window" },
        ],
        hints: [
          "Use a sliding window approach with two pointers.",
          "Keep track of characters you've seen in the current window.",
          "When you find a repeat, move the left pointer past the previous occurrence.",
        ],
      },
      {
        questionId: "4",
        questionFrontendId: "4",
        title: "Median of Two Sorted Arrays",
        content:
          "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
        difficulty: "Hard",
        topicTags: [
          { name: "Array" },
          { name: "Binary Search" },
          { name: "Divide and Conquer" },
        ],
        hints: [
          "Think about binary search on the smaller array.",
          "The median divides the combined array into two equal halves.",
          "Use binary search to find the correct partition point.",
        ],
      },
      {
        questionId: "5",
        questionFrontendId: "5",
        title: "Longest Palindromic Substring",
        content:
          "Given a string s, return the longest palindromic substring in s.",
        difficulty: "Medium",
        topicTags: [
          { name: "Two Pointers" },
          { name: "String" },
          { name: "Dynamic Programming" },
        ],
        hints: [
          "Consider expanding around centers for each possible palindrome center.",
          "Don't forget to check both odd and even length palindromes.",
          "You can optimize by checking longer substrings first.",
        ],
      },
      {
        questionId: "6",
        questionFrontendId: "6",
        title: "Reverse Integer",
        content:
          "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, then return 0.",
        difficulty: "Medium",
        topicTags: [{ name: "Math" }],
        hints: [
          "Pop the last digit using modulo operator.",
          "Check for overflow before multiplying by 10.",
          "Handle negative numbers correctly.",
        ],
      },
      {
        questionId: "7",
        questionFrontendId: "7",
        title: "Palindrome Number",
        content:
          "Given an integer x, return true if x is a palindrome, and false otherwise.",
        difficulty: "Easy",
        topicTags: [{ name: "Math" }],
        hints: [
          "Negative numbers are not palindromes.",
          "You can reverse the number and compare, but watch for overflow.",
          "Alternative: reverse only half the number to avoid overflow.",
        ],
      },
      {
        questionId: "8",
        questionFrontendId: "8",
        title: "Container With Most Water",
        content:
          "You are given an integer array height of length n. Find two lines that together with the x-axis form a container that contains the most water.",
        difficulty: "Medium",
        topicTags: [
          { name: "Array" },
          { name: "Two Pointers" },
          { name: "Greedy" },
        ],
        hints: [
          "Use two pointers, one at each end of the array.",
          "Move the pointer pointing to the shorter line.",
          "The area is limited by the shorter of the two lines.",
        ],
      },
      {
        questionId: "9",
        questionFrontendId: "9",
        title: "3Sum",
        content:
          "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        difficulty: "Medium",
        topicTags: [
          { name: "Array" },
          { name: "Two Pointers" },
          { name: "Sorting" },
        ],
        hints: [
          "Sort the array first to make it easier to avoid duplicates.",
          "For each number, use two pointers to find pairs that sum to the negative of that number.",
          "Skip duplicate values to avoid duplicate triplets.",
        ],
      },
      {
        questionId: "10",
        questionFrontendId: "10",
        title: "Valid Parentheses",
        content:
          "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        difficulty: "Easy",
        topicTags: [{ name: "String" }, { name: "Stack" }],
        hints: [
          "Use a stack to keep track of opening brackets.",
          "When you see a closing bracket, check if it matches the most recent opening bracket.",
          "The string is valid if the stack is empty at the end.",
        ],
      },
      {
        questionId: "11",
        questionFrontendId: "11",
        title: "Merge Two Sorted Lists",
        content:
          "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.",
        difficulty: "Easy",
        topicTags: [{ name: "Linked List" }, { name: "Recursion" }],
        hints: [
          "Use a dummy head to simplify the logic.",
          "Compare the values of the current nodes and choose the smaller one.",
          "Don't forget to append any remaining nodes from either list.",
        ],
      },
      {
        questionId: "12",
        questionFrontendId: "12",
        title: "Generate Parentheses",
        content:
          "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
        difficulty: "Medium",
        topicTags: [
          { name: "String" },
          { name: "Dynamic Programming" },
          { name: "Backtracking" },
        ],
        hints: [
          "Use backtracking to generate all possible combinations.",
          "Keep track of the number of open and close parentheses used.",
          "Only add a close parenthesis if it doesn't exceed the number of open ones.",
        ],
      },
      {
        questionId: "13",
        questionFrontendId: "13",
        title: "Search Insert Position",
        content:
          "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be inserted.",
        difficulty: "Easy",
        topicTags: [{ name: "Array" }, { name: "Binary Search" }],
        hints: [
          "Use binary search since the array is sorted.",
          "If target is not found, return the position where it should be inserted.",
          "Consider edge cases where target is smaller or larger than all elements.",
        ],
      },
      {
        questionId: "14",
        questionFrontendId: "14",
        title: "Climbing Stairs",
        content:
          "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        difficulty: "Easy",
        topicTags: [
          { name: "Math" },
          { name: "Dynamic Programming" },
          { name: "Memoization" },
        ],
        hints: [
          "This is essentially the Fibonacci sequence.",
          "To reach step n, you can come from step n-1 or step n-2.",
          "Use dynamic programming to avoid recalculating the same values.",
        ],
      },
      {
        questionId: "15",
        questionFrontendId: "15",
        title: "Maximum Subarray",
        content:
          "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        difficulty: "Medium",
        topicTags: [
          { name: "Array" },
          { name: "Divide and Conquer" },
          { name: "Dynamic Programming" },
        ],
        hints: [
          "Use Kadane's algorithm for an O(n) solution.",
          "At each position, decide whether to extend the previous subarray or start a new one.",
          "Keep track of both the current sum and the maximum sum seen so far.",
        ],
      },
      {
        questionId: "16",
        questionFrontendId: "16",
        title: "Unique Paths",
        content:
          "There is a robot on an m x n grid. The robot can only move either down or right at any point in time. How many unique paths are there to reach the bottom-right corner?",
        difficulty: "Medium",
        topicTags: [
          { name: "Math" },
          { name: "Dynamic Programming" },
          { name: "Combinatorics" },
        ],
        hints: [
          "This is a classic dynamic programming problem.",
          "The number of ways to reach a cell is the sum of ways to reach the cell above and to the left.",
          "You can also solve this using combinatorics: choose (m-1) rights from (m+n-2) total moves.",
        ],
      },
    ];

    this.currentQuestion = null;
    this.init();
  }

  getDailySeed() {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / 86400000
    );
    return dayOfYear % this.questions.length;
  }

  getQuoteSeed() {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / 86400000
    );
    return (dayOfYear * 7) % 100;
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
    document.getElementById("deploy-date").textContent = this.config.deployDate;

    // Setup social links
    this.setupSocialLinks();

    // Set theme color
    document.documentElement.style.setProperty(
      "--primary-color",
      this.config.themeColor
    );
  }

  setupSocialLinks() {
    const socialContainer = document.getElementById("social-links");
    const links = [];

    if (this.config.githubUsername) {
      links.push(
        `<a href="https://github.com/${this.config.githubUsername}" target="_blank" class="social-link">
          <span>🐙</span> GitHub
         </a>`
      );
    }

    if (this.config.linkedinUrl) {
      links.push(
        `<a href="${this.config.linkedinUrl}" target="_blank" class="social-link">
          <span>💼</span> LinkedIn
         </a>`
      );
    }

    if (this.config.twitterUsername) {
      links.push(
        `<a href="https://twitter.com/${this.config.twitterUsername}" target="_blank" class="social-link">
          <span>🐦</span> Twitter
         </a>`
      );
    }

    // Add HUG Ibadan
    links.push(
      `<a href="https://www.linkedin.com/company/hug-ibadan" target="_blank" class="social-link">
        <span>🚀</span> HUG Ibadan
       </a>`
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
      {
        content:
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
      },
      {
        content: "It's not a bug; it's an undocumented feature.",
        author: "Unknown",
      },
      { content: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
      {
        content:
          "The most important property of a program is whether it accomplishes the intention of its user.",
        author: "C.A.R. Hoare",
      },
      {
        content: "Programming is thinking, not typing.",
        author: "Casey Patton",
      },
      {
        content: "Good code is its own best documentation.",
        author: "Steve McConnell",
      },
      {
        content: "Code never lies, comments sometimes do.",
        author: "Ron Jeffries",
      },
    ];

    const quoteIndex = this.getQuoteSeed() % quotes.length;
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

    const questionIndex = this.getDailySeed();
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

    const difficulty = q.difficulty || "Medium";
    const topics = q.topicTags
      ? q.topicTags.map((tag) => tag.name).join(", ")
      : "Programming";

    let questionHtml = `
      <div class="challenge-card">
        <div class="challenge-meta">
          <span class="difficulty ${difficulty.toLowerCase()}">${difficulty}</span>
          <span class="category">${topics}</span>
        </div>
        <div class="question-title">${q.title}</div>
        <div class="question-content">${q.content}</div>
        
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
          <strong>💭 Think about it:</strong> 
          Consider the time and space complexity of different approaches. What data structures might be helpful? Can you solve it iteratively and recursively?
        </div>
      </div>
    `;

    container.innerHTML = questionHtml;
  }

  setupEventListeners() {
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

    // Refresh challenge
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

  markCompleted() {
    const completedToday = this.getCompletedToday();
    if (completedToday) {
      this.showNotification(
        "You already completed today's challenge! 🎉",
        "success"
      );
      return;
    }

    this.saveCompletion();
    this.updateProgress();

    // Visual feedback
    const button = document.getElementById("mark-completed");
    button.innerHTML = "✅ Completed!";
    button.disabled = true;
    button.classList.add("success-bounce");

    this.showNotification("Great job! Challenge completed! 🎉", "success");
  }

  showHint() {
    const hintsElement = document.getElementById("hints");
    const explanationElement = document.getElementById("explanation");

    if (hintsElement) {
      hintsElement.style.display = "block";
      hintsElement.scrollIntoView({ behavior: "smooth" });
    }
    if (explanationElement) {
      explanationElement.style.display = "block";
    }

    document.getElementById("show-hint").innerHTML = "💡 Hint Shown";
    document.getElementById("show-hint").disabled = true;
  }

  shareQuote() {
    const quote = document.getElementById("daily-quote").textContent;
    const author = document.getElementById("quote-author").textContent;
    const text = `${quote} ${author}\n\nDaily Dev Motivation: ${window.location.href}`;

    if (navigator.share) {
      navigator.share({
        title: "Daily Dev Motivation Quote",
        text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text).then(() => {
        this.showNotification("Quote copied to clipboard! 📋", "success");
      });
    }
  }

  shareChallenge() {
    const questionNum = document.getElementById("question-number").textContent;
    const questionTitle = this.currentQuestion.title;
    const text = `🧠 Just tackled "${questionTitle}" (Challenge #${questionNum}) on Daily Dev Motivation!\n\nCheck out today's challenge: ${window.location.href}`;

    if (navigator.share) {
      navigator.share({
        title: "Daily Dev Challenge",
        text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text).then(() => {
        this.showNotification(
          "Challenge link copied to clipboard! 📋",
          "success"
        );
      });
    }
  }

  loadRandomChallenge() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.currentQuestion = this.questions[randomIndex];
    document.getElementById("question-number").textContent = randomIndex + 1;
    this.renderChallenge();

    // Reset buttons
    document.getElementById("mark-completed").innerHTML = "✅ Mark Completed";
    document.getElementById("mark-completed").disabled = false;
    document.getElementById("show-hint").innerHTML = "💡 Show Hint";
    document.getElementById("show-hint").disabled = false;
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
      questionIndex: this.getDailySeed(),
      questionTitle: this.currentQuestion.title,
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
    const dates = Object.keys(completed).sort(
      (a, b) => new Date(b) - new Date(a)
    );
    if (dates.length === 0) return { current: 0, best: 0 };

    let current = 0;
    let best = 0;
    let tempStreak = 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Calculate current streak
    for (let i = 0; i < dates.length; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() - i);
      const checkDateStr = checkDate.toDateString();

      if (completed[checkDateStr]) {
        current++;
      } else {
        break;
      }
    }

    // Calculate best streak
    let consecutiveDays = 1;
    for (let i = 0; i < dates.length - 1; i++) {
      const currentDate = new Date(dates[i]);
      const nextDate = new Date(dates[i + 1]);
      const daysDiff = (currentDate - nextDate) / (24 * 60 * 60 * 1000);

      if (daysDiff === 1) {
        consecutiveDays++;
      } else {
        best = Math.max(best, consecutiveDays);
        consecutiveDays = 1;
      }
    }
    best = Math.max(best, consecutiveDays);

    return { current, best };
  }

  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 1000;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
      max-width: 300px;
    `;

    // Set background color based on type
    const colors = {
      success: "#22c55e",
      error: "#ef4444",
      info: "#3b82f6",
      warning: "#f59e0b",
    };
    notification.style.backgroundColor = colors[type] || colors.info;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.opacity = "1";
      notification.style.transform = "translateX(0)";
    }, 100);

    // Remove after delay
    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  showError(message) {
    const container = document.getElementById("challenge-container");
    container.innerHTML = `<div class="error">${message}</div>`;
  }

  handleFormSubmit(e) {
    const submitBtn = document.querySelector(".submit-btn");
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = "Sending... 📤";
    submitBtn.disabled = true;

    // Simulate form submission delay
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      this.showNotification("Message sent successfully! 📧", "success");
    }, 2000);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new DailyMotivation();
});
