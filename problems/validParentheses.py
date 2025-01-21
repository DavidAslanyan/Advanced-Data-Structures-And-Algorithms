def isValid(s):
    brackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    stack = []

    for char in s:
      if (char in brackets):
        if not stack or stack[- 1] != brackets[char]:
            return False
        stack.pop()
      else:
        stack.append(char)

    return len(stack) == 0
