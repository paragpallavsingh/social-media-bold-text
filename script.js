function convertText() {
  const inputText = document.getElementById("inputText").value;
  const textStyle = document.getElementById("textStyle").value;
  let outputText = "";

  switch (textStyle) {
    case "bold":
      outputText = convertToBold(inputText);
      break;
    case "italic":
      outputText = convertToItalic(inputText);
      break;
    case "boldItalic":
      outputText = convertToBoldItalic(inputText);
      break;
    case "script":
      outputText = convertToScript(inputText);
      break;
    case "doubleStruck":
      outputText = convertToDoubleStruck(inputText);
      break;
    default:
      break;
  }

  document.getElementById("outputText").value = outputText;
}

// Implement conversion functions here

function convertToBold(text) {
  const boldChars = {
    'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛',
    'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣',
    'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫',
    'Y': '𝗬', 'Z': '𝗭',
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵',
    'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽',
    'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅',
    'y': '𝘆', 'z': '𝘇',
    '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵',
    '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')',
    '-': '-', '+': '+', '=': '=', '{': '{', '}': '}', '[': '[', ']': ']', '|': '|', '\\': '\\', ':': ':',
    ';': ';', '<': '<', '>': '>', ',': ',', '.': '.', '/': '/', '?': '?', '_': '_', '`': '`', '~': '~',
    '"': '"', "'": "'", ' ': ' ', '\n': '\n', '\t': '\t'
  };

  let convertedText = '';
  for (const char of text) {
    convertedText += boldChars[char] || char;
  }
  return convertedText;
}

// Define other conversion functions similarly

function convertToItalic(text) {
  const italicChars = {
    'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏',
    'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗',
    'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟',
    'Y': '𝘠', 'Z': '𝘡',
    'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩',
    'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱',
    'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹',
    'y': '𝘺', 'z': '𝘻',
    '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗',
    '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')',
    '-': '-', '+': '+', '=': '=', '{': '{', '}': '}', '[': '[', ']': ']', '|': '|', '\\': '\\', ':': ':',
    ';': ';', '<': '<', '>': '>', ',': ',', '.': '.', '/': '/', '?': '?', '_': '_', '`': '`', '~': '~',
    '"': '"', "'": "'", ' ': ' ', '\n': '\n', '\t': '\t'
  };

  let convertedText = '';
  for (const char of text) {
    convertedText += italicChars[char] || char;
  }
  return convertedText;
}

function convertToBoldItalic(text) {
  const boldItalicChars = {
    'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷',
    'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿',
    'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇',
    'Y': '𝚈', 'Z': '𝚉',
    'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑',
    'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙',
    'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡',
    'y': '𝚢', 'z': '𝚣',
    '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿',
    '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')',
    '-': '-', '+': '+', '=': '=', '{': '{', '}': '}', '[': '[', ']': ']', '|': '|', '\\': '\\', ':': ':',
    ';': ';', '<': '<', '>': '>', ',': ',', '.': '.', '/': '/', '?': '?', '_': '_', '`': '`', '~': '~',
    '"': '"', "'": "'", ' ': ' ', '\n': '\n', '\t': '\t'
  };

  let convertedText = '';
  for (const char of text) {
    convertedText += boldItalicChars[char] || char;
  }
  return convertedText;
}

function convertToDoubleStruck(text) {
  const doubleStruckChars = {
    'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ',
    'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ',
    'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏',
    'Y': '𝕐', 'Z': 'ℤ',
    'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙',
    'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡',
    'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩',
    'y': '𝕪', 'z': '𝕫',
    '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡',
    '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')',
    '-': '-', '+': '+', '=': '=', '{': '{', '}': '}', '[': '[', ']': ']', '|': '|', '\\': '\\', ':': ':',
    ';': ';', '<': '<', '>': '>', ',': ',', '.': '.', '/': '/', '?': '?', '_': '_', '`': '`', '~': '~',
    '"': '"', "'": "'", ' ': ' ', '\n': '\n', '\t': '\t'
  };

  let convertedText = '';
  for (const char of text) {
    convertedText += doubleStruckChars[char] || char;
  }
  return convertedText;
}

// Define other conversion functions similarly

function convertText() {
  const inputText = document.getElementById("inputText").value;
  const textStyle = document.getElementById("textStyle").value;
  let outputText = "";

  switch (textStyle) {
    case "bold":
      outputText = convertToBold(inputText);
      break;
    case "italic":
      outputText = convertToItalic(inputText);
      break;
    case "boldItalic":
      outputText = convertToBoldItalic(inputText);
      break;
    case "doubleStruck":
      outputText = convertToDoubleStruck(inputText);
      break;
    // Handle other cases similarly
    default:
      break;
  }

  document.getElementById("outputText").value = outputText;
}

// copy the converted text to Clipboard
function copyOutput() {
  const outputTextarea = document.getElementById("outputText");
  outputTextarea.select();
  document.execCommand("copy");
}
