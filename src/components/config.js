const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0404", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my gf so cute?", // Example trending search query
    "Why does Aulia love him more?", // Another example query
    `Aulia's birthday (coz her bf forgets)`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "Berapa lama kita sudah bersama?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-04-04", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "Kita telah bersama selama:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Heavenly", // Title of the song
      artist: "Cigarettes After Sex", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Please Don't Go",
      artist: "Mike Posner",
      left: "40%",
      top: "15%",
    },
    {
      title: "Heart Mind",
      artist: "Kodak Black, Piles",
      left: "15%",
      top: "40%",
    },
    {
      title: "I Wouldn't Mind",
      artist: "He Is We",
      left: "15%",
      top: "55%",
    },
    {
      title: "If I Had A Gun",
      artist: "Noel Gallagher's High Flying Birds",
      left: "30%",
      top: "65%",
    },
    {
      title: "Afterall",
      artist: "Beartooth",
      left: "25%",
      top: "35%",
    },
    {
      title: "Dariku, Untukmu",
      artist: "Glory Of Love",
      left: "35%",
      top: "50%",
    },
    {
      title: "Sunsetz",
      artist: "Cigarettes After Sex",
      left: "10%",
      top: "25%",
    },
    {
      title: "Diam Keroncong",
      artist: "Payung Teduh",
      left: "20%",
      top: "75%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "August 29, 2025", description: "A beautiful day to remember." }, // Message entry
      { title: "November 5, 2024", description: "Cherishing moments together." },
      { title: "April 2, 2025", description: "Everyday with love ❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "September 28, 2025", description: "After work at Kedai Roti Ibu Saya 🎉" }, // Picture entry
      { title: "February 6, 2025", description: "Ngampus time 💕" },
      { title: "January 29, 2025", description: "Bandung trip w/ Dentalogue 🏖️" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Cieee ultah ni, selamat yaa. semoga kedepannya tambah bahagia dan lulus kuliah tepat waktu, eh?? kok bahas kuliah sih, huhuu maaff. i love uUuUuUuUuUuUu💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank u for everything, my love! 💗💖 Wishing us many more wonderful years together 🫶🫂", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "Berapa lama kita sudah bersama?", // Example of a correct search query
    "Berapa lama kita sudah bersama?", // Another example of a correct search query
  ],
};

export default config;
