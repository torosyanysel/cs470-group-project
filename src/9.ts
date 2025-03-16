
import random

def get_random_ts_code():
    """Generate a random TS code."""
    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    code = ''
    for i in range(8):
        code += random.choice(letters) + random.choice(numbers)
    return code